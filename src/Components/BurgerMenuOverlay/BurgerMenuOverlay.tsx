import { FC } from 'react'
import styles from './BurgerMenuOverlay.module.scss'

type BurgerMenuOverlayProps = {
    burgerMenuModalHandler : () => void
}

const BurgerMenuOverlay: FC<BurgerMenuOverlayProps> = ({burgerMenuModalHandler}) => {
  return (
    <div className={styles.overlay} onClick={burgerMenuModalHandler}>BurgerMenuOverlay</div>
  )
}

export default BurgerMenuOverlay