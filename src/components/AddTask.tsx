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

        setNewTaskDescription('')

        props.onAddNewTask(newTask)
    }

    return (
        <div className="w-full flex flex-col justify-between gap-2 md:flex-row">
            <input
                value={newTaskDescription}
                onChange={e => setNewTaskDescription(e.currentTarget.value)}
                className="h-[54px] w-full p-4 bg-gray-500 rounded-lg border-[1px] border-gray-900 outline-none text-gray-300 placeholder:text-gray-300 md:w-[638px]"
                placeholder="Adicione uma nova tarefa"
            />

            <button
                onClick={handleOnClickAddTask}
                className="min-h-[40px] bg-app-dark_blue text-white flex-1 rounded-lg flex items-center gap-2 justify-center md:min-h-[54px]"
            >
                <span className="font-bold text-md md:text-sm">
                    Criar
                </span>

                <img src={plusImg} alt="Icone de Adicionar" className="w-5 md:w-auto" />
            </button>
        </div>
    )
}
