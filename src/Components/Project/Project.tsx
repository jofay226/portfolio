import { FC } from 'react'
import styles from './Project.module.scss'

const Project:FC<{id: number, img: string, name: string, desc: string}> = ({id, img, name, desc}) => {
  return (
    <div className={styles.project}>
        <div className={styles.project__left}>
            <img src={img} alt="" />
        </div>
        <div className={styles.project__right}>
            <h2>0{id}</h2>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Project