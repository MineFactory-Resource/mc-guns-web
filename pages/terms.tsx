import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "@emotion/styled";

import Header from "../components/header";
import Footer from "../components/footer";
import TermsContent from "../components/terms_content";

const Logo = styled.div`
  padding: 50px;
  font-size: 30px;
  line-height: 0;
  background: #ffffff;
  box-shadow: 0px 6px 8px 6px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
`;

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Logo></Logo>
      <div></div>
      <TermsContent></TermsContent>
      <Footer />
    </div>
  );
};

export default Home;
