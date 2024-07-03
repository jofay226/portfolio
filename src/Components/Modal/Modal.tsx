import styles from './Modal.module.scss'
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { FC } from 'react';

type ModalProps = {
    showModalHandler: () => void
}

const Modal: FC<ModalProps> = ({showModalHandler}) => {
  return (
    <div className={styles.modal}>
        <div className={styles.modal__close}>
            <CloseIcon onClick={showModalHandler}/>
        </div>
        <div className={styles.modal__success}>
            <CheckCircleIcon/>
        </div>
        <h1>Great!</h1>
        <p>Your message has been sent.</p>
        <p>I will get back asap.</p>
        <button onClick={showModalHandler}>OK</button>
    </div>
  )
}

export default Modal