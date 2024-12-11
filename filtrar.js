const alunos = ['Daniel', 'Marcos', 'Giovana', 'Victor']
const medias = [10, 9, 8, 7]

const tamanhoNome = alunos.filter((_, indice) => {
    return medias[indice] < 9
})

console.log(tamanhoNome)
