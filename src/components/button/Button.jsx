import styles from './Button.module.css'

function Button ({ children, onCLick }) {
  return (
    <button 
      className={styles.button}
      onClick={onCLick}
    
    >
      { children }
    </button>
  )
}

export default Button