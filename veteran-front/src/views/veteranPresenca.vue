<template>
    <div class="home-sup">
      <NavBarAdm />
      <h1>Lista de presença</h1><br>
      <div class="form-container">
        <form @submit.prevent="handleSubmit">
          <label for="nome">Nome Completo:</label>
          <input type="text" id="nome" v-model="nome" required />
  
          <label class="checkbox">
            <input type="checkbox" v-model="presenca" />
            Confirmar presença
          </label>
  
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent, ref } from 'vue';
  import NavBarAdm from '../components/NavBarAdm.vue';
  
  export default defineComponent({
    name: 'HomeView',
    components: {
      NavBarAdm,
    },
    setup() {
      const nome = ref('');
      const presenca = ref(false);
  
      const handleSubmit = () => {
        console.log('Nome:', nome.value);
        console.log('Presença:', presenca.value);
        // Aqui você pode tratar os dados como desejar
      };
  
      return {
        nome,
        presenca,
        handleSubmit,
      };
    },
  });
  </script>
  
  <style scoped>
  .home-sup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: white;
  }
  
  .form-container {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
    text-align: left;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin-top: 1rem;
    font-weight: bold;
  }
  
  input[type="text"] {
    padding: 0.5rem;
    margin-top: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  
  .checkbox {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  button {
    margin-top: 1.5rem;
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: bold;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  