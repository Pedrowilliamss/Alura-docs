import { encontrarUsuario } from "../db/usuariosDb.js";

function registrarEventosLogin(socket, io) {
    socket.on("autenticar_usuario", async ({nome, senha}) => {
        const usuario = await encontrarUsuario(nome);

        console.log(usuario);
    })
}

export default registrarEventosLogin;