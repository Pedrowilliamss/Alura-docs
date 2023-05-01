import { randomBytes } from "crypto";

function criaHashESalSenha(senhaDigitada) {
    const salSenha = randomBytes(16).toString("hex");

    const hashSenha = scryptSync(senhaDigitada, salSenha, 64).tpString("hex");

    return { salSenha, hashSenha }
}

export default criaHashESalSenha;