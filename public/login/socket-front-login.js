import { definirCookie }  from "../utils/coockies.js";

const socket = io();

function emitirAutenticarUsuario(dados) {
    socket.emit("autenticar_usuario", dados);
}

socket.on("autenticacao_sucesso", (tokenJwt) => {
    definirCookie("tokenJwt", tokenJwt)


    alert("Usuario autenticado com sucesso!");
    window.location.href = "/";
});
socket.on("autenticacao_erro", () => alert("Erro na autenticação."));
socket.on("usuario_nao_encontrado", () => alert("Usuario não encontrado"));

export {emitirAutenticarUsuario}