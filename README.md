# Installation

- ***With Docker***
  - `. ./exportEnv.sh`
  - `make install`


- ***Without Docker***
  - `. ./exportEnv.sh`
  - server
    - `cd server`
    - `npm install --force`
    - `node serer.js`

  - client
    - `cd client`
    - `npm install --force`
    - `npm run dev $CHAT_CLIENT_PORT`
  
<hr>

# Configuration

- create file `exportEnv.sh`
- add model code below on `exportEnv.sh`
- fix ***environment*** variables

```bash
  # cat ./exportEnv.sh 
  export CHAT_CLIENT_PORT=<changeMe!> # default value 5173
  export CHAT_SERVER_PORT=<changeMe!> # default value 3001
  export ALIAS_CHAT_APP=<changeMe!>   # default value .

  VITE_host=<changeMe!-localhost>

  echo CHAT_SERVER_PORT=$CHAT_SERVER_PORT > server/.env.local

  echo VITE_chat_server_port=$CHAT_SERVER_PORT > client/.env.local
  echo VITE_host=$VITE_host >> client/.env.local
```
  
⚠️ : if you want to change default **port** ,
you have to declare your ***environment*** on a script `exportEnv.sh` and execute the script `. ./exportEnv.sh`

🚨: when you change port number, you have to export your variables `. ./exportEnv.sh`

# How to launch

- open your browser on `http://localhost:5190/`
- open an other browser on `http://localhost:5190/`
- server page help 
  - `http://localhost:3001`

- ### login : ***mail / pwd***
  - maher@gmail.com / maher
  - tata@gmail.com / tata
  - toto@gmail.com / toto
  - titi@gmail.com / titi


# deployment

- `make deploy`
- ⚠️ if you set `ALIAS_CHAT_APP` on `exportEnv.sh`, call 
  - `make deploy ALIAS_CHAT_APP=$ALIAS_CHAT_APP`
- `index.html` located on `dist` directory 