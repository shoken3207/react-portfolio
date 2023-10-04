export const PRODUCTS = [
  {
    title: 'フォトコネ',
    isAttention: true,
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
    desc: '撮影趣味の人が気軽に繋がれるアプリです。<br />プランを作成したり、他の人が作成したプランに参加したり出来ます。<br /><br />写真撮影が趣味である私自身が気軽に誰かと撮影に行けたら楽しそうだと思い、このようなアプリが純粋に欲しかったため、作成しました。<br /><br />バックエンドのデプロイとして、フリープランを利用しているため、初回アクセス時は、実行まで時間がかかります。<br /><br />email: test@gmail.com<br />password: abcdefg<br />でログインできます。',
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
    title: 'よか旅',
    isAttention: true,
    images: [
      'yoka-tabi/1.png',
      'yoka-tabi/2.png',
      'yoka-tabi/3.png',
      'yoka-tabi/4.png',
      'yoka-tabi/5.png',
      'yoka-tabi/6.png',
      'yoka-tabi/7.png',
      'yoka-tabi/8.png',
      'yoka-tabi/9.png',
      'yoka-tabi/10.png',
    ],
    desc: '余暇を大切にしたい人に向けた、AIが旅の行き先を提案するアプリです。<br />出発地、目的県、やりたいことを選択すると、AIが提案するスポットを経路付きで表示します。<br /><br />GMOインターネットグループ株式会社のサマーインターンで4人のチームメンバーと作り上げました。<br /><br />私は、主にフロントエンド領域を対応し、汎用コンポーネント、情報入力画面、スポット表示画面の実装、その他画面のスタイル修正、コードレビューなどを行いました。<br /><br />バックエンドのデプロイとして、フリープランを利用しているため、初回アクセス時は、実行まで時間がかかります。<br />有料APIを使用しており、使用状況によっては、現在はプランの生成が出来ない可能性があります。',
    innovativePoints: [
      {
        outline: 'UI デザイン',
        detail: 'ロゴを基調として、統一した温かみのあるデザインにしました。',
      },
      {
        outline: '入力フォーム',
        detail:
          '出発地を入力する際、出発県を選択すると、その県の全ての市町村を返してくれるAPIを叩き、市町村を選べるようにしました。<br />また、都道府県や市を選択させるとなると、多くの選択肢の中から選ぶことになり、UX的に問題があると思ったため、入力補完付きのinputタグである、AutoCompleteを使用して、選択も入力も可能にしました。<br /><br />入力させる際、意図しない値が入ることを想定し、厳密なバリデーションを実装しました。',
      },
      {
        outline: '旅先生成',
        detail:
          'ChatGPTで生成した旅先は、試行錯誤したプロンプトによってある程度決まった形式で出力できるようにしました。',
      },
      {
        outline: '旅先の保存',
        detail:
          'AIで生成した旅先で気になったものを保存できるようにしました。<br />また、保存した旅先の中で実際に行った県は、別枠で保存し、githubの草をイメージした日本地図でどの県に高頻度で行っているのかを確認することが出来るようにしました。',
      },
      {
        outline: 'レスポンシブ対応',
        detail:
          'アプリの仕様から、パソコンだけではなく、様々なアプリからアクセスされることが予想できたため、レスポンシブ対応し、どのようなデバイスからアクセスしても、快適に扱えるようにしました。',
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
      'Fast API',
      'ChatGPT AI',
      'Firebase',
      'material ui',
    ],
    reference: '',
    sourceLinks: [
      {
        name: 'Frontend',
        url: 'https://github.com/shoken3207/maigo_kaiketsu',
      },
      {
        name: 'Backend',
        url: 'https://github.com/shoken3207/maigo_kaiketsu_api',
      },
    ],
    productLink: 'https://maigo-kaiketsu.vercel.app',
  },
  {
    title: '鹿児島の撮影スポット紹介サイト',
    isAttention: false,
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
    title: 'ほんのいちにち',
    isAttention: false,
    images: [
      'mti/1.png',
      'mti/2.png',
      'mti/3.png',
      'mti/4.png',
      'mti/5.png',
      'mti/6.png',
      'mti/7.png',
      'mti/8.png',
    ],
    desc: '認知症予防を目的とした日記アプリです。<br /><br /> 基本機能として、日記の投稿、編集、削除が出来ます。<br /><br />株式会社MTIでの7日間インターンの最後に、チーム開発(5人)で作り上げました。<br /><br />私は、主にフロントエンド領域を対応し、汎用コンポーネント、日記一覧画面、日記詳細画面、年月による検索の実装、その他画面のスタイル修正、コードレビューなどを行いました。<br /><br />デプロイ先の無料期間が切れたため、アプリへのアクセスが出来ません。',
    innovativePoints: [
      {
        outline: 'UI デザイン',
        detail:
          '作業を分担して実装したため、統一感がない箇所もありますが、高齢者が読みやすいよう、大きめのフォントと、認知症に効果のある日記のテンプレートを用意しました。',
      },
      {
        outline: 'カスタマイズ',
        detail:
          '日記を書く時だけではなく、閲覧するときにも価値を提供したいと考え、アプリ内のテーマカラーとフォントを指定できるようにしました。',
      },
      {
        outline: 'ユーザビリティ',
        detail:
          'ローディングやスナックバーによるメッセージ表示、データ削除時の確認ダイアログなど、ユーザビリティを考慮しました。',
      },
      {
        outline: '検索',
        detail:
          '年と月を選択することで、自分の日記を検索できるようにしました。',
      },
      {
        outline: 'チーム開発',
        detail:
          '初めてのメンバーと限られた時間内でしたが、役割分担をして、積極的にコミュニケーションをとりながら、完成させることが出来ました。',
      },
    ],
    skills: [
      'Vue',
      'Node.js',
      'S3',
      'Cloud9',
      'Lambda',
      'DynamoDB',
      'CloudWatch',
      'Vuetify',
    ],
    reference: '',
    sourceLinks: [
      {
        name: '',
        url: 'https://github.com/shoken3207/mti-intern',
      },
    ],
    productLink:
      'https://team-2-internship.s3.ap-northeast-1.amazonaws.com/index.html',
  },
  {
    title: 'ポケモン図鑑',
    isAttention: false,
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
