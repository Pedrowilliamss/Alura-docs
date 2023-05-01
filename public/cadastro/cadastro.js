import { emitirCadastrarUsuario } from "./socket-frontcadastro.js";

const form = document.getElementById("form_cadastro");

form.addEventListener("submit",(evento) => {
    evento.preventDefault();

    const nome = form["input-usuario"].value;
    const senha = form["input-senha"].value;

    emitirCadastrarUsuario({ nome, senha });
});