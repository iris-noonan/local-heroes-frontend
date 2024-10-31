
import styles from './Errors.module.scss'

const Errors = ({ message }) => {
  if (message) {
    return (
      <div className={styles.errors} >
        Error: {message}
      </div>
    )
  }
}

export default Errors