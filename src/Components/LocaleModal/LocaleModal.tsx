import { FC } from 'react'
import styles from './LocaleModal.module.scss'
import { useTranslation } from 'react-i18next'

type LocaleModalProps = {
    closeLocaleHandler: () => void
}

const LocaleModal:FC<LocaleModalProps> = ({closeLocaleHandler}) => {
    const {i18n} = useTranslation()
    const btnHandler = (lang: string) => {
        i18n.changeLanguage(lang)
        closeLocaleHandler()
    }

  return (
    <div className={styles.localemodal}>
        <button onClick={() => btnHandler('en')}>EN</button>
        <button onClick={() => btnHandler('ru')}>RU</button>
        <button onClick={() => btnHandler('uz')}>UZ</button>
    </div>
  )
}

export default LocaleModal