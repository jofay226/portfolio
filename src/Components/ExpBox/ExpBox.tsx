import { FC, ReactElement } from 'react'
import styles from './ExpBox.module.scss'


const ExpBox:FC<{id: number, img: string, name: string}> = ({img, name, id}) => {
  console.log(id);
  
  return (
    <div  className={styles.expbox}>
        <img src={img} alt="skill" />
        <span>{name}</span>
    </div>
  )
}

export default ExpBox