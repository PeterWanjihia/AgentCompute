<template>
    <header class="navbar">
      <div class="navbar-logo">
        <!-- Logo here -->
        <img src="../assets/homepage/logo.png" alt="AgentCompute Logo" />

      </div>
      <nav class="navbar-links">
        <ul>
          <li><a href="#features">Features</a></li>
          <li><a href="#participate">Participate</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#about-us">About Us</a></li>
          <li><a href="#sign-up" class="btn">Sign Up</a></li>
          <li><a href="#log-in" class="btn">Log In</a></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
    background-color: var(--dark-bg);
    color: var(--white);
  }
  
  .navbar-logo img {
    height: 40px; /* Adjust this to fit your logo */
  }
  
  .navbar-links ul {
    display: flex;
    gap: 20px;
    list-style: none;
  }
  
  .navbar-links a {
    color: var(--white);
    text-decoration: none;
    font-size: 16px;
    font-weight: 500;
  }
  
  .navbar-links .btn {
    background-color: var(--secondary);
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: 600;
  }
  
  .navbar-links a:hover {
    color: var(--button-hover);
  }
  
  .navbar-links .btn:hover {
    background-color: var(--button-hover);
  }
  </style>
  