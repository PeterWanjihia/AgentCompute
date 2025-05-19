// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract JobMarketplace {

    // -------------------------
    // STRUCTS
    // -------------------------

    // Represents a compute supplier on the platform
    struct Supplier {
        address wallet;        // Their public wallet address
        bool registered;       // Tracks if they've already signed up
        uint reputation;       // For future use (job completion score, etc.)
    }

    // Represents an AI/computation job
    struct Job {
        uint jobId;                // Unique ID (auto-incremented)
        address researcher;        // Who submitted the job
        address assignedSupplier;  // Supplier chosen to run the job
        uint budget;               // Amount (in HBAR) to be paid on completion
        bool assigned;             // Whether job is already assigned
        bool completed;            // Whether supplier has submitted result
        string inputIpfs;          // Input file location (e.g. training data)
        string outputIpfs;         // Result file location (e.g. proof, output)
    }

    // -------------------------
    // STATE VARIABLES
    // -------------------------

    mapping(address => Supplier) public suppliers;
    // Store all suppliers using their wallet address as the key

    mapping(uint => Job) public jobs;
    // Store all jobs using a numerical job ID

    uint public nextJobId = 1;
    // Counter that increments every time a new job is created

    address public deployer;
    // Store the deployer's address to restrict some functions (like job submission)

    constructor() {
        deployer = msg.sender; // Set the deployer's address
    }

    // -------------------------
    // EVENTS
    // -------------------------

    event SupplierRegistered(address supplier);
    // Event to notify when a supplier is registered

    event JobSubmitted(uint jobId, address researcher, uint budget, string inputIpfs);
    // Event to notify when a job has been successfully submitted

    event JobAssigned(uint indexed jobId, address indexed supplier);
    // Event to notify when a job is assigned to a supplier

    // -------------------------
    // FUNCTIONS
    // -------------------------

    // Function to register a supplier (can only be called by non-deployer addresses)
    function registerSupplier() public {
        require(msg.sender != deployer, "Deployer cannot be a supplier");
        require(!suppliers[msg.sender].registered, "Already registered");

        suppliers[msg.sender] = Supplier({
            wallet: msg.sender,
            registered: true,
            reputation: 0
        });

        emit SupplierRegistered(msg.sender);
    }

    // Function to submit a job
    function submitJob(string memory inputIpfs) public payable {
        require(msg.sender != deployer, "Deployer cannot submit jobs");
        require(msg.value > 0, "Budget must be greater than 0");
        require(bytes(inputIpfs).length > 0, "IPFS hash required");

        uint jobId = nextJobId;

        jobs[jobId] = Job({
            jobId: jobId,
            researcher: msg.sender,
            assignedSupplier: address(0),
            budget: msg.value,
            assigned: false,
            completed: false,
            inputIpfs: inputIpfs,
            outputIpfs: ""
        });

        nextJobId += 1;

        emit JobSubmitted(jobId, msg.sender, msg.value, inputIpfs);
    }

    // Function to assign a job to a supplier
    function assignJob(uint jobId, address supplier) public {
        // 🔐 Validation: Does job exist?
        require(jobId < nextJobId, "Invalid job ID");

        // 📦 Fetch job
        Job storage job = jobs[jobId];

        // ❌ Already assigned?
        require(!job.assigned, "Job already assigned");

        // 🧾 Is supplier registered?
        require(suppliers[supplier].registered, "Supplier not registered");

        // Cannot assign to its own creator
        require(job.researcher != supplier, "Cannot assign job to its own creator");

        // ✅ Assign job
        job.assigned = true;
        job.assignedSupplier = supplier;

        emit JobAssigned(jobId, supplier);
    }

}