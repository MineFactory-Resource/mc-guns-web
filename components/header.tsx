import React from 'react'

const styles = {
    container: {
        width: "100%",
        height: "88px",
        backgroundColor: "#000000"
    },

    inner_container: {
        width: "1400px",
        height: "100%",
        margin: "auto",
        display: "flex"
    },

    logo: {
        position: "absolute",
        top: "32px",
        width: "57px",
        height: "24px",
        margin: "auto 0"
    },

    navigation: {
        margin: "auto",
        display: "flex",
    },

    navigation_item: {
        margin: "0 30px 0 30px",
        fontFamily: "Lato",
        fontWeight: "700",
        fontSize: "20px",
        lineHeight: "24px",
        display: "block",
        aligntems: "center",
        color: "#CFCFCF"
    }
}

const Header = () => {
    return (
		<div style={styles.container}>
			<div style={styles.inner_container}>
				<img style={styles.logo}/>
                <div style={styles.navigation}>
                    <span style={styles.navigation_item}>HOME</span>
                    <span style={styles.navigation_item}>RULES</span>
                    <span style={styles.navigation_item}>FAQ</span>
                </div>
			</div>
		</div>
	)
}

export default Header