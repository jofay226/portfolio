import Container from '../../Utils/Container/Container'
import styles from './ContactPage.module.scss'
import { useTranslation } from 'react-i18next';
import ContactForm from '../../Components/ContactForm/ContactForm';
import {motion} from 'framer-motion'



const ContactPage = () => {
  return (
    <div className={styles.contactpage}>
      <Container>
        <div className={styles.contact}>
            <ContactForm/>
            <div className={styles.contact__right}>
                <motion.h1 initial={{x: 200}} animate={{x:0}}>Let's Talk for Something special</motion.h1>
                <p>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>
                <h3>jofay91@gmail.com</h3>
                <h3>+998(90) 021-22-26 </h3>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default ContactPage