import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(100)

  function diminuir() {
    setNumero(numero - 100)
  }

  function aumentar() {
    setNumero(numero + 100)
  }

  const [estadoDoBotao, setEstadoDoBotao] = useState(true)

  function mudarEstado() {
    if(estadoDoBotao === true){
      setEstadoDoBotao("Mostrar")
    }
    else{
      setEstadoDoBotao("Esconder")
    }
  }

return (
  <div>
    <h1>Número:{numero}</h1>

    <div>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </div>

    <p>{}</p>
    <button onClick={mudarEstado}>{estadoDoBotao}</button>
  </div>
)
}
