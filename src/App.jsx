import './exercicios.js'

const produtos = [
  { id: 1, nome: 'Caneta', preco: 2.5 },
  { id: 2, nome: 'Caderno', preco: 25 },
  { id: 3, nome: 'Lápis', preco: 1.2 },
  { id: 4, nome: 'Borracha', preco: 4.75 },
]

function App() {
  return (
    <main>
      <h1>Produtos abaixo de R$ 10</h1>

      <ul>
        {produtos
          .filter((produto) => produto.preco < 10)
          .map((produto) => (
            <li key={produto.id}>
              {produto.nome} — R$ {produto.preco.toFixed(2).replace('.', ',')}
            </li>
          ))}
      </ul>
    </main>
  )
}

export default App
