function a() {
    console.log('called');
}

a();

let b = function () {
    console.log('called');
}();

let c = (function () {
    console.log('called');

    let privateVal = 0;
    let publicVal = 10;

    function privateFn() {
        console.log('privateFn is called');
    }
    function publicFn() {
        console.log('publicFn is called: ' + privateVal++);
    }

    return {
        publicVal,
        publicFn,
        privateFn
    };
})()

c.publicFn();
c.publicFn();
c.publicFn();
c.publicFn();
c.privateFn();

console.log(c.publicVal);


(function (g) {
    function hello(name) {
        console.log(`俺の名前は${name}`);
    }

    hello('太朗');
}(this));

(function (g) {
    function hello(name) {
        console.log(`俺の名前は${name}`);
    }

    hello('エレン');
}(this));