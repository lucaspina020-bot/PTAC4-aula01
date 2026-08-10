import { useEffect, useState } from 'react'

const produtos = [
  { id: 1, nome: 'Caneta', preco: 2.5 },
  { id: 2, nome: 'Caderno', preco: 25 },
  { id: 3, nome: 'Lápis', preco: 1.2 },
  { id: 4, nome: 'Borracha', preco: 4.75 },
]

// Exercício 1: cria um novo array contendo somente os nomes.
const nomes = produtos.slice(0, 3).map((produto) => produto.nome)

// Exercício 2: mantém somente os produtos que custam mais de R$ 5.
const produtosAcimaDeCinco = produtos.slice(0, 3).filter(
  (produto) => produto.preco > 5,
)

// Exercício 3: filtra os produtos de até R$ 5 e extrai seus nomes.
const nomesAteCinco = produtos
  .slice(0, 3)
  .filter((produto) => produto.preco <= 5)
  .map((produto) => produto.nome)

// Exercício 4: simula uma consulta assíncrona a uma API.
function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(produtos.find((produto) => produto.id === id))
    }, 300)
  })
}

const formatarPreco = (preco) =>
  preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

function App() {
  const [produtoEncontrado, setProdutoEncontrado] = useState(null)

  useEffect(() => {
    async function carregarProduto() {
      const resultado = await buscarProduto(2)
      console.log(resultado)
      setProdutoEncontrado(resultado)
    }

    carregarProduto()
  }, [])

  return (
    <main>
      <header>
        <span className="tag">PTAC4 · Aula 01</span>
        <h1>Exercícios de JavaScript e React</h1>
        <p>Arrays, Promises e renderização de listas.</p>
      </header>

      <section>
        <h2>Exercício 1 — map</h2>
        <code>{JSON.stringify(nomes)}</code>
      </section>

      <section>
        <h2>Exercício 2 — filter</h2>
        <code>{JSON.stringify(produtosAcimaDeCinco)}</code>
      </section>

      <section>
        <h2>Exercício 3 — filter + map</h2>
        <code>{JSON.stringify(nomesAteCinco)}</code>
      </section>

      <section>
        <h2>Exercício 4 — Promise</h2>
        <p className="resultado">
          {produtoEncontrado
            ? `${produtoEncontrado.nome} — ${formatarPreco(produtoEncontrado.preco)}`
            : 'Buscando produto...'}
        </p>
      </section>

      <section className="destaque">
        <h2>Exercício 5 — Produtos abaixo de R$ 10</h2>
        <ul>
          {produtos
            .filter((produto) => produto.preco < 10)
            .map((produto) => (
              <li key={produto.id}>
                <span>{produto.nome}</span>
                <strong>{formatarPreco(produto.preco)}</strong>
              </li>
            ))}
        </ul>
      </section>
    </main>
  )
}

export default App
