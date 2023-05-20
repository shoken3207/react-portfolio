import React from 'react';
import styled from 'styled-components';
import SkillCard from '../SkillCard';
import StorageIcon from '@mui/icons-material/Storage';
import DnsIcon from '@mui/icons-material/Dns';
import WebIcon from '@mui/icons-material/Web';
import AltRouteIcon from '@mui/icons-material/AltRoute';
const Skill = ({ id }) => {
  const array = [
    {
      title: 'frontend',
      icon: <WebIcon fontSize='large' />,
      skills: [
        { name: 'HTML/CSS', level: 4.5 },
        { name: 'JavaScript', level: 4.5 },
        { name: 'TypeScript', level: 2.5 },
        { name: 'React/Next.js', level: 4.5 },
        { name: 'Vue/Nuxt.js', level: 3.5 },
      ],
    },
    {
      title: 'backend',
      icon: <DnsIcon fontSize='large' />,
      skills: [
        { name: 'Node.js (Express)', level: 3.5 },
        { name: 'Java', level: 3 },
      ],
    },
    {
      title: 'DB',
      icon: <StorageIcon fontSize='large' />,
      skills: [
        { name: 'MySQL', level: 3 },
        { name: 'MongoDB', level: 3.5 },
        { name: 'Cloud FIrestore', level: 3 },
      ],
    },
    {
      title: 'その他',
      icon: <AltRouteIcon fontSize='large' />,
      skills: [
        { name: 'git', level: 4 },
        { name: 'linux', level: 3 },
        { name: 'Firebase', level: 3.5 },
        { name: 'mongoose', level: 3.5 },
        { name: 'Postman', level: 3 },
      ],
    },
  ];
  return (
    <SContainer id={id}>
      <SContents>
        <SSectionLogo>skill</SSectionLogo>
        <SSkillCardList>
          {array.map((item) => (
            <SkillCard skillItem={item} key={item.title} />
          ))}
        </SSkillCardList>
      </SContents>
    </SContainer>
  );
};

export default Skill;

const SContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SContents = styled.div`
  width: 86%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  justify-content: center;
  align-items: center;
`;

const SSkillCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
`;

const SSectionLogo = styled.h2`
  font-size: 1.8rem;
  font-family: 'Shippori Mincho B1', serif;
  text-align: center;
  letter-spacing: 0.6px;
`;
