import React from 'react';
import SkillItem from './SkillItem';
import styled from 'styled-components';

const SkillCard = ({ skillItem }) => {
  return (
    <SCard>
      <SCardTitle>
        {skillItem.icon}
        <h3>{skillItem.title}</h3>
      </SCardTitle>
      <STable cellSpacing='20'>
        <tbody>
          <tr>
            <th>技術</th>
            <th>スキルレベル</th>
          </tr>
          {skillItem.skills.map((skill) => (
            <SkillItem key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </tbody>
      </STable>
    </SCard>
  );
};

export default SkillCard;

const STable = styled.table`
  margin: 0 auto;
`;

const SCard = styled.div`
  width: 95%;
  max-width: 500px;
  box-shadow: 5px 5px 16px -5px #777777;
  padding: 1.8rem 0 1rem 0;

  @media screen and (min-width: 1000px) {
    max-width: 410px;
  }
`;

const SCardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.6rem;
  > h3 {
    font-size: 1.5rem;
    line-height: 1.7rem;
    letter-spacing: 1px;
  }
  margin-bottom: 1.5rem;
`;
