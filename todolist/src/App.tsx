import styles from './App.module.css'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { HeaderTaskList } from './components/tasklist/Header'

export function Home() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.taskInfoCreate}>
          <Input />
          <Button>criar</Button>
        </div>

        <div>
          <HeaderTaskList />

          <div />
        </div>
      </section>
    </main>
  )
}
