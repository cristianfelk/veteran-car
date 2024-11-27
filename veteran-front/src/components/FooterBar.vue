<template>
<nav class="footer-bar">
    <div class="footer-container">
        <div class="social-links">
            <!-- Facebook -->
            <a href="https://www.facebook.com/share/omb5Th9YbZS6dLSE/?mibextid=LQQJ4d" target="_blank" class="social-icon">
                <img :src="logoFacebook" alt="Facebook" class="social-img" />
            </a>
            <!-- Instagram -->
            <a href="https://www.instagram.com/veterancarpzosc?igsh=NXpta21xMnVwZGk4" target="_blank" class="social-icon">
                <img :src="logoInsta" alt="Instagram" class="social-img" />
            </a>
            <!-- WhatsApp -->
            <a href="https://wa.me/554988597933" target="_blank" class="social-icon">
                <img :src="logoWhats" alt="WhatsApp" class="social-img" />
            </a>
        </div>
    </div>
</nav>
</template>
  
<script>
import logoFacebook from '@/assets/facebook-logo.png';
import logoInsta from '@/assets/instagram-logo.png';
import logoWhats from '@/assets/whatsapp-logo.png';
import background from '@/assets/fundo-navbar.png'

export default {
    name: 'FooterBar',
    data() {
        return {
            logoFacebook,
            logoInsta,
            logoWhats,
            background
        };
    }
};
</script>  

<style scoped>
.footer-bar {
    background-image: url('@/assets/fundo-navbar.png');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat;
    padding: 1rem;
    color: #fff;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: auto; 
    min-height: 80px;
    left: 0; 
}


.footer-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.social-links {
    display: flex;
    justify-content: flex-end;
    width: 100%;
}

.social-icon {
    margin: 0 1rem;
    text-align: center;
}

.social-img {
    width: 50px;
    height: 50px;
}

.social-icon:hover .social-img {
    transform: scale(1.2);
}

@media screen and (max-width: 768px) {
    .footer-container {
        flex-direction: column;
        align-items: center;
    }

    .social-links {
        justify-content: center;
    }
}
</style>
