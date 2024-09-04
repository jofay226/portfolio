import Container from '../../Utils/Container/Container'
import styles from './Footer.module.scss'
import { logo } from '../../assets/images'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <footer className={styles.footer__cont}>
          <div className={styles.footer__cont__left}>
              <img src={logo} alt="" />
              <h2>JoFaY</h2>
          </div>
          <div className={styles.footer__cont__hr}>
          </div>
          <div className={styles.footer__cont__bottom}>
            <p>JoFaY Web Development. All Rights Reserved. since 2019.</p>
          </div>
        </footer>
      </Container>
    </div>
  )
}

export default Footer