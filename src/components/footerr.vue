<template>
    <v-footer app dark>
      <v-container>
        <v-row>
          <!-- Logo and About Section -->
          <v-col cols="12" md="4">
            <v-img src="/path-to-your-logo/logo.png" max-width="150"></v-img>
            <p class="mt-3">
              Welcome to <strong>ShopEase</strong>, your go-to online shop for the
              best quality products and exceptional service.
            </p>
          </v-col>
  
          <!-- Navigation Links -->
          <v-col cols="12" md="4">
            <h3 class="text-h6 mb-3">Quick Links</h3>
            <v-list dense>
              <v-list-item v-for="(link, index) in links" :key="index" link>
                <v-list-item-title>{{ link.name }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
  
          <!-- Contact Info and Social Links -->
          <v-col cols="12" md="4">
            <h3 class="text-h6 mb-3">Contact Us</h3>
            <p><v-icon left>mdi-phone</v-icon> +123-456-7890</p>
            <p><v-icon left>mdi-email</v-icon> support@shopease.com</p>
            <p><v-icon left>mdi-map-marker</v-icon> 123 Main Street, NY</p>
  
            <h3 class="text-h6 mt-4">Follow Us</h3>
            <v-btn icon v-for="(icon, index) in socialIcons" :key="index" :href="icon.link" target="_blank">
              <v-icon>{{ icon.icon }}</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
        <v-row class="text-center mt-3">
          <v-col>
            <p>&copy; {{ new Date().getFullYear() }} ShopEase. All rights reserved.</p>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </template>
  
  <script>
  export default {
    name:'footerr',
    data() {
      return {
        links: [
          { name: "Home", href: "/" },
          { name: "Shop", href: "/shop" },
          { name: "About Us", href: "/about" },
          { name: "Contact", href: "/contact" },
        ],
        socialIcons: [
          { icon: "mdi-facebook", link: "https://facebook.com" },
          { icon: "mdi-twitter", link: "https://twitter.com" },
          { icon: "mdi-instagram", link: "https://instagram.com" },
          { icon: "mdi-linkedin", link: "https://linkedin.com" },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  v-footer {
    background-color: #2c3e50;
    color: #fff;
  }
  v-footer a {
    color: #fff;
    text-decoration: none;
  }
  </style>
  