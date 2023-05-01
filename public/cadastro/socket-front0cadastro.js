const socket = io();

function emitirCadastrarUsuario(dados) {
    socket.emit("cadastrar-usuario",dados);
}

export { emitirCadastrarUsuario }