<template>
    <div class="feature-section">
      <h2 class="section-title">Why AgentCompute</h2>
      <div class="feature-cards">
        <div class="feature-card">
          <img src="../assets/homepage/autonomous.png" alt="Autonomous Execution" class="feature-icon" />
          <h3 class="feature-title">Autonomous Execution</h3>
          <p class="feature-description">
            AI jobs are intelligently assigned to available GPUs, ensuring efficiency and speed—without manual intervention.
          </p>
        </div>
        <div class="feature-card">
          <img src="../assets/homepage/secure.png" alt="Secure & Reliable" class="feature-icon" />
          <h3 class="feature-title">Secure & Reliable</h3>
          <p class="feature-description">
            Blockchain-backed execution ensures trust, reliability, and protection for both job submitters and compute providers.
          </p>
        </div>
        <div class="feature-card">
          <img src="../assets/homepage/trustless.png" alt="Trustless Smart Contracts" class="feature-icon" />
          <h3 class="feature-title">Trustless Smart Contracts</h3>
          <p class="feature-description">
            Transparent, automated payments via Hedera. No intermediaries, just seamless transactions.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeatureSection',
  };
  </script>
  
  <style scoped>
  .feature-section {
    padding: 60px 20px;
    text-align: center;
  }
  
  .section-title {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  .feature-cards {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .feature-card {
    background-color: var(--white);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 280px;
    text-align: center;
  }
  
  .feature-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
  
  .feature-title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 10px;
  }
  
  .feature-description {
    font-size: 1rem;
    color: var(--light-text);
  }
  </style>
  