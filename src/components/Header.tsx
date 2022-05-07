import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
    width: 100%;
    height: 88px;
    background-color: #000000;
`;

const HeaderContainer = styled.div`
    width: 1400px;
    height: 100%;
    margin: auto;
    display: flex;
`;

const NavConatainer = styled.nav`
    margin: auto;
    display: flex;
    span {
        margin: 0 30px 0 30px;
        font-family: Lato;
        font-weight: 700;
        font-size: 20px;
        line-height: 24px;
        display: block;
        align-items: center;
        color: #cfcfcf;
    }
`;

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <a>LOGO</a>
                <NavConatainer>
                    <span>HOME</span>
                    <span>RULES</span>
                    <span>FAQ</span>
                </NavConatainer>
            </HeaderContainer>
        </HeaderWrapper>
    );
};

export default Header;
