import React from 'react';
import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Profile = ({ id }) => {
  return (
    <SContainer id={id}>
      <SContents>
        <SSectionLogo>Profile</SSectionLogo>
        <SProfileInfo>
          <SProfileImage>
            <img src='/images/profile.jpg' alt='' />
          </SProfileImage>
          <SInfoDetail>
            <SProfileText>
              　はじめまして。KCS鹿児島情報専門学校（北海道情報大学）に通っている、しょうと申します。現在3年生で、2025年3月に卒業予定です。
              <br />
              ゲーム開発企業でアルバイトをしています。
              <br />
              <br />
              　学校では、JavaやSQL、Linux、Windows
              Server、ネットワーク、セキュリティについてなど、幅広く学習しています。
              また、独学でWeb系の技術を習得しており、現在は、TypeScriptや
              flutterの習得を目指して勉強しています。
              <br />
              <br />
              　写真を撮ることが趣味です。撮影した写真をインスタグラムに投稿しているので、下記リンクから見ていただけると、嬉しいです！！
            </SProfileText>

            <SLinkGroup>
              <SLinke>
                <div>
                  <GitHubIcon />
                  <h5>GitHub</h5>
                </div>
                <a
                  href='https://github.com/shoken3207?tab=repositories'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://github.com/shoken3207?tab=repositories
                </a>
              </SLinke>
              <SLinke>
                <div>
                  <InstagramIcon />
                  <h5>Instagram</h5>
                </div>
                <a
                  href='https://www.instagram.com/shoken0224'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  https://www.instagram.com/shoken0224
                </a>
              </SLinke>
            </SLinkGroup>
          </SInfoDetail>
        </SProfileInfo>
      </SContents>
    </SContainer>
  );
};

export default Profile;

const SContainer = styled.div`
  padding-top: 1rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SContents = styled.div`
  width: 85%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

const SSectionLogo = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  font-family: 'Shippori Mincho B1', serif;
  letter-spacing: 0.6px;
`;

const SProfileInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  column-gap: 2rem;
  flex-direction: row;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    row-gap: 2rem;
  }
`;

const SInfoDetail = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

const SProfileImage = styled.div`
  min-width: 250px;
  width: 100%;
  margin: 0 auto;
  > img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }
`;

const SProfileText = styled.div`
  font-size: 0.9rem;
  color: #3a3939;
`;

const SLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.7rem;
`;

const SLinke = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  row-gap: 0.25rem;

  > div {
    display: flex;
    align-items: center;
    column-gap: 0.3rem;

    > h5 {
      font-size: 1rem;
      font-family: 'Lora', serif;
    }
  }

  > a {
    color: #1976d2;
    word-break: break-all;
    font-size: 0.8rem;
  }
`;
