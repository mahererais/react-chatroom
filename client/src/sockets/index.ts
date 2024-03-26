import { Socket, io } from "socket.io-client";

// On cree une variable 'socket' qui sera notre porte d'entree pour tous les 
// tubes de communications avec le serveur local (toujours en local)
// Pour ce faire, on se connecte via la methode 'io' de la librairie 
// 'socket.io-client' en lui founissant l'adresse sur laquelle 
// serveur socket.io ecoute 
const port = import.meta.env.VITE_chat_server_port;
const host = import.meta.env.VITE_host;

export const socket:Socket = io(`http://${host}${port ? ':'+port: ''}`)
