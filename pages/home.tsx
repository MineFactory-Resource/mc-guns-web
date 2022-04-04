import React from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'

const link_styles = {
	discord_button: {
		width: "136px",
		height: "28px"
	},
	minelist_button: {
		width: "102px",
		height: "28px",
		marginRight: "12px"
	},
	minepage_button: {
		width: "102px",
		height: "28px"
	}
}

const Home = () => {
	return (
		<div>
			<Header />
			<div className={styles.banner_container}>
				<div className={styles.banner_background_container}>
					<div className={styles.banner_background}/>
					<Image  src='/../public/img/banner_image.png' width='1400' height='600'/>
				</div>
				<div className={styles.banner_contents}>
					<img className={styles.banner_logo}/>
					<span className={styles.banner_summary}>마인크래프트 오리지널 FPS의 <br/>다양한 게임 모드를 플레이해 보세요!</span>
					<div className={styles.banner_address}>
						<span>mc-guns.com</span>
						<button><Image src='/../public/img/btn_copy.png' width='20' height='20'/></button>
					</div>
					<div className={styles.banner_server_state}><span>ONLINE</span></div>
					<span className={styles.banner_server_player}>접속자 수 <strong>15</strong>명</span>
					<div className={styles.banner_link_container}>
						<div className={styles.link_container}>
							<div className={styles.link_title}>
								<Image src='/../public/img/img_discord.png' width='24' height='24'/>
								<span>디스코드</span>
							</div>
							<p>유저들과 함께 소통할 수 있는 커뮤니티에 초대합니다</p>
							<button style={link_styles.discord_button}><span>디스코드 입장하기</span></button>
						</div>
						<div className={styles.link_line}/>
						<div className={styles.link_container}>
							<div className={styles.link_title}>
								<Image src='/../public/img/img_like.png' width='24' height='24'/>
								<span>추천</span>
							</div>
							<p>MC GUNS 서버 추천하고 게임 내 보상 획득하기</p>
							<button style={link_styles.minelist_button}><span>마인리스트</span></button>
							<button style={link_styles.minepage_button}><span>마인페이지</span></button>
						</div>
					</div>
				</div>		
			</div>

			<div style={{width: "1280px", height: "751px", margin: "104px auto 97px auto"}} />
			<Footer />
		</div>
	)
}

export default Home