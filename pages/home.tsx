import React from 'react'
import styles from '../styles/Home.module.css'
import Header from './header'
import Footer from './footer'

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
				<div className={styles.help_item_box} style={{justifyContent: "right", background: "linear-gradient(270deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 45.42%), #8B949B"}}>
					<div>
						<div className={styles.help_title}>서버 이용 약관</div>
						<div style={{marginTop: "5px"}}>대충 어떤 문장</div>
					</div>
					<a href='#' className={styles.help_details} style={{marginRight: "85px"}}><div style={{margin: "auto"}}>자세히 보기 &#62;</div></a>
				</div>
				<div className={styles.help_item_box} style={{justifyContent: "left", backgroundColor: "#8B949B"}}>
					<div style={{marginLeft: "85px"}}>
						<div className={styles.help_title}>서버 FAQ</div>
						<div style={{marginTop: "5px"}}>대충 어떤 문장</div>
					</div>
					<a href='#' className={styles.help_details}><div style={{margin: "auto"}}>자세히 보기 &#62;</div></a>
				</div>
			</div>
			<div style={{width: "1280px", height: "751px", margin: "104px auto 97px auto"}} />
			<Footer />
		</div>
	)
}

export default Home