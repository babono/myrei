import styles from './styles.module.scss'

export default function ServiceList({ children }) {
    return (
      <div className={styles.list}>         
        {children}    
      </div>
    )
  }