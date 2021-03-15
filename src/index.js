const express = require('express');

const app = express();

app.post('/account', (request, response) => {
    const { name, cpf } = request.body;
});

app.listen(3333);
