function hello(name) {
    console.log('hello ' + name);
}

function bye() {
    console.log('bye');
}

function fn(cb) {
    cb('Levi');
}

fn(hello);
fn(bye);
fn(function (name) {
    console.log('hello ' + name);
});

setTimeout(hello, 2000);


function greeting(name) {
    alert('Hello ' + name);
}

function processUserInput(callback) {
    let name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);