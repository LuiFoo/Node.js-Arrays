const alunos = ['Marcos', 'Daniel', 'Luiz', 'Eduardo', 'Victor']
const notasAlunos = [2, 8, 6, 9, 7]

const lista = [alunos, notasAlunos]

function exibirNotaAlunos(nome) {
    if (lista[0].includes(nome)) {
        const indice = lista[0].indexOf(nome)
        const notaMedia = lista[1][indice]
        console.log(`${nome} tem a media ${notaMedia}`)        
    } else {
        console.log('Aluno não encontrado')
    }
}

exibirNotaAlunos('Daniel')