<template>

    <nav>
        
      <ul class="nav">
        <li><a href="/cataluge">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">contact</a></li>
   
      </ul>
    </nav>
  </template>
  
  <style scoped>
  nav {
    display: flex;
    justify-content: center; /* Centers the entire nav */
    align-items: center;
    padding: 20px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
  }
  
  nav ul {
    display: flex;
    gap: 50px;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  nav ul li a {
    font-weight: bold;
    font-size: 1rem;
    color: rgb(104, 101, 101);
    text-decoration: none;
  }
/* Responsive adjustments */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column; /* Stack items vertically */
    align-items: center;
    gap: 20px; /* Reduce gap between items */
  }

  nav ul li a {
    font-size: 0.9rem; /* Adjust font size for smaller screens */
  }
}

@media (max-width: 480px) {
  nav ul {
    gap: 15px; /* Further reduce gap on very small screens */
  }

  nav ul li a {
    font-size: 0.8rem; /* Smaller font size for compact devices */
  }
}
</style>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>