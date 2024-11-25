<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="logo">
        <router-link to="/">
          <img :src="logo" alt="Logo" class="logo-image" />
          <!-- <img :src="escrita" alt="escrita" class="logo-image" /> -->
        </router-link>
      </div>
      <ul class="nav-links">
        <li>
          <router-link to="/">Home</router-link>
        </li>
      </ul>
      <div class="hamburger" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>
</template>

<script>
import logoImage from '@/assets/logo.png'; 
// import escritaLogo from '@/assets/escrita.png'; 

export default {
  data() {
    return {
      showMenu: false,
      logo: logoImage,
      // escrita: escritaLogo
    };
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    closeMenu() {
      this.showMenu = false;
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #fab920;
  padding: 1rem;
  color: #fff;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo-image {
  height: 120px;         
  margin-right: 10px;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;
}

.nav-links a:hover {
  text-decoration: underline;
}

.hamburger {
  display: none;
  cursor: pointer;
}

.hamburger .bar {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 5px;
}

.mobile-nav {
  list-style: none;
  padding: 0;
}

.mobile-nav li {
  margin: 1rem 0;
}

.mobile-nav a {
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
}

@media screen and (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hamburger {
    display: block;
  }
}
</style>
