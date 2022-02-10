/**
 * 問題：
 * 四則演算を行うメソッドを持ったオブジェクトを
 * クロージャーを用いて作成してみてください。
 * 
 * 四則演算を行うメソッド（plus, minus, multiply, divide）
 * を実行すると以下のようにコンソールに出力されます。
 * 
 * const calc = calcFactory(10); // 初期値を10として設定
 * calc.plus(5);      // 出力結果 "10 + 5 = 15"
 * calc.minus(3);     // 出力結果 "15 - 3 = 12"
 * calc.multiply(3);  // 出力結果 "12 x 3 = 36"
 * calc.divide(2);    // 出力結果 "36 / 2 = 18"
 * 
 * ※前に行った計算結果をもとに四則演算を行います。
 * ※四則演算は"+","-","*","/"を数値ではさんで計算を行います。
 */

let createTimer = function () {
    let time = 10;

    return function timeDown() {
        time -= 1;
        console.log(time);
    }
}

let timer = createTimer();
timer();
timer();
timer();


window.onload = function () {
    let Hello = function (_name, _major) {
        let name = _name;
        this.major = _major;
        let getName = function () {
            return name;
        }
        this.setName = function (_name) {
            name = 'Mr.' + _name;
        }
        this.getMajor = function () {
            return this.major;
        }
        this.say = function () {
            console.log('Hello! ' + getName() + 'I know you are great about ' + this.major + '!');
        }
    }
}

let ins = new Hello('Jobs', 'Design');
ins.say();
ins.name = 'Tim';
ins.major = 'Computer Science';
ins.say();
ins.setName('Tim');
ins.major = 'Marketing';
ins.say();