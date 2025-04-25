const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => { res.send('App rodando'); });

app.listen(porta, () => {
    console.log(`Aplicação rodando na porta ${porta}`);
});