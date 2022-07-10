import { Task } from "./App"
import clipboardImg from "../../assets/Clipboard.svg"
import { CreatedTask } from "./CreatedTask"

interface DisplayTasksProps {
    tasks: Task[]
    onRemoveTask: (taskKey: number) => void
    onCompleteTask: (taskKey: number) => void
}

export function DisplayTasks(props: DisplayTasksProps) {

    const concludedTasks = props.tasks.filter(task => task.isCompleted)

    return (
        <div className="w-full flex flex-col gap-6 mt-[64px] mb-6">
            <div className="w-full flex justify-between gap-4 flex-wrap">
                <div className="flex gap-2 font-bold items-center">
                    <span className="text-app-blue">Tarefas criadas</span>

                    <span className="w-[25px] h-[19px] rounded-full py-[2px] px-2 bg-gray-400 text-xs text-gray-200 flex items-center justify-center">{props.tasks.length}</span>
                </div>

                <div className="flex gap-2 font-bold items-center">
                    <span className="text-app-purple">Concluídas</span>

                    {
                        props.tasks.length == 0
                            ?
                            <span
                                className="w-[25px] h-[19px] rounded-full py-[2px] px-2 bg-gray-400 text-xs text-gray-200 flex items-center justify-center"
                            >
                                0
                            </span>
                            :
                            <span
                                className="rounded-full py-[2px] px-2 bg-gray-400 text-xs text-gray-200 flex items-center justify-center"
                            >
                                {concludedTasks.length} de {props.tasks.length}
                            </span>
                    }
                </div>
            </div>

            {
                props.tasks.length == 0
                    ?
                    <div className="w-full text-center flex flex-col items-center justify-center gap-[16px] h-[244px] rounded-lg border-t-[1px] border-gray-400">
                        <img src={clipboardImg} alt="Clipboard" />

                        <div className="text-gray-300">
                            <span className="font-bold">Você ainda não tem tarefas cadastradas</span>

                            <br></br>

                            Crie tarefas e organize seus itens a fazer
                        </div>
                    </div>
                    :
                    <>
                        {
                            props.tasks.map(
                                task => (
                                    <CreatedTask
                                        key={task.key}
                                        task={task}
                                        onRemoveTask={props.onRemoveTask}
                                        onCompleteTask={props.onCompleteTask}
                                    />
                                )
                            )
                        }
                    </>
            }
        </div>
    )
}
