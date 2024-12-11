const alunos = ['Marcos', 'Daniel', 'Luiz', 'Eduardo', 'Victor']
const notasAlunos = [2, 8, 6, 9, 7]

const lista = [alunos, notasAlunos]

function exibirNotaAlunos(nome) {
    if (lista[0].includes(nome)) {
        const [alunos, notasAlunos] = lista;
        const indice = alunos.indexOf(nome)
        const notaMedia = notasAlunos[indice]
        console.log(`${nome} tem a media ${notaMedia}`)        
    } else {
        console.log('Aluno não encontrado')
    }
    console.log([...alunos, ...notasAlunos])
}

exibirNotaAlunos('Daniel')
exibirNotaAlunos('Daniela')