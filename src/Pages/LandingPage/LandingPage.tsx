import Container from '../../Utils/Container/Container';
import styles from './LandingPage.module.scss';
import { banner } from '../../assets/images';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { ElementType } from 'react';
import { useTranslation } from 'react-i18next';
const socials: {icon:ElementType, path: string}[] = [{icon:InstagramIcon, path: 'https://www.linkedin.com/in/javokhir-fayzullaev-376240127/'}, {icon:LinkedInIcon, path:'https://www.linkedin.com/in/javokhir-fayzullaev-376240127/'}, {icon:FacebookIcon, path: 'https://www.linkedin.com/in/javokhir-fayzullaev-376240127/'}, {icon:XIcon, path: 'https://www.linkedin.com/in/javokhir-fayzullaev-376240127/'}]

const LandingPage = () => {
  const {t} = useTranslation();
  return (
    <section className={styles.landing}>
      <Container>
        <div className={styles.landing__cont}>
            <div className={styles.landing__cont__left}>
              <div className={styles.landing__cont__left__h2}>
                <h2>{t('greet')} <span>Jo Fay.</span></h2>
                <h2>Frontend {t('dev')}</h2>
                <h2> <span>Middle+</span> </h2>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt blanditiis deserunt saepe nemo ipsam repellendus officiis error illum suscipit laboriosam quas, est possimus quod aspernatur nostrum quasi impedit sint dolorem!</p>
              <div className={styles.landing__cont__left__icons}>
                {
                  socials.map((Social, i) => (
                    <div key={i}>
                      <a href={Social.path} target='_blank'>
                        <Social.icon/>
                      </a>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className={styles.landing__cont__right}>
              <img src={banner} alt="" />
            </div>
        </div>
      </Container>
    </section>
  )
}

export default LandingPage