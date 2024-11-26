<template>
  <NavBar />
  <div class="home-sup">
    <p>Ola</p>
  </div>
  <FooterNav/>
</template>

<script>
import { defineComponent } from 'vue';
import NavBar from '../components/NavBar.vue';
import FooterNav from '../components/FooterNav.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    NavBar,
    FooterNav,
  },
});
</script>

<style scoped>
.home-sup{
  background-color: bisque;
  padding: 30%;
  width: 20px;
}

</style>