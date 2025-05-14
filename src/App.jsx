import { useState } from "react"

export function App(){
  const [numero,setNumero] = useState(100)

  function diminuir(){
    setNumero(numero - 100)
  }

  function aumentar(){
    setNumero(numero + 100)
  }
 
  const[Booleano,setEstadoDoBotao] = useState(true)

  function Booleano() {
    if(Booleano === true){

      setEstadoDoBotao(false)
    }else{
      setEstadoDoBotao(true)
    }
  }

  return(
    <div>
      <h1>Número:{numero}</h1>

    <div>
      <button onClick={diminuir}>Diminuir</button>
      <button onClick={aumentar}>Aumentar</button>
    </div>

    <div>
      <p>sla</p>
      <button onClick={Booleano}>{}</button>
    </div>
    </div>
  )
}