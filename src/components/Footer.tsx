import Image from 'next/image';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
    width: 1400px;
    height: 100%;
    margin: auto;
    border-top: 1px solid #dfdfdf;
    display: flex;
    justify-content: space-between;
`;

const FooterContent = styled.div`
    margin-top: 58px;
    margin-bottom: 58px;
    font-family: 'Pretendard';
    font-size: 12px;
    line-height: 14px;
    color: #666666;
    p {
        margin: 2px 0;
    }
`;

const Socials = styled.ul`
    margin-top: 60px;
    padding: 0;
    list-style: none;
    li {
        float: left;
    }
`;

const Footer = () => {
    return (
        <footer>
            <FooterContainer>
                <FooterContent>
                    <p>
                        <b>MC GUNS.</b> 대표 : <b>Abel Beak </b>(contact@teamuni.net)
                    </p>
                    <p>
                        © 2021-2021 <strong>Team Uni.</strong> All Right Reserved.
                    </p>
                    <p>Minecraft는 Mojang의 상표이며, 이 사이트는 Mojang과 관련이 없습니다.</p>
                </FooterContent>
                <Socials>
                    <li>
                        <a>
                            <Image src="/icon/instagram.png" width="40" height="40" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Image src="/icon/discord.png" width="40" height="40" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Image src="/icon/twitter.png" width="40" height="40" />
                        </a>
                    </li>
                    <li>
                        <a>
                            <Image src="/icon/youtube.png" width="40" height="40" />
                        </a>
                    </li>
                </Socials>
            </FooterContainer>
        </footer>
    );
};

export default Footer;
