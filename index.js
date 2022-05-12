const express = require('express');
const app = express();
const petRouter = require('./routes/pets.js')

app.use(petRouter); /* Usar a importação do petRouter */

//Criar rota de servicos

app.get('/', (req, res) => {
    res.send('Welcome!');
})


app.listen(3000, () => console.log('Rodando....'))



