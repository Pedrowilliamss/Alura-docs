import { documentosColecao } from "./dbConnect.js";

function obterDocumentos () {
    const documentos = documentosColecao.find().toArray();
    return documentos;
}

function adicionarDocumento (nome) {
    const resultado = documentosColecao.insertOne({
        nome,
        texto: ""
    });

    return resultado
}

function encontraDocumento (nome) {
    const documento = documentosColecao.findOne({
        nome
    });

    return documento
}

function atualizaDocumento (nome, texto) {
    const atualizacao = documentosColecao.updateOne({
        nome
    }, {
        $set: {
            texto
        }
    })

    return atualizacao;
}

export { encontraDocumento, atualizaDocumento,  obterDocumentos, adicionarDocumento }