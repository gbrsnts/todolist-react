function TarefasConcluidas ({ tarefas, setTarefas }) {

    const handleDelete = (deletarId) => {
        setTarefas((tarefasExistentes) =>
            tarefasExistentes.filter((tarefa) => tarefa.id !== deletarId)
        )
    }

    const handleTrocarStatus = (id) => {
        setTarefas(tarefasExistentes => 
            tarefasExistentes.map((tarefa) =>
                tarefa.id === id
                    ? { ...tarefa, status: tarefa.status === 'concluida' ? 'pendente' : 'concluida' } 
                    : tarefa
            )
        );
    }
    return (
        <div className="container-concluidas">
            <ul>
            {tarefas.filter((tarefa) => tarefa.status === 'concluida').map((tarefa) => (
                <li key={tarefa.id}>
                    <input
                        type="checkbox"
                        checked={tarefa.status === 'concluida'}
                        onChange={() => handleTrocarStatus(tarefa.id)}
                    />
                    <span className="riscado">{tarefa.tarefa}</span>
                    <button onClick={() => handleDelete(tarefa.id)}>X</button>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default TarefasConcluidas