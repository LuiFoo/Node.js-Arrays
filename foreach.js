const notas = [10, 6.5, 8, 7.5]

let somaNotas = 0

notas.forEach((dados) => {
    somaNotas += dados
})

const media = somaNotas / notas.length

console.log(media)