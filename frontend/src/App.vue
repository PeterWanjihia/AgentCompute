<template>
  <div id="app">
    <Navbar />
    <HeroSection />
    <FeatureSection />
    <ServicesSection />
    <TestimonialsSection />
    <FooterSection /> <!-- Add Footer Section here -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import HeroSection from './components/HeroSection.vue';
import FeatureSection from './components/FeatureSection.vue';
import ServicesSection from './components/ServicesSection.vue';
import TestimonialsSection from './components/TestimonialsSection.vue';
import FooterSection from './components/FooterSection.vue';  // Import FooterSection component

export default {
  name: 'App',
  components: {
    Navbar,
    HeroSection,
    FeatureSection,
    ServicesSection,
    TestimonialsSection,
    FooterSection  // Register FooterSection component
  }
};
</script>

<style>
#app {
  text-align: center;
}
</style>
