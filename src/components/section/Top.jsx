import React from 'react';
import styled from 'styled-components';

const Top = ({ id }) => {
  return <SContainer id={id}>Top</SContainer>;
};

export default Top;

const SContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
