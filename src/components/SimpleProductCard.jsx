import React, { useState } from 'react';
import styled from 'styled-components';
import DetailProductCard from './DetailProductCard';
import CommonDialog from './CommonDialog';
const SimpleProductCard = ({ product }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <SSimpleProductCard>
      <div onClick={() => setDialogIsOpen(true)}>
        <img src={`/images/products/${product.images[0]}`} alt='' />
      </div>
      <h3>{product.title}</h3>
      <CommonDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        width='lg'
      >
        <DetailProductCard product={product} />
      </CommonDialog>
    </SSimpleProductCard>
  );
};

export default SimpleProductCard;

const SSimpleProductCard = styled.div`
  max-width: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  @media screen and (min-width: 730px) {
    max-width: 15.6rem;
  }
  > div {
    cursor: pointer;
    width: 100%;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0);
    > img {
      width: 100%;
      transition: all 0.3s;
    }

    &:hover {
      > img {
        transform: scale(1.2);
      }
    }
  }

  > h3 {
    text-align: center;
    font-size: 1.2rem;
    font-family: 'Shippori Mincho B1', serif;
    font-weight: 550;
    color: brown;

    @media screen and (min-width: 730px) {
      font-size: 0.9rem;
    }
  }
`;
