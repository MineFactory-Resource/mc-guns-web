import React from "react";
import styled from "@emotion/styled";
import ReactMarkdown from "react-markdown";
import termsfile from "../public/terms.md";

const MarkdownStyle = styled.div`
  padding: 50px;
  font-size: 30px;
  line-height: 0;
  background: #ffffff;
  box-shadow: 0px 6px 8px 6px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
`;

const markdown = `

`;

const TermsContent = () => {
  return (
    <MarkdownStyle>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </MarkdownStyle>
  );
};

export default TermsContent;
