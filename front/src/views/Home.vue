<template>
<NavBar />

<section class="news-section">
    <h2 class="section-title">Últimas Notícias</h2>
    <div class="news-grid">
        <div class="news-card" v-for="(news, index) in newsList" :key="index">
            <img :src="news.image" alt="Imagem da notícia" class="news-image" />
            <div class="news-content">
                <h3 class="news-title">{{ news.title }}</h3>
                <p class="news-summary">{{ news.summary }}</p>
                <a :href="news.link" class="read-more" target="_blank">Leia mais →</a>
            </div>
        </div>
    </div>
</section>

<FooterBar />
</template>

<script>
import {
    defineComponent
} from 'vue';
import NavBar from '../components/NavBar.vue';
import FooterBar from '../components/FooterBar.vue';
import encontro2025 from '@/assets/encontro2025.png';

export default defineComponent({
    name: 'HomeView',
    components: {
        NavBar,
        FooterBar,
    },
    data() {
        return {
            newsList: [{
                    title: '5º Encontro Internacional de carros antigos 2025',
                    summary: 'Evento reúne modelos raros e colecionadores de todo o país. Veja os destaques!',
                    image: encontro2025,
                    link: '#',
                },
                {
                    title: 'Restauração de um Fusca 1967 impressiona entusiastas',
                    summary: 'Projeto detalhado traz de volta à vida um clássico esquecido em um celeiro.',
                    image: 'https://via.placeholder.com/400x200?text=Fusca+1967',
                    link: '#',
                },
                {
                    title: 'Dicas para conservar seu carro antigo no inverno',
                    summary: 'Especialistas explicam como proteger pintura, motor e estofado em baixas temperaturas.',
                    image: 'https://via.placeholder.com/400x200?text=Dicas+de+Conservação',
                    link: '#',
                },
            ],
        };
    },
});
</script>

<style scoped>
.news-section {
    padding: 2rem;
    background-color: #f8f8f8;
}

.section-title {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    font-weight: bold;
    color: #333;
}

.news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.news-card {
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.2s;
}

.news-card:hover {
    transform: translateY(-5px);
}

.news-image {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: block;
    background-color: #fff;
}


.news-content {
    padding: 1rem;
}

.news-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: #1a1a1a;
}

.news-summary {
    font-size: 0.95rem;
    margin: 0.5rem 0 1rem;
    color: #555;
}

.read-more {
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
}

.read-more:hover {
    text-decoration: underline;
}
</style>
