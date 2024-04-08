for (var i = 0; i < 5; i++) {
    setTimeout(function(i) {
        console.log(i);
    }, i, i);
}
//  The code above will output: 0 1 2 3 4
//  This is a third parameter to the setTimeout function, which is passed as an argument to the function that is called after the delay.
