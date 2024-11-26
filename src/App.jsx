import { useState } from 'react'
import TarefasPendentes from './components/TarefasPendentes'
import TarefasConcluidas from './components/TarefasConcluidas'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])

  return (
    <div className="app">
      
        <TarefasPendentes tarefas={tarefas} setTarefas={setTarefas}/>
        <TarefasConcluidas tarefas={tarefas} setTarefas={setTarefas}/>
        
    </div>
  )
}

export default App
