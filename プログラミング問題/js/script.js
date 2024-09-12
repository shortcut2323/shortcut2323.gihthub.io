const questions = [
    {
        question: 'Q1.プログラムは主に\n何のために作られますか？',
        choices: [
            'データを記録するため',
            'コンピュータに指示を与えるため',
            'データを削除するため',
            'コンピュータのメンテナンスのため'
        ],
        correctAnswer: 1,
        explanation: 'プログラムはコンピュータに特定のタスクや\n処理を実行させるために作られます。',
        hint: '皆のスマホのアプリにもしプログラミングがされてないとどうなるかな？',
        image: 'imges/undraw_firmware_re_fgdy.svg' // 画像URLを追加
    },
    {
        question: 'Q2.プログラム内で「変数」は\n何をするものですか？',
        choices: [
            'データを保存するための箱',
            'データを削除するための道具',
            'プログラムを高速にするための機能',
            'データを表示するための画面'
        ],
        correctAnswer: 0,
        explanation: '変数はデータを保存するための箱であり、\nプログラムでその中のデータを\n操作できるようにします。',
        hint: '変数には色々なデータが入るよ！',
        image: 'imges/undraw_collecting_re_lp6p.svg' // 画像URLを追加
    },
	{
        question: 'Q3.プログラミングで「if文」を使うと、\nどんなことができますか？',
        choices: [
            '計算をとても速くする',
            '状況に応じて処理を分岐させる',
            'データを保存する場合',
            'プログラムを無限に繰り返す'
        ],
        correctAnswer: 1,
        explanation: '条件分岐(if文)は、ある条件が満たされた場合に\n実行する処理を決定するために使います。',
        hint: 'ifは英語でなんて言うかな？',
		image: 'imges/undraw_mind_map_re_nlb6.svg' // 画像URLを追加
	},
    {
        question: 'Q4.ループ（for文やwhile文）は\nどのような時に使いますか？',
        choices: [
            '一度だけ処理を行う場合',
            '特定の条件が満たされるまで処理を繰り返す',
            'データを保存する場合',
            'ユーザーにメッセージを表示する場合'
        ],
        correctAnswer: 1,
        explanation: 'ループ処理は、特定の条件が満たされるまで(while文)、または指定された回数だけ処理を繰り返す(for文)ために使います。',
        hint: 'whileは英語で「～する間」だよね～',
		image: 'imges/undraw_not_found_re_bh2e.svg' // 画像URLを追加
    },
    {
        question: 'Q5.プログラミングで「関数」とは、\n何でしょうか？',
        choices: [
            '特定の処理を行うための部品のようなもの',
            'プログラムのエラーを直すための道具',
            'プログラムの速度を向上させるため',
            'データを入力するため'
        ],
        correctAnswer: 0,
        explanation: '関数は、特定の処理をまとめて再利用可能\nにし、プログラムを分割して整理するために\n使用します。',
        hint: '関数は、プログラミングを効率的にするための重要な要素だよ！',
		image: 'imges/undraw_pen_tool_re_s92o.svg' // 画像URLを追加
    }
    // 他の問題も同様に画像を追加
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const currentQuestion = questions[currentQuestionIndex];

    // 改行文字 '\n' を <br> に置き換え
    questionElement.innerHTML = currentQuestion.question.replace(/\n/g, '<br>');
    choiceButtons.forEach((button, index) => {
        button.textContent = currentQuestion.choices[index];
    });

    document.getElementById('hint').classList.add('hidden');
    document.getElementById('hint').textContent = '';
}

function showPopup(message, explanation, imageUrl) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupExplanation = document.getElementById('popup-explanation');
    const popupImage = document.getElementById('popup-image');

    popupMessage.textContent = message;
    popupExplanation.innerHTML = explanation.replace(/\n/g, '<br>');
    popupImage.src = imageUrl;

    // メッセージのスタイルを動的に変更
    if (message === '正解！') {
        popupMessage.classList.add('correct-message');
        popupMessage.classList.remove('incorrect-message');
    } else {
        popupMessage.classList.add('incorrect-message');
        popupMessage.classList.remove('correct-message');
    }

    popup.style.display = 'flex'; // ポップアップを表示する
}

function selectAnswer(choiceIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    let message;
    if (choiceIndex === currentQuestion.correctAnswer) {
        score++;
        message = '正解！';
    } else {
        message = '不正解。';
    }
    showPopup(message, currentQuestion.explanation, currentQuestion.image);
    document.getElementById('score').textContent = `現在のスコア: ${score}`;
}

function showHint() {
    const hintElement = document.getElementById('hint');
    hintElement.innerHTML = questions[currentQuestionIndex].hint.replace(/\n/g, '<br>');
    hintElement.classList.remove('hidden');
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResultScreen();
    }
}

function showPopup(message, explanation, imageUrl) {
    const popup = document.getElementById('popup');
    const popupMessage = document.getElementById('popup-message');
    const popupExplanation = document.getElementById('popup-explanation');
    const popupImage = document.getElementById('popup-image');

    popupMessage.textContent = message;
    popupExplanation.innerHTML = explanation.replace(/\n/g, '<br>');
    popupImage.src = imageUrl;

    // メッセージのスタイルを動的に変更
    if (message === '正解！') {
        popupMessage.classList.add('correct-message');
        popupMessage.classList.remove('incorrect-message');
    } else {
        popupMessage.classList.add('incorrect-message');
        popupMessage.classList.remove('correct-message');
    }

    popup.style.display = 'flex'; // ポップアップを表示する
}


function closePopupAndNextQuestion() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none'; // ポップアップを閉じる
    nextQuestion(); // 次の問題に進む
}

function showResultScreen() {
    const quizContainer = document.getElementById('quiz-container');
    const resultScreen = document.getElementById('result-screen');

    quizContainer.style.display = 'none'; // クイズ部分を非表示にする
    resultScreen.style.display = 'flex'; // 結果画面を表示する
    document.getElementById('final-score').textContent = `正解数: ${score}`;
}

window.onload = () => {
    loadQuestion();
    document.getElementById('popup').style.display = 'none'; // 初期状態でポップアップを非表示にする
    document.getElementById('result-screen').style.display = 'none'; // 結果画面を非表示にする
};