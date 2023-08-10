import { io } from "socket.io-client";

// On cree une variable 'socket' qui sera notre porte d'entree pour tous les 
// tubes de communications avec le serveur local (toujours en local)
// Pour ce faire, on se connecte via la methode 'io' de la librairie 
// 'socket.io-client' en lui founissant l'adresse sur laquelle 
// serveur socket.io ecoute 
export const socket = io('http://localhost:3001')