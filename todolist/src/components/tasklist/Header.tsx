import styles from './Header.module.css'

interface HeaderTaskListProps {
  taskTracker: number
  taskTrackerChecked: number
}

export function HeaderTaskList({
  taskTracker,
  taskTrackerChecked,
}: HeaderTaskListProps) {
  return (
    <header className={styles.container}>
      <aside>
        <p>Tarefa Criadas</p>
        <span>{taskTracker}</span>
      </aside>

      <aside>
        <p>Concluídas</p>
        <span>
          {taskTracker === 0
            ? taskTracker
            : `${taskTrackerChecked} de ${taskTracker}`}
        </span>
      </aside>
    </header>
  )
}
