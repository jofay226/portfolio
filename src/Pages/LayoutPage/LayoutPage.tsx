import { Outlet } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
import Navigaton from '../../Components/Navigation/Navigaton';
import styles from './LayoutPage.module.scss';


const LayoutPage = () => {
  return (
    <div className={styles.layout}>
      <Navigaton/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default LayoutPage