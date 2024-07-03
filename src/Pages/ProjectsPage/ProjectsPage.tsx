import Project from '../../Components/Project/Project'
import Container from '../../Utils/Container/Container'
import { aboutme, plantstore, burgerstore, clothingstore, nationalpark } from '../../assets/images'
import styles from './ProjectsPage.module.scss'
import {motion} from 'framer-motion'
const myProjects = [
  {id:1, img: plantstore, name: "JoFaY's Plant House", desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque sequi harum. Vitae doloribus perspiciatis odit, aut id atque, voluptate, laboriosam iusto eos unde consectetur alias dolorum. Fugiat, dolore adipisci!' },
  {id:2, img: burgerstore, name: "JoFaY's Burger Store", desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque sequi harum. Vitae doloribus perspiciatis odit, aut id atque, voluptate, laboriosam iusto eos unde consectetur alias dolorum. Fugiat, dolore adipisci!' },
  {id:3, img: clothingstore, name: "JoFaY's Clothing", desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque sequi harum. Vitae doloribus perspiciatis odit, aut id atque, voluptate, laboriosam iusto eos unde consectetur alias dolorum. Fugiat, dolore adipisci!' },
  {id:4, img: nationalpark, name: "JoFaY's National Parks", desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque sequi harum. Vitae doloribus perspiciatis odit, aut id atque, voluptate, laboriosam iusto eos unde consectetur alias dolorum. Fugiat, dolore adipisci!' },
]

import { useTranslation } from 'react-i18next'

const ProjectsPage = () => {
  const {t} =  useTranslation(["projectsPage"])
  return (
    <>
      <div className={styles.project}>
        <Container>
          <div className={styles.project__cont}>
            <motion.h1 initial={{y:-100}} animate={{y:0}}>{t('my')} <span>{t('projects')}</span></motion.h1>
            <div className={styles.project__cont__procont}>
              {
                myProjects.map((pro) => (
                  <Project key={pro.id} {...pro}/>

                ))
              }
            </div>
          </div>
        </Container>
      </div> 
      <div className={styles.about}>
        <Container>
          <div className={styles.about__cont}>
            <motion.div initial={{x: -300, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{delay: 0.5, type: 'spring'}} viewport={{once: true}}  className={styles.about__cont__left}>
              <img src={aboutme} alt="" />
            </motion.div>
            <div  className={styles.about__cont__right}>
              <h1>{t("about")} <span>{t("me")}</span></h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente accusantium iusto aliquam fugit qui totam praesentium dignissimos culpa, saepe soluta maiores sunt excepturi itaque, nam suscipit minus porro illum laboriosam?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti modi, neque et ipsam explicabo doloribus iure laborum sapiente soluta voluptatem reprehenderit ipsa? Similique delectus eaque iure quidem dignissimos sint repellat?</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque sequi harum. Vitae doloribus perspiciatis odit, aut id atque, voluptate, laboriosam iusto eos unde consectetur alias dolorum. Fugiat, dolore adipisci!</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default ProjectsPage