import Container from "../../Utils/Container/Container";
import styles from "./SkillsPage.module.scss";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
// mui icons
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Experience from "../../Components/Experience/Experience";
import ExpBox from "../../Components/ExpBox/ExpBox";

// skill images
import {
  socket,
  figma,
  css,
  git,
  github,
  html,
  js,
  next,
  postman,
  react,
  redux,
  sass,
  auth,
} from "../../assets/images";
import { useTranslation } from "react-i18next";
import Seo from "../../Components/SEO/Seo";
const prevJobs = [
  {
    id: 1,
    Logo: OtherHousesIcon,
    name: "Roomster",
    date: "Jan 2019-Jan 2021",
    role: "This is my first job in the IT field. I started working as an intern in this copmany. I have learned a lot of things.",
  },
  {
    id: 2,
    Logo: RestaurantIcon,
    name: "Tie Aprons",
    date: "Feb 2021-Nov 2022",
    role: "Big step in my career, Tie aprons was a start up project, with team we build this applicaton from zero. hardest part was authorizarion, and chat. ",
  },
  {
    id: 3,
    Logo: PrecisionManufacturingIcon,
    name: "Napa Automative",
    date: "Jan 2023-Aug 2023",
    role: "this company hired me as a middle frontend developer, we build different applications, use different libraries. it was amazing expirience. ",
  },
  {
    id: 4,
    Logo: AutoStoriesIcon,
    name: "It Academy",
    date: "Sep 2023-Aug 2024",
    role: 'In "IT Academy" i worked as developer and at the same time as mentor. i had  approximately 100 students.',
  },
];

const mySkills = [
  { id: 1, img: html, name: "HTML" },
  { id: 2, img: css, name: "CSS" },
  { id: 3, img: sass, name: "SCSS" },
  { id: 4, img: js, name: "JavaScript" },
  { id: 5, img: figma, name: "FIGMA" },
  { id: 6, img: react, name: "REACT" },
  { id: 7, img: redux, name: "Redux Toolkit" },
  { id: 8, img: redux, name: "Redux Toolkit Query" },
  { id: 9, img: next, name: "Next.js" },
  { id: 10, img: postman, name: "PostMan" },
  { id: 11, img: git, name: "GIT" },
  { id: 12, img: github, name: "GitHub" },
  { id: 13, img: socket, name: "Socket.io" },
  { id: 14, img: auth, name: "Advanced Authorization" },
];

const SkillsPage = () => {
  const { t } = useTranslation(["skillsPage"]);
  return (
    <div>
      <Seo
        title={"Skills"}
        desc={"Who I am, My experience, mindset"}
        canonical={"http://localhost:5173"}
      />
      <div className={styles.skill}>
        <Container>
          <div className={styles.skill__cont}>
            <motion.h1 initial={{ y: -100 }} animate={{ y: 0 }}>
              {t("my")} <span>{t("exp")}</span>{" "}
            </motion.h1>
            <section className={styles.skill__cont__expcont}>
              {prevJobs.map((job) => (
                <Experience key={job.id} {...job} />
              ))}
            </section>
          </div>
        </Container>
      </div>
      <section className={styles.skills}>
        <Container>
          <div className={styles.skills__cont}>
            <h1>
              {t("my")} <span>{t("skills")}</span>
            </h1>
            <div className={styles.skills__cont__boxes}>
              {mySkills.map((skill) => (
                <ExpBox key={skill.id} {...skill} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default SkillsPage;
