(function () {
  //JS内でuse strictを宣言すると、コードがstrict（厳格）モードで実行されるようになり、より的確なエラーチェックが行われる。
  'use strict';

  //getElementByIdとは、指定したid値を持つ要素をElementオブジェクトとして返すメソッドです。
  var high = document.getElementById('high');
  var low = document.getElementById('low');
  var next = document.getElementById('next');
  var dealerCard = document.getElementById('dealer_card');
  var playerCard = document.getElementById('player_card');
  var wrapper = document.getElementById('wrapper');
  var result = document.getElementById('result');

  var dealerValue;
  var playerValue;

  //ランダムな数値を出力する
  function getRandom() {
    return Math.floor(Math.random() * 13 + 1);
  }

  function init() {
    dealerValue = getRandom();
    dealerCard.textContent = dealerValue;
    if (dealerValue == 1) {
      $('div.dealer-card').html('<img src="image/torannpu-illust1.png">');
    } else if (dealerValue == 2) {
      $('div.dealer-card').html('<img src="image/torannpu-illust2.png">');
    } else if (dealerValue == 3) {
      $('div.dealer-card').html('<img src="image/torannpu-illust3.png">');
    } else if (dealerValue == 4) {
      $('div.dealer-card').html('<img src="image/torannpu-illust4.png">');
    } else if (dealerValue == 5) {
      $('div.dealer-card').html('<img src="image/torannpu-illust5.png">');
    } else if (dealerValue == 6) {
      $('div.dealer-card').html('<img src="image/torannpu-illust6.png">');
    } else if (dealerValue == 7) {
      $('div.dealer-card').html('<img src="image/torannpu-illust7.png">');
    } else if (dealerValue == 8) {
      $('div.dealer-card').html('<img src="image/torannpu-illust8.png">');
    } else if (dealerValue == 9) {
      $('div.dealer-card').html('<img src="image/torannpu-illust9.png">');
    } else if (dealerValue == 10) {
      $('div.dealer-card').html('<img src="image/torannpu-illust10.png">');
    } else if (dealerValue == 11) {
      $('div.dealer-card').html('<img src="image/torannpu-illust11.png">');
    } else if (dealerValue == 12) {
      $('div.dealer-card').html('<img src="image/torannpu-illust12.png">');
    } else if (dealerValue == 13) {
      $('div.dealer-card').html('<img src="image/torannpu-illust13.png">');
    }

    playerValue = getRandom();
    playerCard.textContent = playerValue;
    if (playerValue == 1) {
      $('div.front-card').html('<img src="image/torannpu-illust14.png">');
    } else if (playerValue == 2) {
      $('div.front-card').html('<img src="image/torannpu-illust15.png">');
    } else if (playerValue == 3) {
      $('div.front-card').html('<img src="image/torannpu-illust16.png">');
    } else if (playerValue == 4) {
      $('div.front-card').html('<img src="image/torannpu-illust17.png">');
    } else if (playerValue == 5) {
      $('div.front-card').html('<img src="image/torannpu-illust18.png">');
    } else if (playerValue == 6) {
      $('div.front-card').html('<img src="image/torannpu-illust19.png">');
    } else if (playerValue == 7) {
      $('div.front-card').html('<img src="image/torannpu-illust20.png">');
    } else if (playerValue == 8) {
      $('div.front-card').html('<img src="image/torannpu-illust21.png">');
    } else if (playerValue == 9) {
      $('div.front-card').html('<img src="image/torannpu-illust22.png">');
    } else if (playerValue == 10) {
      $('div.front-card').html('<img src="image/torannpu-illust23.png">');
    } else if (playerValue == 11) {
      $('div.front-card').html('<img src="image/torannpu-illust24.png">');
    } else if (playerValue == 12) {
      $('div.front-card').html('<img src="image/torannpu-illust25.png">');
    } else if (playerValue == 13) {
      $('div.front-card').html('<img src="image/torannpu-illust26.png">');
    }
    //nextボタンをクリックする度にtransitionendのイベントが設定されないようにする
    wrapper.removeEventListener('transitionend', init);
  }

  function check(guess) {
    var str;
    //再度ボタンをクリックしても何も起きない
    if (wrapper.classList.contains('open')) {
      return;
    }
    //カードが開く
    wrapper.classList.add('open');
    //ボタンを押せない状態にする
    high.classList.add('disabled');
    low.classList.add('disabled');
    if (playerValue === dealerValue) {
      str = 'draw';
    } else {
      str = 'You ' + getResultStr(guess);
    }
    //表示する
    result.textContent = str;
    result.classList.remove('hidden');
    player_card.classList.remove('front-card');
    next.classList.remove('secret');
  }

  //ユーザーの予測による結果表示
  function getResultStr(guess) {
    if (
      //勝利のパターン
      playerValue > dealerValue && guess === 'high' ||
      playerValue < dealerValue && guess === 'low'
    ) {
      return 'win!';
    } else {
      return 'lose...';
    }
  }

  init();

  high.addEventListener('click', function () {
    check('high');
  });

  low.addEventListener('click', function () {
    check('low');
  });

  //Nextボタンをクリックする
  next.addEventListener('click', function () {
    //判定が終わっていなかったらそれ以降の処理を実装しない
    if (result.classList.contains('hidden')) {
      return;
    }
    //結果を非表示にする
    result.classList.add('hidden');
    //表のカードを伏せて再表示する
    player_card.classList.add('front-card');
    //nextボタンを非表示にする
    next.classList.add('secret');
    //もう一度裏返る
    wrapper.classList.remove('open');
    //押せない状態を外す
    high.classList.remove('disabled');
    low.classList.remove('disabled');
    //transitionが終わったらinitをする(カードが裏返る時のネタバレを防ぐ)
    wrapper.addEventListener('transitionend', init);
  });
})();