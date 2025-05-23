<template>
  <nav class="navbar">
    <div class="navbar-container">
      <ul class="nav-opcoes">
        <li>
          <router-link to="/" exact-active-class="active">Início</router-link>
        </li>

        <li>
          <router-link to="/institucional" exact-active-class="active">Institucional</router-link>
        </li>

        <li class="logo">
          <router-link to="/">
            <img :src="logo" alt="Logo" class="logo-image" />
          </router-link>
        </li>

        <li>
          <router-link to="/eventos" exact-active-class="active">Eventos</router-link>
        </li>

        <li>
          <router-link to="/patrocinadores" exact-active-class="active">Patrocinadores</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import logoImage from '@/assets/logo.png';

export default {
  data() {
    return {
      logo: logoImage,
    };
  },
};
</script>

<style scoped>
.navbar {
  background-color: rgb(255, 189, 35);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 0.5rem;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 85px;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.nav-opcoes {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-opcoes li {
  margin: 0 1.5rem;
}

.nav-opcoes li.logo {
  margin: 0 1.5rem;
}

.logo-image {
  margin-top: 130px;
  height: 200px;
}

.nav-opcoes a {
  color: #000000;
  text-decoration: none;
  font-size: 1.3rem;
  font-family: 'Oswald';
}

.nav-opcoes a:hover {
  text-decoration: underline;
}

.nav-opcoes a.active {
  font-weight: bold;
  color: rgb(160, 84, 3);; 
 
}

@media screen and (max-width: 768px) {
  .nav-opcoes {
    display: none;
  }
}
</style>
