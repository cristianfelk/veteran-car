<template>
    <NavBarAdm />
    
    <br>
    <br>
    <br>
    <br>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br>
    
    
    <FooterBar />
    </template>
    
    <script>
    import {
        defineComponent
    } from 'vue';
    import NavBarAdm from '../components/NavBarAdm.vue';
    
    export default defineComponent({
        name: 'HomeView',
    
        components: {
            NavBarAdm,
        },
    });
    </script>
    
    <style scoped>
    .home-sup {
        background-color: bisque;
        padding: 30%;
        width: 20px;
    }
    </style>
    