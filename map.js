const notas = [10, 6.5, 8, 7.5]

const notasAtualizadas = notas.map((dados) => dados + 1 >= 10 ? 10: dados + 1)

console.log(notasAtualizadas);
