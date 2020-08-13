function greet(){
    console.log('hello!');
}

function timer(){
    return setTimeout(()=> {
        console.log('End!!');
    }, 3000);
}

greet()
timer()