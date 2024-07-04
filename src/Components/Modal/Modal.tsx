import styles from './Modal.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

type ModalProps = {
    showModalHandler: () => void
}

const Modal: FC<ModalProps> = ({showModalHandler}) => {
  const {t} = useTranslation(["contactPage"]);
  return (
    <div className={styles.modal}>
        <div className={styles.modal__close}>
            <CloseIcon onClick={showModalHandler}/>
        </div>
        <div className={styles.modal__success}>
            <CheckCircleIcon/>
        </div>
        <h1>{t('great')}</h1>
        <p>{t('sent')}</p>
        <p>{t('back')}</p>
        <button onClick={showModalHandler}>OK</button>
    </div>
  )
}

export default Modal