<template>
  <div class="login-page">
    <NavBarAdm />
    <div class="form-container">
      <h1>Login</h1>
      <form @submit.prevent="handleLogin">
        <label for="usuario">Usuário:</label>
        <input type="text" id="usuario" v-model="usuario" required />

        <label for="senha">Senha:</label>
        <input type="password" id="senha" v-model="senha" required />

        <button type="submit">Entrar</button>

        <p v-if="erro" class="error-msg">Usuário ou senha incorretos.</p>
      </form>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import NavBarAdm from '../components/NavBarAdm.vue';

export default defineComponent({
  name: 'LoginView',
  components: {
    NavBarAdm,
  },
  setup() {
    const usuario = ref('');
    const senha = ref('');
    const erro = ref(false);
    const router = useRouter(); 

    const handleLogin = () => {
      if (usuario.value === 'admin' && senha.value === 'admin') {
        erro.value = false;
        router.push('/dashboard');
      } else {
        erro.value = true;
      }
    };

    return {
      usuario,
      senha,
      erro,
      handleLogin,
    };
  },
});
</script>

<style scoped>
.login-page {
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

h1 {
  margin-bottom: 1rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 1rem;
  font-weight: bold;
}

input {
  padding: 0.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
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

.error-msg {
  color: red;
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
}
</style>
