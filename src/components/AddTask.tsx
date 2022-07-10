import { useState } from "react"
import { Task } from "./App"
import plusImg from "../../assets/Plus.svg"

interface AddTaskProps {
    onAddNewTask: (newTask: Task) => void
}

export function AddTask(props: AddTaskProps) {
    const [newTaskDescription, setNewTaskDescription] = useState('')

    function handleOnClickAddTask() {
        const newTask = {
            description: newTaskDescription,
            isCompleted: false,
            key: Math.random()
        }

        props.onAddNewTask(newTask)
    }

    return (
        <div className="w-full h-[54px] flex justify-between gap-2">
            <input
                value={newTaskDescription}
                onChange={e => setNewTaskDescription(e.currentTarget.value)}
                className="w-[638px] p-4 bg-gray-500 rounded-lg border-[1px] border-gray-900 outline-none text-gray-300 placeholder:text-gray-300"
                placeholder="Adicione uma nova tarefa"
            />

            <button
                onClick={handleOnClickAddTask}
                className="bg-app-dark_blue text-white h-full flex-1 rounded-lg flex items-center gap-2 justify-center"
            >
                <span className="font-bold text-sm">
                    Criar
                </span>

                <img src={plusImg} alt="Icone de Adicionar" />
            </button>
        </div>
    )
}
