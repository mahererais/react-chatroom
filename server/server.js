/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prefer-destructuring */
/*
 * Require
 */
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');
const { log } = require('console');

/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
    },
});

const dotenv = require('dotenv');
dotenv.config({ path: `.env.local`, override: true });

const port = process.env.CHAT_SERVER_PORT || 3001;
console.log("port numero " + port);

const db = {
    users: {
        'maher@gmail.com': {
            password: 'maher',
            username: 'maher',
            color: '#FFB400',
        },
        'tata@gmail.com': {
            password: 'tata',
            username: 'tata',
            color: '#c23616',
        },
        'toto@gmail.com': {
            password: 'toto',
            username: 'toto',
            color: '#009432',
        },
        'titi@gmail.com': {
            password: 'titi',
            username: 'titi',
            color: '#f0f',
        },
    },
};

/*
 * Express
 */
app.use(bodyParser.json());
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');
    // response.header('Access-Control-Allow-Credentials', true);
    response.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    response.header(
        'Access-Control-Allow-Methods',
        'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
});

// Page d'accueil du serveur : GET /
app.get('/', (request, response) => {
    response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p>Si tu vois ce message, c'est que ton serveur est bien lancé !</p>
      <div>Désormais, tu dois venir utiliser l'API</div>
      <ul style="display: inline-block; margin-top: .2em">
        <li><code>POST http://localhost:${port}/login</code></li>
        <li><code>POST http://localhost:${port}/forgot</code></li>
        <li><code>GET http://localhost:${port}/theme/{email}</code></li>
      </ul>
      <br>
      <p>liste des comptes utilisateurs</p>
      <ul>
        <li><code><p style="margin: 0">id: maher@gmail.com</p> <p style="margin: 0">pwd: maher</p></code></li>
        <li><code><p style="margin: 0">id: tata@gmail.com</p> <p style="margin: 0">pwd: tata</p></code></li>
        <li><code><p style="margin: 0">id: toto@gmail.com</p> <p style="margin: 0">pwd: toto</p></code></li>
        <li><code><p style="margin: 0">id: titi@gmail.com</p> <p style="margin: 0">pwd: titi</p></code></li>
      </ul>
    </div>
  `);
});

// Login avec vérification : POST /login
app.post('/login', (request, response) => {
    console.log('>> POST /login', request.body);

    // Extraction des données de la requête provenant du client.
    const {
        email,
        password
    } = request.body;

    // Vérification des identifiants de connexion proposés auprès de la DB.
    let username;
    if (db.users[email] && db.users[email].password === password) {
        username = db.users[email].username;
    }

    // Réponse HTTP adaptée.
    if (username) {
        console.log('<< 200 OK', username);
        response.json({
            pseudo: username,
            color: db.users[email].color
        });
    } else {
        console.log('<< 401 UNAUTHORIZED');
        response.status(401).end();
    }
});

// Mot de passe oublié : POST /forgot
app.post('/forgot', (request, response) => {
    const {
        email
    } = request.body;
    if (db.users[email]) {
        response.json({
            pseudo: db.users[email].username,
        });
    } else {
        response.status(400).end();
    }
});

/*
 * Socket.io
 */
let id = 0;
io.on('connection', (ws) => {
    console.log('>> socket.io - connected');
    ws.on('send_message', (message) => {
        // eslint-disable-next-line no-plusplus
        console.log("Message reçu");
        console.log(message);
        message.id = ++id;
        io.emit('send_message', message);
    });
});

/*
 * Theme json
 */
app.get('/theme/:email', (request, response) => {
    const email = request.params.email;
    if (!email) {
        console.log('<< 400 BAD_REQUEST');
        response.status(400).end();
    }

    let color;
    if (db.users[email] && db.users[email].color) {
        color = db.users[email].color;
    }

    // Réponse HTTP adaptée.
    if (color) {
        console.log('<< 200 OK', email, color);
        response.json({
            color,
        });
    } else {
        console.log('<< 401 UNAUTHORIZED');
        response.status(401).end();
    }
});

/*
 * Server
 */
server.listen(port, () => {
    console.log(`listening on *:${port}`);
});