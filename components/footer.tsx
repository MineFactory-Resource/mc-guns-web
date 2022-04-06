import React from 'react'
import Image from 'next/image'
import styles from '../styles/Footer.module.scss'

const Footer =() => {
	return (
		<div className={styles.footer}>
			<div className={styles.footer__container}>
				<div className={styles.footer__content}>
					<p><b>MC GUNS.</b> 대표 : <b>Abel Beak </b>(contact@teamuni.net)</p>
					<p>© 2021-2021 <strong>Team Uni.</strong> All Right Reserved.</p>
					<p>Minecraft는 Mojang의 상표이며, 이 사이트는 Mojang과 관련이 없습니다.</p>
				</div>
				<ul className={styles.footer__social_list}>
					<li><a><Image src='/../public/img/img_instargram.png' width='40' height='40'/></a></li>
					<li><a><Image src='/../public/img/img_discord_logo.png' width='40' height='40'/></a></li>
					<li><a><Image src='/../public/img/img_twitter.png' width='40' height='40'/></a></li>
					<li><a><Image src='/../public/img/img_youtube.png' width='40' height='40'/></a></li>
				</ul>
			</div>
		</div>
	)
}

export default Footer