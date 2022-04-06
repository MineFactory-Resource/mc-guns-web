import React from 'react'
import styles from '../styles/Header.module.scss'

const Header = () => {
    return (
		<nav className={styles.navbar}>
			<div className={styles.navbar__container}>
				<img className={styles.navbar__logo}/>
                <div className={styles.navbar__content}>
                    <span className={styles.navbar__item}>HOME</span>
                    <span className={styles.navbar__item}>RULES</span>
                    <span className={styles.navbar__item}>FAQ</span>
                </div>
			</div>
		</nav>
	)
}

export default Header