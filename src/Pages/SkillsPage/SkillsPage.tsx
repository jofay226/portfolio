import Container from '../../Utils/Container/Container'
import styles from './SkillsPage.module.scss';
// mui icons
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Experience from '../../Components/Experience/Experience';
import ExpBox from '../../Components/ExpBox/ExpBox';

// skill images 
import {socket, figma, css, git, github, html, js, next, postman, react,redux,sass, auth} from '../../assets/images'; 
import { useTranslation } from 'react-i18next';
const prevJobs = [
  {id: 1, Logo: OtherHousesIcon, name: 'Roomster', date: 'Jan 2019-Jan 2021', role:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat neque quam esse, libero consectetur laboriosam quis temporibus, nemo veniam unde excepturi impedit! Nobis magnam qui unde obcaecati perspiciatis odit fugiat!'},
  {id: 2, Logo: RestaurantIcon, name: 'Tie Aprons', date: 'Feb 2021-Nov 2022', role:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat neque quam esse, libero consectetur laboriosam quis temporibus, nemo veniam unde excepturi impedit! Nobis magnam qui unde obcaecati perspiciatis odit fugiat!'},
  {id: 3, Logo: PrecisionManufacturingIcon, name: 'Napa Automative', date: 'Jan 2023-Aug 2023', role:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat neque quam esse, libero consectetur laboriosam quis temporibus, nemo veniam unde excepturi impedit! Nobis magnam qui unde obcaecati perspiciatis odit fugiat!'},
  {id: 4, Logo: AutoStoriesIcon, name: 'It Academy', date: 'Sep 2023-Aug 2024', role:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat neque quam esse, libero consectetur laboriosam quis temporibus, nemo veniam unde excepturi impedit! Nobis magnam qui unde obcaecati perspiciatis odit fugiat!'},
]

const mySkills = [
  {id:1, img: html, name: 'HTML'},
  {id:2, img: css, name: 'CSS'},
  {id:3, img: sass, name: 'SCSS'},
  {id:4, img: js, name: 'JavaScript'},
  {id:5, img: figma, name: 'FIGMA'},
  {id:6, img: react, name: 'REACT'},
  {id:7, img: redux, name: 'Redux Toolkit'},
  {id:8, img: redux, name: 'Redux Toolkit Query'},
  {id:9, img: next, name: 'Next.js'},
  {id:10, img: postman, name: 'PostMan'},
  {id:11, img: git, name: 'GIT'},
  {id:12, img: github, name: 'GitHub'},
  {id:12, img: socket, name: 'Socket.io'},
  {id:13, img: auth, name: 'Advanced Authorization'},
]

const SkillsPage = () => {
  const {t} = useTranslation(['skillsPage'])
  return (
    <div>
      <div className={styles.skill}>
        <Container>
          <div className={styles.skill__cont}>
            <h1>{t("my")} <span>{t('exp')}</span> </h1>
            <section className={styles.skill__cont__expcont}>
              {
                prevJobs.map(job => (
                  <Experience key={job.id} {...job}/>
                ))
              }
            </section>
          </div>
        </Container>
      </div>
      <section className={styles.skills} >
        <Container>
          <div className={styles.skills__cont}>
            <h1>{t('my')} <span>{t('skills')}</span></h1>
            <div className={styles.skills__cont__boxes}>    
                {
                  mySkills.map(skill => (
                    <ExpBox key={skill.id} {...skill}/>
                  ))
                }
            </div>    
          </div>
        </Container>
      </section>

    </div>
  )
}

export default SkillsPage