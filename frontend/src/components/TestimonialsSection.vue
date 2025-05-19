<template>
    <div class="testimonials-section">
      <h2 class="section-title">What Our Users Say</h2>
      <div class="testimonial-cards">
        <div class="testimonial-card">
          <p class="testimonial-quote">
            "AgentCompute transformed how I train AI models. Instead of waiting days for cloud GPUs, I get instant access to high-performance compute at a fraction of the cost. Game-changer!"
          </p>
          <div class="testimonial-user">
            <p class="user-name">Dr. Emily Carter</p>
            <p class="user-role">AI Researcher</p>
            <p class="user-company">NeuralNet Labs</p>
          </div>
          <div class="user-rating">⭐⭐⭐⭐⭐</div>
        </div>
        
        <div class="testimonial-card">
          <p class="testimonial-quote">
            "I used to let my GPUs sit idle when I wasn’t gaming. Now, they’re working for me—earning passive income 24/7. Setting it up was ridiculously easy!"
          </p>
          <div class="testimonial-user">
            <p class="user-name">Dr. Emily Carter</p>
            <p class="user-role">AI Researcher</p>
            <p class="user-company">NeuralNet Labs</p>
          </div>
          <div class="user-rating">⭐⭐⭐⭐</div>
        </div>
        
        <div class="testimonial-card">
          <p class="testimonial-quote">
            "We cut our AI training expenses in half by switching to AgentCompute. The decentralized model is the future—scalable, cost-effective, and trustless."
          </p>
          <div class="testimonial-user">
            <p class="user-name">Dr. Emily Carter</p>
            <p class="user-role">AI Researcher</p>
            <p class="user-company">NeuralNet Labs</p>
          </div>
          <div class="user-rating">⭐⭐⭐</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TestimonialsSection',
  };
  </script>
  
  <style scoped>
  .testimonials-section {
    padding: 60px 20px;
    text-align: center;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 40px;
    color: var(--black);
  }
  
  .testimonial-cards {
    display: flex;
    justify-content: space-around;
    gap: 30px;
    flex-wrap: wrap;
  }
  
  .testimonial-card {
    background-color: var(--white);
    padding: 30px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 280px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .testimonial-quote {
    font-size: 1.25rem;
    font-weight: normal;
    margin-bottom: 20px;
    color: var(--dark-bg);
  }
  
  .testimonial-user {
    margin-bottom: 20px;
  }
  
  .user-name {
    font-weight: bold;
  }
  
  .user-role,
  .user-company {
    font-size: 1rem;
    color: var(--light-text);
  }
  
  .user-rating {
    font-size: 1.25rem;
    color: gold;
  }
  </style>
  