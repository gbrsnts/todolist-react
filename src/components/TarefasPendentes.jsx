import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function TarefasPendentes ({ tarefas, setTarefas }) {
    const [valor, setValor] = useState('')
    
    const handleSubmit = async (event) => {
        event.preventDefault()
        const novaTarefa = {
            id: uuidv4(),
            tarefa: valor,
            status: 'pendente'
            }
        setTarefas((tarefasExistentes) => [...tarefasExistentes, novaTarefa])
        setValor('')
    }

    const handleDelete = (deletarId) => {
        setTarefas((tarefasExistentes) =>
            tarefasExistentes.filter((tarefa) => tarefa.id !== deletarId)
        )
    }

    const handleTrocarStatus = (id) => {
        setTarefas(tarefasExistentes => 
            tarefasExistentes.map((tarefa) =>
                tarefa.id === id
                    ? { ...tarefa, status: tarefa.status === 'pendente' ? 'concluida' : 'pendente' } 
                    : tarefa
            )
        )
    }

    return (
        <div className="container-pendentes">
            <ul>
            {tarefas.filter((tarefa) => tarefa.status === 'pendente').map((tarefa) => (
                <li key={tarefa.id}>
                    <input 
                        type="checkbox"
                        checked={tarefa.status === 'concluida'}
                        onChange={() => handleTrocarStatus(tarefa.id)}
                    />
                    {tarefa.tarefa}
                    <button onClick={() => handleDelete(tarefa.id)}>X</button>
                </li>
            ))}
            </ul>

            <form onSubmit={handleSubmit}>
                <input type="text" value={valor} onChange={(e) => setValor(e.target.value)} placeholder="Digite uma tarefa"/>
                <button type="submit">+</button>
            </form>
        </div>
    )
}

export default TarefasPendentes