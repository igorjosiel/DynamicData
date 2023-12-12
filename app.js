const users = [];

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (request, response) => {
    response.render('pages/home', { titlePage: 'Início' });
});

app.post('/users', async (request, response) => {
    const userName = request.body.user;

    if (userName) {
        await users.push(userName);

        response.render('pages/users', {
            users,
            titlePage: 'Usuários'
        });
    }
});

app.get('/users', async (request, response) => {
    response.render('pages/users', {
        users,
        titlePage: 'Usuários'
    });
});

app.get('/users', async (request, response) => {
    response.render('pages/users', {
        users,
        titlePage: 'Usuários'
    });
});

app.use((request, response) => {
    response.render('pages/error', { titlePage: 'Página não encontrada' });
});

app.listen(3000);