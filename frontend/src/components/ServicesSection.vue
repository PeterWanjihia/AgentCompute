<template>
    <div class="services-section">
      <h2 class="section-title">Our Services</h2>
      <div class="services-cards">
        <div class="services-card">
          <h3 class="service-title">Compute Seekers (AI Researchers)</h3>
          <p class="service-description">
            Submit AI training jobs, choose GPU power and budget, and get results securely.
          </p>
        </div>
        <div class="services-card">
          <h3 class="service-title">Compute Providers (GPU Owners)</h3>
          <p class="service-description">
            Connect idle GPUs, process AI jobs automatically, and earn passive income.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ServicesSection',
  };
  </script>
  
  <style scoped>
  .services-section {
    padding: 60px 20px;
    text-align: center;
    background-color: var(--grey-color); /* Light background for the section */
  }
  
  .section-title {
    font-size: 2.5rem; /* Larger title size for better prominence */
    font-weight: bold;
    margin-bottom: 40px;
    color: var(--black);
  }
  
  .services-cards {
    display: flex;
    justify-content: space-evenly;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 20px; /* Add margin on top to space from the title */
  }
  
  .services-card {
    background-color: var(--white);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 280px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Hover effect for interaction */
  }
  
  .services-card:hover {
    transform: translateY(-10px); /* Lift card on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* More prominent shadow on hover */
  }
  
  .service-title {
    font-size: 1.5rem; /* Larger font size for titles */
    font-weight: 500;
    margin-bottom: 20px;
    color: var(--secondary); /* Use the secondary color for titles */
  }
  
  .service-description {
    font-size: 1rem;
    color: var(--light-text);
    line-height: 1.5;
    margin-bottom: 20px; /* Add some space below the description */
  }
  
  .services-card img {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
  </style>
  