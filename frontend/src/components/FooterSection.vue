<template>
    <div class="footer-section">
      <div class="footer-links">
        <div class="footer-column">
          <h3>Product Links</h3>
          <ul>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">API Documentation</a></li>
          </ul>
        </div>
  
        <div class="footer-column">
          <h3>Company Information</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
          </ul>
        </div>
  
        <div class="footer-column">
          <h3>Support & Community</h3>
          <ul>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Contact Support</a></li>
          </ul>
          <div class="social-links">
            <a href="#"><img src="../assets/homepage/discord.svg" alt="Discord" /></a>
            <a href="#"><img src="../assets/homepage/github.svg" alt="GitHub" /></a>
            <a href="#"><img src="../assets/homepage/linkedin.svg" alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
  
      <div class="footer-bottom">
        <p>&copy; 2025 AgentCompute. All Rights Reserved.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FooterSection',
  };
  </script>
  
  <style scoped>
  .footer-section {
    background-color: var(--dark-bg);
    color: var(--white);
    padding: 40px 20px;
  }
  
  .footer-links {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  
  .footer-column {
    flex: 1;
    min-width: 250px;
    margin: 10px;
  }
  
  .footer-column h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .footer-column ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-column ul li {
    margin-bottom: 8px;
  }
  
  .footer-column a {
    text-decoration: none;
    color: var(--white);
    font-size: 1rem;
  }
  
  .footer-column a:hover {
    color: var(--secondary);
  }
  
  .social-links {
    display: flex;
    gap: 15px;
  }
  
  .social-links a img {
    width: 30px;
    height: 30px;
  }
  
  .footer-bottom {
    text-align: center;
    font-size: 0.875rem;
    color: var(--light-text);
  }
  
  .footer-bottom p {
    margin: 0;
  }
  </style>
  