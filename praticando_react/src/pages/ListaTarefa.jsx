import { useState } from 'react'
import '@/css/lista.css'

export function ListaTarefa(){
  const[tarefa ,setTarefas] = useState([])
  const[novaTarefa,setNovaTarefa]= useState([])
return(
<div className="lista-container">
    <h2>Lista de Tarefas</h2>
  <div className='lista-tarefas'>
    <ul>
      {tarefa.map((tarefa,index)=>(
        <li key={index}>{tarefa}</li>
      ))}
    </ul>
    <input
      type="text"
      value={novaTarefa}
      onChange={(e)=> setNovaTarefa(e.target.value)}
    />
    <button
    onClick={()=>{
      setTarefas([...tarefa,novaTarefa])
      setNovaTarefa('')
      setNovaTarefa.focus()
    }}>
      Adicionar 
    </button>
  </div>
</div>

)
}
export default ListaTarefa;