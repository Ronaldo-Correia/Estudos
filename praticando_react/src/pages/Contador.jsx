import { useState } from 'react'
import '@/css/App.css'
function Contador() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <p className="contador">{count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(0)}>Resetar</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrementar</button>
    </div>
  )
}

export default Contador
