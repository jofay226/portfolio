import styles from './LocaleOverlay.module.scss'

const LocaleOverlay = ({closeLocaleHandler}: {closeLocaleHandler: () => void}) => {
  return (
    <div className={styles.localeoverlay} onClick={closeLocaleHandler}></div>
  )
}

export default LocaleOverlay