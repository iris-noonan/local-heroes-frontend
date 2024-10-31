import styles from './NotFound.module.scss'

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main className={styles.container}>
      <section className={styles.splash}>
        <h1>404</h1>
        <Link className='btn' to="/">Back to home</Link>
      </section>
    </main>
  )
}

export default NotFound
