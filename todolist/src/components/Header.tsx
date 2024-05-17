import logoHeader from '../assets/logoHeader.svg'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.container}>
      <img src={logoHeader} alt="logo header" className={styles.logo} />
    </header>
  )
}
