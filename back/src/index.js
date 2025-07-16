const express = require('express');
const app = express();
app.use(express.json());

require('./routes')(app);

app.get('/', (req, res) => {
    res.send('Executando aplicativo!');
});

app.listen(3000, () => {
    console.log(`Aplicativo rodando na porta ${3000}`);
});
