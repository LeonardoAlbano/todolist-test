import { PlusCircle } from '@phosphor-icons/react'
import { useState } from 'react'

import styles from './App.module.css'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { Empty } from './components/tasklist/Empty'
import { HeaderTaskList } from './components/tasklist/Header'
import { Item } from './components/tasklist/Item'

export interface ITask {
  id: number
  text: string
  isChecked: boolean
}

export function Home() {
  // Inicialização do estado
  const [tasks, setTask] = useState<ITask[]>([])
  const [inputValue, setInputValue] = useState('')

  // Função para contar tarefas marcadas
  const taskTrackerChecked = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)

  // Função para adicionar uma nova tarefa
  function handleAddTask() {
    if (!inputValue) {
      return
    }

    const newTask: ITask = {
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false,
    }

    setTask((state) => [...state, newTask])
    setInputValue('')
  }

  // Função para remover uma tarefa
  function handleRemoveTask(id: number) {
    const filteredTask = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTask(filteredTask)
  }

  // Função para alternar o status da tarefa (marcado/desmarcado)
  function handleToggleTask({ id, value }: { id: number; value: boolean }) {
    const updateTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value }
      }

      return { ...task }
    })

    setTask(updateTasks)
  }

  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoCreate}>
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>

        <div className={styles.tasksList}>
          <HeaderTaskList
            taskTracker={tasks.length}
            taskTrackerChecked={taskTrackerChecked}
          />

          <div style={{ borderTop: '1px solid var(--gray-300)' }} />

          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </main>
  )
}
