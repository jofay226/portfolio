import { ElementType, FC } from 'react'
import styles from './Experience.module.scss'

type expProps = {
    id: number,
    Logo: ElementType,
    name: string,
    date: string,
    role: string
}

const Experience:FC<expProps> = ({id, Logo, name, date, role}) => {
  return (
    <div className={styles.exp}>
        <div className={styles.exp__top}>
            <div>
                <Logo/>
                <h3>{name}</h3>
            </div>
            <p>{date}</p>
        </div>
        <p className={styles.exp__bottom}> {role}</p>
    </div>
  )
}

export default Experience