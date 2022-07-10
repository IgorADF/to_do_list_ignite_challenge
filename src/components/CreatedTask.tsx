import { Task } from "./App"
import trashcanImg from "../../assets/Trashcan.svg"
import checkImg from "../../assets/Check.svg"

interface TaskProps {
    task: Task
    onRemoveTask: (taskKey: number) => void
    onCompleteTask: (taskKey: number) => void
}

export function CreatedTask({ task, onRemoveTask, onCompleteTask }: TaskProps) {
    return (
        <div className="w-full p-4 flex gap-3 bg-gray-500 rounded-lg border-[1px] border-gray-400">
            <button
                className={`h-5 w-5 m-1 rounded-full cursor-pointer ${task.isCompleted ? `bg-app-dark_purple flex justify-center items-center` : `border-2 border-app-dark_blue`}`}
                onClick={() => onCompleteTask(task.key)}
            >
                {
                    task.isCompleted
                    &&
                    <img src={checkImg} alt="Icone Completo" className="w-3 h-3" />
                }
            </button>

            <span className={`flex-1 overflow-hidden ${task.isCompleted ? `text-gray-300 line-through` : `text-white`}`}>
                {task.description}
            </span>

            <img
                src={trashcanImg}
                alt='Lixeira'
                className="w-[14px] h-[15px] cursor-pointer"
                onClick={() => onRemoveTask(task.key)}
            />
        </div>
    )
}
