<template>
    <footer class="footer">
      <div class="footer-container">
        <!-- Coluna Sobre -->
        <div class="footer-column">
          <h3>SOBRE</h3>
          <p>
            Clube de Veteran Car de Pinhalzinho SC - Brasil.
            Buscamos um contato mais próximo entre os proprietários de veículos antigos e seus apreciadores.
          </p>
          <ul>
            <li>
              <img :src="logo" alt="Localização" class="location-icon">
              Avenida Capitao Anizio, 1260
            </li>
            <li>
              <img :src="logo" alt="Localização" class="location-icon">
              Efacip - Pinhalzinho - SC/Brasil
            </li>
            <li>
              <img :src="mail" class="location-icon">
              <strong>Email:</strong> <a href="mailto:veterancarpzosc@gmail.com">veterancarpzosc@gmail.com</a>   
            </li>
            <li>
              <img :src="telefone" class="location-icon">
              <strong>Fone:</strong> +55 49 8859-7933</li>
            <li>
              <img :src="whats" class="location-icon">
              <strong>Celular/Whatsapp:</strong> +55 49 8859-7933</li>
          </ul>
        </div>
  
        <!-- Coluna Seja Sócio -->
        <div class="footer-column">
          <h3>SEJA SÓCIO!</h3>
          <img src="@/assets/carro.jpg" alt="Seja Sócio" class="footer-image">
        </div>
  
        <!-- Coluna Últimas Notícias e Classificados -->
        <div class="footer-column">
          <h3>ÚLTIMAS NOTÍCIAS</h3>
          <div class="noticias">
            <p>Nova Diretoria Veteran Car</p>
          </div><br>
          <h3>REDES SOCIAIS</h3>
          <div class="noticias">
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>Veteran Car - Pinhalzinho</p>
      </div>
    </footer>
  </template>
  
  <script>
  import icoLocal from '@/assets/ico_local.png';
  import icoMail from '@/assets/mail.png';
  import icoWhats from '@/assets/whats.png';
  import icoTelefone from '@/assets/telefone.png';

  
  
  export default {
    data() {
      return {
        logo: icoLocal,
        mail: icoMail,
        whats: icoWhats,
        telefone: icoTelefone,
      };
    },
  };
  </script>
  
  <style scoped>
  .footer {
    background-color: rgb(255, 189, 35);
    color: rgb(0, 0, 0);
    padding: 1.5rem;
    font-family: 'Oswald';
  }
  
  .footer-container {
    display: flex;
    justify-content: space-between;
  }
  
  .footer-column {
    width: 30%;
  }
  
  .footer-column h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .footer-column ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-column ul li {
    margin-bottom: 0.5rem;
  }
  
  .footer-column a {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  
  .footer-column a:hover {
    text-decoration: underline;
  }
  
  .footer-image {
    width: 100%;
    max-width: 200px;
    height: auto;
  }
  
  .location-icon {
    width: 16px; /* Tamanho pequeno */
    height: 16px;
    margin-right: 8px; /* Espaço entre o ícone e o texto */
    vertical-align: middle; /* Centraliza o ícone em relação ao texto */
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 2rem;
    font-size: 0.9rem;
    border-top: 1px solid #555;
    padding-top: 1rem;
  }
  
  .footer-bottom a {
    color: rgb(0, 0, 0);
    text-decoration: none;
  }
  
  .footer-bottom a:hover {
    text-decoration: underline;
  }
  
  .social-icons a:hover {
    color: #aaa;
  }
  </style>
  