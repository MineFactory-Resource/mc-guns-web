import styled from '@emotion/styled';

const MarkdownStyle = styled.div`
    max-width: 1400px;
    margin: auto;
    margin-top: 40px;
    margin-bottom: 68px;
    font-family: 'Pretendard';
    h3 {
        font-size: 32px;
        line-height: 38px;
        text-align: center;
    }
`;

const TermsMenuWrapper = styled.div`
    witdh: 1400px;
    margin: auto;
`;

const TermsMenuHead = styled.div``;

const TermsList = styled.ul``;
const TermsMenu = () => {
    return <TermsMenuWrapper></TermsMenuWrapper>;
};

export default TermsMenu;
