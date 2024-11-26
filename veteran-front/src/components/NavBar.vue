<template>
<nav class="navbar">
    <div class="navbar-container">
        <div class="logo">
            <router-link to="/">
                <img :src="logo" alt="Logo" class="logo-image" />
            </router-link>
        </div>
        <ul class="nav-opcoes">
            <li>
                <router-link to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/evento">Eventos</router-link>
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
            showMenu: false,
            logo: logoImage,
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
    padding: 0.5rem;
    color: #fff;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 20px;
}

.logo {
    flex-shrink: 0;
}

.logo-image {
    height: 120px;
    margin-left: 20px;
}

.nav-opcoes {
    display: flex;
    list-style: none;
    padding-left: 0;
    flex-grow: 1;
    justify-content: center;
}

.nav-opcoes li {
    margin: 0 2rem;
}

.nav-opcoes a {
    color: #000000;
    text-decoration: none;
    font-size: 2rem;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.nav-opcoes a:hover {
    text-decoration: underline;
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
    .nav-opcoes {
        display: none;
    }
}
</style>
