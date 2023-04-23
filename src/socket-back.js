import io from "./servidor.js";

io.on("connection", (socket) => {
    console.log("Um cliente se conectou!:", socket.id)
    
    
    socket.on("texto_editor", (texto) => {
        console.log(texto);
    });
});