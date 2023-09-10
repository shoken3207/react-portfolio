import React from 'react';
import SimpleProductCard from '../SimpleProductCard';
import styled from 'styled-components';
import { PRODUCTS } from '../../const';

const Product = ({ id }) => {
  return (
    <SProductContainer id={id}>
      <SContents>
        <SSectionLogo>制作物</SSectionLogo>
        <SCardList>
          {PRODUCTS.map((product) => (
            <SimpleProductCard key={product.title} product={product} />
          ))}
        </SCardList>
      </SContents>
    </SProductContainer>
  );
};

export default Product;

const SProductContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SContents = styled.div`
  max-width: 1120px;
  width: 88%;
  margin: 0 auto;
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

const SCardList = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
