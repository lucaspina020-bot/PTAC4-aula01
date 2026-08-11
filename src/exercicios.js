const produtos = [
  { id: 1, nome: 'Caneta', preco: 2.5 },
  { id: 2, nome: 'Caderno', preco: 25 },
  { id: 3, nome: 'Lápis', preco: 1.2 },
]

// Exercício 1
const nomes = produtos.map((produto) => produto.nome)
console.log(nomes)

// Exercício 2
const produtosCaros = produtos.filter((produto) => produto.preco > 5)
console.log(produtosCaros)

// Exercício 3
const produtosBaratos = produtos
  .filter((produto) => produto.preco <= 5)
  .map((produto) => produto.nome)
console.log(produtosBaratos)

// Exercício 4
function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const produto = produtos.find((produto) => produto.id === id)
      resolve(produto)
    }, 300)
  })
}

async function executarBusca() {
  const produto = await buscarProduto(2)
  console.log(produto)
}

executarBusca()
