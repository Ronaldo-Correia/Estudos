import { useEffect, useState } from "react"
import Saudacao from "../components/Saudacao"

export function Home() {
  const [nome, setNome] = useState("")

  useEffect(() => {
    const resposta = window.prompt("Digite o seu nome:")
    if (resposta) {
      setNome(resposta)
    }
  }, [])

  return (
    <div>
      <Saudacao nome={nome} />
      <p>Aprendendo React</p>
      <ul>
        Exercícios feitos:
        <li>
          <a href="http://localhost:5173/Contador">Contador</a>
        </li>
        <li>
          <a href="http://localhost:5173/ListaTarefa">Lista de Tarefas</a>
        </li>
      </ul>
    </div>
  )
}

export default Home
