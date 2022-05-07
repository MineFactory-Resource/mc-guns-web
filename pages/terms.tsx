import type { NextPage } from 'next';
import styled from '@emotion/styled';

// import Header from '../components/Header';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import TermsContent from '../src/components/TermsContent';

const Logo = styled.div`
    height: 608px;
    background-color: gray;
`;

const Terms: NextPage = () => {
    return (
        <div>
            <Header></Header>
            <Logo></Logo>
            <TermsContent></TermsContent>
            <Footer />
        </div>
    );
};

export default Terms;
