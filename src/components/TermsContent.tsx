import styled from '@emotion/styled';
import ReactMarkdown from 'react-markdown';
import { Terms_data } from './terms_data';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const MarkdownStyle = styled.div`
    width: 1400px;
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

const TermsContent = () => {
    return (
        <MarkdownStyle>
            <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                children={Terms_data}
            />
        </MarkdownStyle>
    );
};

export default TermsContent;
