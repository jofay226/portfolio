import { FC, useState } from 'react'
import styles from './BurgerMenuModal.module.scss'
import {motion} from 'framer-motion'
const btns = ['EN', "RU", "UZ"]
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
type BurgerMenuModalProps = {
    burgerMenuModalHandler: () => void
}

const BugerMenuModal: FC<BurgerMenuModalProps> = ({burgerMenuModalHandler}) => {
    const [active, setActive] = useState('')
    const {i18n, t} = useTranslation();
    const pages = [{path: 'skills', name: t('navSkills')}, { path: 'projects', name: t('navProjects')}, { path: 'contact', name: t('navContact')}]

    const btnHandler = (btn: string) => {
        setActive(btn);
        i18n.changeLanguage(btn.toLowerCase())
    }
    
  return (
    <motion.div initial={{y: -1000}} animate={{y: 0}} exit={{y: -1000}} transition={{ type: 'spring', damping: 15}} className={styles.burgermenu}>
        <div className={styles.burgermenu__lang}>
            {
                btns.map(btn => (
                    <button className={btn === active ? styles.active : ''} onClick={() => btnHandler(btn)}>{btn}</button>
                ))
            }
        </div>
        <div className={styles.burgermenu__pages}>
            {
                pages.map( page => (
                    <Link to={`/${page.path}`} onClick={burgerMenuModalHandler}>{page.name}</Link>
                ))
            }
        </div>
    </motion.div>
  )
}

export default BugerMenuModal