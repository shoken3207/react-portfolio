import React from 'react';
import SimpleProductCard from '../SimpleProductCard';
import styled from 'styled-components';

const Product = ({ id }) => {
  const products = [
    {
      title: '鹿児島の撮影スポット紹介サイト',
      images: [
        'kagoshima-spot-site/1.png',
        'kagoshima-spot-site/2.png',
        'kagoshima-spot-site/3.png',
        'kagoshima-spot-site/4.png',
        'kagoshima-spot-site/5.png',
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
        'photo-connect/1.png',
        'photo-connect/2.png',
        'photo-connect/3.png',
        'photo-connect/4.png',
        'photo-connect/5.png',
        'photo-connect/6.png',
        'photo-connect/7.png',
        'photo-connect/8.png',
        'photo-connect/9.png',
        'photo-connect/10.png',
        'photo-connect/11.png',
        'photo-connect/12.png',
      ],
      desc: '撮影趣味の人が気軽に繋がれるアプリです。<br />プランを作成したり、他の人が作成したプランに参加したり出来ます。<br /><br />写真撮影が趣味である私自身が気軽に誰かと撮影に行けたら楽しそうだと思い、このようなアプリが純粋に欲しかったため、作成しました。<br /><br />email: test@gmail.com<br />password: abcdefg<br />でログインできます。',
      innovativePoints: [
        {
          outline: 'UI デザイン',
          detail:
            '基本的にはmaterial uiを使用し、見やすく、操作しやすいデザインになっていますが、プランのUIは独自のデザイン、アニメーションを付け加え、オリジナリティを出しました。',
        },
        {
          outline: 'プラン',
          detail:
            'プランの作成者には、プランの編集や削除、参加者募集締切、参加者募集再開、参加者の強制退会、友達への招待など、多くの操作権限を持たせています。',
        },
        {
          outline: 'チャット',
          detail:
            'メッセージ送信だけではなく、既読、リアクション、メッセージ削除機能などを付け加えました。',
        },
        {
          outline: '検索',
          detail:
            '県やタグからプランを検索できるようにしました。また、プランに記述してある都道府県やタグをクリックすることで、自動で検索画面に遷移して検索結果が表示されるようにしました。<br /><br />ユーザー名からユーザーの検索も可能です。検索結果から友達追加が出来ます。友達追加後は、個人チャットや自作プランへの招待、ホーム画面に友達が作成したプランの表示などが出来るようになります。',
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
    {
      title: 'ポケモン図鑑',
      images: [
        'pokemon-ssg/1.png',
        'pokemon-ssg/2.png',
        'pokemon-ssg/3.png',
        'pokemon-ssg/4.png',
        'pokemon-ssg/5.png',
        'pokemon-ssg/6.png',
      ],
      desc: 'Next.jsでSSGを体験したくて作成したアプリです。<br /><br />アピールポイントは、特にありません。',
      innovativePoints: [
        {
          outline: 'UI デザイン',
          detail:
            'SSGを体験したかっただけなので、シンプルで何のひねりもないUIにしました。',
        },
      ],
      skills: ['Next.js', 'styled-components', 'SSG'],
      reference: '',
      sourceLinks: [
        {
          name: '',
          url: 'https://github.com/shoken3207/pokemon-ssg',
        },
      ],
      productLink: 'https://pokemon-ssg-xi.vercel.app',
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
