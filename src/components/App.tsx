import { useState } from "react";
import { AddTask } from "./AddTask";
import { DisplayTasks } from "./DisplayTasks";
import { Header } from "./Header";

export interface Task {
  description: string
  isCompleted: boolean
  key: number
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([])

  function onAddNewTask(newTask: Task) {
    setTasks([...tasks, newTask])
  }

  function onRemoveTask(taskKey: number) {
    const newList = tasks.filter(task => task.key !== taskKey)
    setTasks(newList)
  }

  function onCompleteTask(taskKey: number) {
    let newList = [...tasks]
    let taskIndex = tasks.findIndex(task => task.key === taskKey)
    newList[taskIndex].isCompleted = !newList[taskIndex].isCompleted
    setTasks(newList)
  }

  return (
    <div className="h-[100vh] w-[100vw] bg-app-main flex flex-col items-center">
      <Header />

      <div className="w-[736px] mt-[-27px] z-10">
        <AddTask onAddNewTask={onAddNewTask} />

        <DisplayTasks tasks={tasks} onRemoveTask={onRemoveTask} onCompleteTask={onCompleteTask} />
      </div>
    </div>
  )
}
