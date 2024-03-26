# Installation

- ***With Docker***
  - `docker-compose up -d`


- ***Without Docker***

  - server
    - `cd server`
    - `npm install --force`
    - `node serer.js`

  - client

    - `npm install --force`
    - `npm run dev`
  
<hr>

# Configuration

- fix ***environment*** variables
- `./.env`
  
⚠️ : if you want to change default **port** ,
you have to declare your ***environment*** on a script `exportEnv.sh` and execute the script `. ./exportEnv.sh`
```bash
  # cat ./exportEnv.sh 
  export CHAT_CLIENT_PORT=5173
  export CHAT_SERVER_PORT=3001

  echo CHAT_SERVER_PORT=$CHAT_SERVER_PORT > server/.env
```
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


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
