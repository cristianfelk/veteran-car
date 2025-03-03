<template>
<NavBar />

</template>

<script>
import {
    defineComponent
} from 'vue';
import NavBar from '../components/NavBar.vue';

export default defineComponent({
    name: 'HomeView',

    components: {
        NavBar,
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
