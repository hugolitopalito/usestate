import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(100)

  function diminuir() {
    setNumero(numero - 100)
  }

  function aumentar() {
    setNumero(numero + 100)
  }

  const [estadoDoBotao, setEstadoDoBotao] = useState(false)

  function mudarEstado() {
    if(estadoDoBotao === false){
      setEstadoDoBotao(true)
    }
    else(
      setEstadoDoBotao(false)
    )
  }

return (
  <div>
    <h1>Número:{numero}</h1>

    <div>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </div>

    <p>{estadoDoBotao === true ? `paragrafo pra mostrar` : ``}</p>
    <button onClick={mudarEstado}>{estadoDoBotao === true ? "Esconder" : "Mostrar"}</button>
  </div>
)
}
