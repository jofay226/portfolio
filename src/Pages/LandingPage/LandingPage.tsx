import Container from "../../Utils/Container/Container";
import styles from "./LandingPage.module.scss";
import { banner } from "../../assets/images";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import { ElementType } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { logo } from "../../assets/images";
import { useLocation } from "react-router-dom";
import Seo from "../../Components/SEO/Seo";

const socials: { icon: ElementType; path: string }[] = [
  {
    icon: InstagramIcon,
    path: "https://www.linkedin.com/in/javokhir-fayzullaev-376240127/",
  },
  {
    icon: LinkedInIcon,
    path: "https://www.linkedin.com/in/javokhir-fayzullaev-376240127/",
  },
  {
    icon: FacebookIcon,
    path: "https://www.linkedin.com/in/javokhir-fayzullaev-376240127/",
  },
  {
    icon: XIcon,
    path: "https://www.linkedin.com/in/javokhir-fayzullaev-376240127/",
  },
];

const LandingPage = () => {
  const { t } = useTranslation();

  console.log(window.location.href);

  return (
    <section className={styles.landing}>
      <Seo
        title={"About Me"}
        desc={"Who I am, My experience, mindset"}
        canonical={"http://localhost:5173"}
      />
      <Container>
        <div className={styles.landing__cont}>
          <div className={styles.landing__cont__left}>
            <div className={styles.landing__cont__left__h2}>
              <motion.h2 initial={{ x: -200 }} animate={{ x: 0 }}>
                {t("greet")} <span>Jo Fay.</span>
              </motion.h2>
              <h1>Frontend {t("dev")}</h1>
              <h2>
                {" "}
                <span>Middle+</span>{" "}
              </h2>
            </div>
            <p>{t("about")}</p>
            <div className={styles.landing__cont__left__icons}>
              {socials.map((Social, i) => (
                <a key={i} href={Social.path} target="_blank">
                  <Social.icon />
                </a>
              ))}
            </div>
          </div>
          <div className={styles.landing__cont__right}>
            <img src={banner} alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default LandingPage;
