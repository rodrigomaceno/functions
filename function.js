function myFunction (someFunction, text) {
    console.log(text);
    someFunction();
}

function hello () {
    let newVar;
    newVar = 3+4
    console.log(newVar)
}

const myVar = myFunction(hello, 'Woo-hoo')


let newF = (anyFunction, message) => {
    console.log(message);
    anyFunction();
}

newF(hello, 'Cool')


const anotherF = () => { return () => {console.log('Yee-hah!')} }

let a = anotherF()

a()

