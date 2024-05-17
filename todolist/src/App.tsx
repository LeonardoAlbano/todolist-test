import styles from './App.module.css'
import { Button } from './components/Button'
import { Header } from './components/Header'
import { Input } from './components/Input'

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
          <div />
        </div>
      </section>
    </main>
  )
}
