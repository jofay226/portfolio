import { FC } from 'react'
import styles from './BurgerMenuModal.module.scss'
import {motion} from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

// mui icons
import SchoolIcon from '@mui/icons-material/School';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import CloseIcon from '@mui/icons-material/Close';

type BurgerMenuModalProps = {
    burgerMenuModalHandler: () => void
}

const BugerMenuModal: FC<BurgerMenuModalProps> = ({burgerMenuModalHandler}) => {
    const { t} = useTranslation();
    const pages = [{path: 'skills', name: t('navSkills'), Icon: SchoolIcon}, { path: 'projects', name: t('navProjects'), Icon: AccountTreeIcon}, { path: 'contact', name: t('navContact'), Icon: ContactPhoneIcon}]


    
  return (
    <motion.div initial={{x: 1000}} animate={{x: 100}} exit={{x: 1000}} transition={{ type: 'spring', damping: '20'}} className={styles.burgermenu}>
        <div className={styles.burgermenu__close}>
            <CloseIcon onClick={burgerMenuModalHandler}/>
        </div>
        <div className={styles.burgermenu__pages}>
            {
                pages.map( (page, i) => (
                    <Link key={i}  to={`/${page.path}`} onClick={burgerMenuModalHandler}>
                        <page.Icon/>
                        <span>{page.name}</span>
                    </Link>
                ))
            }
        </div>

    </motion.div>
  )
}

export default BugerMenuModal