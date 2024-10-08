import styles from './Navigation.module.scss';
// components
import Container from '../../Utils/Container/Container';
import BugerMenuModal from '../BurgerMenuModal/BugerMenuModal';

// images
import {  downloadIcon, logo } from '../../assets/images';

// icons from mui
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import CustomSelect from '../../Utils/CustomSelect';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence } from 'framer-motion';
import BurgerMenuOverlay from '../BurgerMenuOverlay/BurgerMenuOverlay';
import LocaleModal from '../LocaleModal/LocaleModal';
import LocaleOverlay from '../LocaleOverlay/LocaleOverlay';




const Navigaton = () => {
    const {t} = useTranslation()
    const btns = [{path: 'skills', name: t('navSkills')}, { path: 'projects', name: t('navProjects')}, { path: 'contact', name: t('navContact')}]
    const [activeBtn, setActiveBtn] = useState({path: '', name: ''});
    const [burgerMenuModal, setBurgerMenuModal] = useState<boolean>(false)
    const [localeModal, setLocaleModal] = useState(false)
    const navigate = useNavigate()
    
    const logoClickHandler = () => {
        setActiveBtn({path: '', name: ''});
        navigate('/')
    }

    const burgerMenuModalHandler = () => {        
        setBurgerMenuModal(false)
    }

    const localeModalHandler = () => {
        setLocaleModal(prev => !prev)
    }
    const closeLocaleHandler = () => {
        setLocaleModal(false)
    }

    useEffect(() => {   
        if(burgerMenuModal) document.documentElement.style.overflowY = 'hidden'
        if(!burgerMenuModal) document.documentElement.style.overflowY = "auto"
    }, [burgerMenuModal])

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(window.innerWidth >= 561){
                setBurgerMenuModal(false)
            }    
        })
    }, [])

  return (
    <Container>
        <nav className={styles.nav}>
            <div className={styles.nav__left} onClick={logoClickHandler}>
                <img src={logo} alt="" />
                <h2>JoFaY</h2>
            </div>
            <ul className={styles.nav__middle}>
                {btns.map( (btn, i) => (
                    <li className={activeBtn.path === btn.path ? styles.nav__middle__active : ''} key={i} onClick={() => setActiveBtn(btn)}>
                        <Link to={`/${btn.path}`}>{btn.name}</Link>
                    </li>
                ))}
                <a href="/resume.pdf" download="resume.pdf"  target='_blank' >
                    <span>{t('navResume')}</span>
                    <img src={downloadIcon} alt="" />
                </a>
            </ul>
            <div className={styles.nav__right}>
                <LanguageIcon/>
                <CustomSelect/>
            </div>
            <div className={styles.nav__burgerlang}>
                <div className={styles.nav__burgerlang__lang}>
                    <LanguageIcon onClick={localeModalHandler}/>
                    {localeModal && <LocaleModal closeLocaleHandler={closeLocaleHandler}/>}
                    {localeModal && <LocaleOverlay closeLocaleHandler={closeLocaleHandler}/>}
                </div>
                <div className={styles.nav__burgerlang__burger} onClick={() => setBurgerMenuModal(prev => !prev)}>
                    <MenuIcon/>
                </div>
            </div>
            {burgerMenuModal && <AnimatePresence><BugerMenuModal burgerMenuModalHandler={burgerMenuModalHandler}/></AnimatePresence> }
  
            {burgerMenuModal && <BurgerMenuOverlay burgerMenuModalHandler={burgerMenuModalHandler}/>}
        </nav>
    </Container>
  )
}

export default Navigaton