<template>
    <div class="hero-section">
      <div class="hero-background">
        <h1 class="hero-title">Train Faster, Earn Smarter</h1>
        <p class="hero-subheading">With Decentralized AI Compute</p>
        <p class="hero-description">Train AI models faster & cheaper by tapping into idle GPUs worldwide—powered by Hedera.</p>
        <div class="hero-buttons">
          <button class="cta-btn">Get Compute</button>
          <button class="cta-btn">Earn with GPU</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
  };
  </script>
  
  <style scoped>
  .hero-section {
    background-color: var(--dark-bg); /* Background color */
    color: var(--white);  /* Text color */
    color: antiquewhite;
  }
  
  .hero-background {
    background-image: url('@/assets/homepage/background.png');  /* Background image */
    background-image: url('../assets/homepage/background.png');

    background-size: cover;
    background-position: center;
    text-align: center;
    padding: 120px 20px; /* Add padding for spacing */
  }
  
  .hero-title {
    font-family: Fustat, sans-serif;
    font-size: 48px; /* Large heading size */
    font-weight: normal;
    margin-bottom: 20px;
  }
  
  .hero-subheading {
    font-family: Fustat, sans-serif;
    font-size: 32px;
    font-weight: normal;
    margin-bottom: 20px;
  }
  
  .hero-description {
    font-family: Fustat, sans-serif;
    font-size: 20px;
    font-weight: normal;
    margin-bottom: 40px;
  }
  
  .hero-buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .cta-btn {
    background-color: var(--secondary);
    border: none;
    color: var(--white);
    font-family: Fustat, sans-serif;
    font-size: 16px;
    font-weight: 500;
    padding: 12px 30px;
    border-radius: 25px;
    cursor: pointer;
  }
  
  .cta-btn:hover {
    background-color: var(--button-hover);
  }
  </style>
  