import { FC } from 'react'
import styles from './ExpBox.module.scss'


const ExpBox:FC<{id?: number, img: string, name: string}> = ({img, name}) => {

  
  return (
    <div  className={styles.expbox}>
        <img src={img} alt="skill" />
        <span>{name}</span>
    </div>
  )
}

export default ExpBox