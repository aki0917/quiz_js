const quiz = [
  {
    question: 'プロ野球で三冠王を３度達成した選手は？',
    answers: [
      '野村克也', 
      '落合博満',
      '王貞治',
      '長嶋茂雄'
    ],
    correct: '落合博満'
  }, {
    question: 'ハンカチ王子で話題になった斎藤佑樹の迷言とは？',
    answers: [
      '20勝なんて余裕ですよ', 
      'プロでも通用すると思います',
      'カイエン乗りてぇ〜',
      'ピッチャー自分だけで十分'
    ],
    correct: 'カイエン乗りてぇ〜'
  }, {
    question: '二刀流で活躍している選手は誰？',
    answers: [
      '柳田悠岐', 
      '坂本勇人',
      '山田哲人',
      '大谷翔平'
    ],
    correct: '大谷翔平'
  }, {
    question: '沢村賞を受賞していない投手は？',
    answers: [
      '田中将大', 
      '前田健太',
      '摂津正',
      '沢村拓一'
    ],
    correct: '沢村拓一'
  },{
    question: '８試合連続2桁奪三振のNPB記録を持つ投手は？',
    answers: [
      '菅野智之', 
      '杉内俊哉？',
      'ダルビッシュ有',
      '則本昂大'
    ],
    correct: '則本昂大'
  },
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

// 定数の文字列をHTMLに反映
const stepupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent =quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  } 
}
stepupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解..');
  };

  quizIndex++;

  if(quizIndex < quizLength) {
    // 問題があれば実行
    stepupQuiz();
  } else {
    // 問題がなければこちらを実行
    window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};

// ボタンクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

