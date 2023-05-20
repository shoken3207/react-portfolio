import React from 'react';
import SimpleProductCard from '../SimpleProductCard';
import styled from 'styled-components';

const Product = ({ id }) => {
  const products = [
    {
      title: '鹿児島の撮影スポット紹介サイト',
      images: [
        'kagoshima-spot-site/1.jpg',
        'kagoshima-spot-site/2.jpg',
        'kagoshima-spot-site/3.jpg',
        'kagoshima-spot-site/4.jpg',
        'kagoshima-spot-site/5.jpg',
        'kagoshima-spot-site/6.jpg',
      ],
      desc: '私が実際に写真を撮りに行ってみて良かった場所を季節ごとにまとめました。',
      innovativePoints: [
        {
          outline: '画像',
          detail:
            '私が実際に撮りにいったところの紹介なので、サイト内で表示している画像は全部、自分で撮った写真にしました。',
        },
        {
          outline: 'デザイン',
          detail:
            'アニメーションをふんだんに使い、リッチなサイトに仕上げました。',
        },
        {
          outline: 'フォーム',
          detail:
            '問い合わせフォームから送った内容は、私のGmailアカウントで確認できるようにしました。',
        },
      ],
      skills: ['html', 'scss', 'JavaScript', 'EmailJS'],
      reference: 'https://www.udemy.com/course/front-dev-tutorial',
      sourceLinks: [
        { name: '', url: 'https://github.com/shoken3207/kagoshima_spot_site' },
      ],
      productLink: 'https://kagoshima-spot-site.vercel.app',
    },
    {
      title: 'フォトコネ',
      images: [
        'kagoshima-spot-site/1.jpg',
        'kagoshima-spot-site/2.jpg',
        'kagoshima-spot-site/3.jpg',
        'kagoshima-spot-site/4.jpg',
        'kagoshima-spot-site/5.jpg',
        'kagoshima-spot-site/6.jpg',
      ],
      desc: '撮影趣味の人が気軽に繋がれるアプリです。<br />プランを作成したり、他の人が作成したプランに参加したい出来ます。<br /><br />email: test@gmail.com<br />password: abcdefg<br />でログインできます。',
      innovativePoints: [
        {
          outline: 'UI デザイン',
          detail:
            '基本的にはmaterial uiを使用し、見やすく、操作しやすいデザインになっていますが、プランのUIは独自のデザイン、アニメーションを付け加え、オリジナリティを出しました。',
        },
        {
          outline: 'プラン',
          detail:
            'プランの作成者には、募集の締め切りや参加者の強制退会など、多くの操作権限を持たせています。',
        },
        {
          outline: 'チャット',
          detail:
            'メッセージ送信だけではなく、既読、リアクション、メッセージ削除機能などを付け加えました。',
        },
        {
          outline: '検索',
          detail:
            '名前からユーザー、県やタグからプランを検索できるようにしました。また、プランに記述してある都道府県やタグをクリックまたは、タップすると自動で検索画面に遷移して検索結果が表示されます。',
        },
        {
          outline: '通知',
          detail:
            'チャットでメッセージを受信したり、作成したプランに誰かが参加したりすると、TopBarの通知アイコンから通知内容を確認できます。',
        },
        {
          outline: 'pwa',
          detail:
            'webブラウザ上ではもちろん、パソコンやスマホにもインストールできるようにしました。',
        },
      ],
      skills: [
        'Next.js',
        'pwa',
        'styled-components',
        'Firebase',
        'Express',
        'MongoDB',
        'material ui',
      ],
      reference: '',
      sourceLinks: [
        {
          name: 'Frontend',
          url: 'https://github.com/shoken3207/photo-connect-client',
        },
        {
          name: 'Backend',
          url: 'https://github.com/shoken3207/photo-connect-api',
        },
      ],
      productLink: 'https://photo-connect-client.vercel.app',
    },
  ];
  return (
    <SProductContainer id={id}>
      <SContents>
        <SSectionLogo>制作物</SSectionLogo>
        <SCardList>
          {products.map((product) => (
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
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
`;
