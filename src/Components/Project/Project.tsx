import { FC } from 'react'
import styles from './Project.module.scss'

const Project:FC<{id?: number, img: string, name: string, desc: string}> = ({ img, name, desc}) => {
  return (
    <div className={styles.project}>
        <div className={styles.project__left}>
            <img src={img} alt="" />
        </div>
        <div className={styles.project__right}>
            <h3>{name}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Project