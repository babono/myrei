import Link from 'next/link'
import styles from './styles.module.scss'

export default function ServiceItem({ title, icon }) {
    return (
      <Link href="/reic">
        <div className={styles.block}>
          <div className={styles.image}>
            <img src="/icons/ic-calculator.svg" />
          </div>      
          <div className={styles.title}>REIC</div>      
        </div>
      </Link>
    )
  }