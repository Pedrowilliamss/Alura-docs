function registrarEventosCadastro(socket, io) {
    socket.on("cadastrar-usuario", (dados) => {
        console.log(dados);
    })
};

export default registrarEventosCadastro;