import { FC } from 'react'
import styles from './Container.module.scss'


const Container: FC<{children: JSX.Element}> = ({children}) => {
  return (
    <div className={styles.cont}>{children}</div>
  )
}

export default Container