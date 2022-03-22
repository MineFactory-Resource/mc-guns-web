import React from 'react'
import styles from '../styles/Home.module.css'

const Header =() => {
	return (
		<div style={{width: "100%", height: "88px", backgroundColor: "#919191"}}>
			<div style={{width: "1280px", height: "100%", margin: "auto", display: "flex"}}>
				<a href='#' style={{margin: "auto 0"}}><img style={{width: "79px", height: "34px"}}/></a>
			</div>
		</div>
	)
}

const Footer =() => {
	return (
		<div style={{width: "100%", height: "220px", backgroundColor: "#343A40"}}>
			<div style={{width: "1280px", height: "100%", margin: "auto", display: "flex"}}>
				
			</div>
		</div>
	)
}

const News = () => {
	return (
		<div></div>
	)
}

const Home = () => {
	return (
		<div>
			<Header />
			<div className={styles.top_container}>
				<img style={{width: "185px", height: "55px", marginTop: "104px"}}/>
				<div style={{marginTop: "37px"}}>서버 소개 문구</div>
				<div style={{marginTop: "111px"}}>서버 주소</div>
				<div style={{marginTop: "11px"}}>online : 100 명</div>
				<div className={styles.link_container} style={{marginTop: "74px"}}>
					<div style={{textAlign: "right"}}>
						<div className={styles.link_title}>디스코드</div>
						<div className={styles.link_terms}>The term design, chairman, refers to design,<br />derives from the Latin word designare.</div>
					</div>
					<img style={{width: "103px", height: "103px", marginRight: "46px", marginLeft: "46px"}}/>
					<img style={{width: "103px", height: "103px", marginRight: "46px"}}/>
					<div style={{textAlign: "left"}}>
						<div className={styles.link_title}>마인리스트</div>
						<div className={styles.link_terms}>The term design, chairman, refers to design,<br />derives from the Latin word designare.</div>
					</div>
				</div>
			</div>
			<div className={styles.help_container}>
				<div className={styles.help_item_box} style={{justifyContent: "right", backgroundColor: "#C4C4C4"}}>
					<div>
						<div className={styles.help_title}>서버 이용 약관</div>
						<div style={{marginTop: "5px"}}>대충 어떤 문장</div>
					</div>
					<a href='#' className={styles.help_details} style={{marginRight: "85px"}}><div style={{margin: "auto"}}>자세히 보기 &#62;</div></a>
				</div>
				<div className={styles.help_item_box} style={{justifyContent: "left", backgroundColor: "#A4A4A4"}}>
					<div style={{marginLeft: "85px"}}>
						<div className={styles.help_title}>서버 FAQ</div>
						<div style={{marginTop: "5px"}}>대충 어떤 문장</div>
					</div>
					<a href='#' className={styles.help_details}><div style={{margin: "auto"}}>자세히 보기 &#62;</div></a>
				</div>
			</div>
			<div style={{width: "1280px", height: "751px", margin: "104px auto 97px auto"}}>
				<div>
					<span>SERVER NEWS</span>
					<span>FPS SEVER의 새로운 소식을 접해보세요.</span>
					<div>뉴스 더보기</div>
				</div>
				<div />
				<div>
					<News />
					<News />
					<News />
					<News />
					<News />
					<News />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Home