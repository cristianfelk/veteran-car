const express = require('express');
const app = express();

app.use(express.json());

const routes = require('./routes');
routes(app);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
