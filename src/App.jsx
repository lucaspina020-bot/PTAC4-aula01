const produtos = [
  { id: 1, nome: 'Caneta', preco: 2.5 },
  { id: 2, nome: 'Caderno', preco: 25 },
  { id: 3, nome: 'Lápis', preco: 1.2 },
  { id: 4, nome: 'Borracha', preco: 4.75 },
]

// Exercício 1
const nomes = produtos.slice(0, 3).map((produto) => produto.nome)
console.log('Exercício 1:', nomes)

// Exercício 2
const produtosAcimaDeCinco = produtos
  .slice(0, 3)
  .filter((produto) => produto.preco > 5)
console.log('Exercício 2:', produtosAcimaDeCinco)

// Exercício 3
const nomesAteCinco = produtos
  .slice(0, 3)
  .filter((produto) => produto.preco <= 5)
  .map((produto) => produto.nome)
console.log('Exercício 3:', nomesAteCinco)

// Exercício 4
function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(produtos.find((produto) => produto.id === id))
    }, 300)
  })
}

async function mostrarProduto() {
  const produto = await buscarProduto(2)
  console.log('Exercício 4:', produto)
}

mostrarProduto()

const formatarPreco = (preco) =>
  preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

// Exercício 5
function App() {
  return (
    <main>
      <h1>Produtos abaixo de R$ 10</h1>
      <ul>
        {produtos
          .filter((produto) => produto.preco < 10)
          .map((produto) => (
            <li key={produto.id}>
              {produto.nome} — {formatarPreco(produto.preco)}
            </li>
          ))}
      </ul>
    </main>
  )
}

export default App
