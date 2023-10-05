import React from 'react';
import styled from 'styled-components';
import SkillCard from '../SkillCard';
import { SKILL_INFO } from '../../const';
const Skill = ({ id }) => {
  return (
    <SContainer id={id}>
      <SContents>
        <SSectionLogo>skill</SSectionLogo>
        <SSkillCardList>
          {SKILL_INFO.map((item) => (
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
