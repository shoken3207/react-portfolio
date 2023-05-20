import React from 'react';
import ImageGallery from 'react-image-gallery';
import styled from 'styled-components';
import 'react-image-gallery/styles/css/image-gallery.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';
import BookIcon from '@mui/icons-material/Book';

const DetailProductCard = ({ product }) => {
  const images = product.images.map((image) => {
    return {
      original: `/images/products/${image}`,
      thumbnail: `/images/products/${image}`,
    };
  });

  return (
    <SCard>
      <SCardInfo>
        <STitle>{product.title}</STitle>
        <SDetalSection>
          <SDetalSectionTitle>
            <div />
            <h4>概要</h4>
          </SDetalSectionTitle>
          <SDesc>
            {product.desc.split('<br />').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </SDesc>
        </SDetalSection>
        <SDetalSection>
          <SDetalSectionTitle>
            <div />
            <h4>使用言語など</h4>
          </SDetalSectionTitle>
          <SSkillGroup>
            {product.skills.map((skill, index) =>
              index === 0 ? (
                <span key={skill}>{skill}</span>
              ) : (
                <span key={skill}>, {skill}</span>
              )
            )}
          </SSkillGroup>
        </SDetalSection>
        <SDetalSection>
          <SDetalSectionTitle>
            <div />
            <h4>リンク</h4>
          </SDetalSectionTitle>
          <SLinkGroup>
            {product.sourceLinks.length > 1 ? (
              product.sourceLinks.map((sourceLink) => (
                <SLinke>
                  <div>
                    <GitHubIcon />
                    <h5>{sourceLink.name}</h5>
                  </div>
                  <a
                    href={sourceLink.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {sourceLink.url}
                  </a>
                </SLinke>
              ))
            ) : (
              <SLinke>
                <div>
                  <GitHubIcon />
                  <h5>Source</h5>
                </div>
                <a
                  href={product.sourceLinks[0].url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {product.sourceLinks[0].url}
                </a>
              </SLinke>
            )}
            <SLinke>
              <div>
                <WebIcon />
                <h5>Product</h5>
              </div>
              <a
                href={product.productLink}
                target='_blank'
                rel='noopener noreferrer'
              >
                {product.productLink}
              </a>
            </SLinke>
            {product.reference && (
              <SLinke>
                <div>
                  <BookIcon />
                  <h5>Reference</h5>
                </div>
                <a
                  href={product.reference}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {product.reference}
                </a>
              </SLinke>
            )}
          </SLinkGroup>
        </SDetalSection>
        <SDetalSection>
          <SDetalSectionTitle>
            <div />
            <h4>工夫した点</h4>
          </SDetalSectionTitle>
          <SInnovativePoints>
            {product.innovativePoints.map((innovativePoint) => (
              <li key={innovativePoint.outline}>
                <h4>
                  {innovativePoint.outline
                    .split('<br />')
                    .map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </h4>
                <p>
                  {innovativePoint.detail.split('<br />').map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </li>
            ))}
          </SInnovativePoints>
        </SDetalSection>
      </SCardInfo>
      <SImageGallery>
        <ImageGallery
          items={images}
          showFullscreenButton={false}
          useBrowserFullscreen={false}
          showPlayButton={false}
        />
      </SImageGallery>
    </SCard>
  );
};

export default DetailProductCard;

const SCard = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  row-gap: 1rem;

  @media screen and (min-width: 1000px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const SCardInfo = styled.div`
  padding: 1rem 0.5rem 1rem 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.1rem;
  @media screen and (min-width: 1000px) {
    width: 40%;
    height: 550px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const SImageGallery = styled.div`
  width: 100%;
  @media screen and (min-width: 1000px) {
    width: 58%;
  }
`;

const STitle = styled.h3`
  font-family: 'Shippori Mincho B1', serif;
  font-size: 1.6rem;
  color: #1976d2;
`;

const SInnovativePoints = styled.ul`
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;

  > li {
    display: flex;
    flex-direction: column;
    row-gap: 0.2rem;
    > h4 {
      font-family: 'Shippori Mincho B1', serif;
      font-size: 1.1rem;
      font-weight: 700;
    }

    > p {
      font-size: 0.7rem;
      color: #827e7e;
    }
  }
`;

const SDetalSection = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.4rem;
`;

const SDetalSectionTitle = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.3rem;
  justify-content: flex-start;
  > h4 {
    font-family: 'Shippori Mincho B1', serif;
    font-size: 1.3rem;
  }
  > div {
    background-color: #1976d2;
    height: 1.4rem;
    border-radius: 10px;
    width: 0.3rem;
  }
`;

const SDesc = styled.p`
  font-size: 0.7rem;
  padding-left: 1rem;
`;

const SSkillGroup = styled.div`
  padding-left: 1rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const SLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.7rem;
  padding-left: 1rem;
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
