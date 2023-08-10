Server Chatroom

```console
$ cd server
$ install yarn
## lancer le server sur le port par defaut 3001
$ node server.js 
## sinon lancer la commander d'apres (pas testé)
$ yarn start : http://localhost:3001
```
Routes :

    POST http://localhost:3001/login

    => fournir un objet contenant email et password, par exemple

    {
        email: 'bouclierman@herocorp.io',
        password: 'jennifer'
    }

Identifiants valides :

    bouclierman@herocorp.io/jennifer
    acidman@herocorp.io/fructis
    captain.sportsextremes@herocorp.io/pingpong

POST http://localhost:3001/forgot

GET http://localhost:3001/theme/{email}