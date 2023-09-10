import React, { useState } from 'react';
import styled from 'styled-components';
import DetailProductCard from './DetailProductCard';
import CommonDialog from './CommonDialog';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
const SimpleProductCard = ({ product }) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);
  return (
    <SSimpleProductCard>
      {product.isAttention && (
        <SAttentionIcon>
          <NewReleasesIcon fontSize='small' />
          <span>注目</span>
        </SAttentionIcon>
      )}
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
    &:nth-of-type(1) {
      cursor: pointer;
      width: 100%;
      overflow: hidden;
      background-color: rgba(0, 0, 0, 0);
      position: relative;

      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: black;
        opacity: 0;
        transition: all 0.4s;
      }

      > img {
        width: 100%;
        transition: all 0.4s;
      }

      &:hover {
        > img {
          transform: scale(1.2);
        }

        &::after {
          opacity: 0.3;
        }
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

const SAttentionIcon = styled.span`
  margin-bottom: -0.7rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  column-gap: 0.2rem;
  color: red;
  > span {
    font-weight: bold;
    font-size: 0.8rem;
  }
`;
