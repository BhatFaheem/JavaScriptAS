// var is in closures and the refrence value gets continously changed that is why we use a function so that the value of i is passed as a different value and value of i changes every time it iterates

/*function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i);
            }, i * 1000);
        }
        close(i);
    }
    console.log("Hello JavaScript");

}
x();
*/
// let is a block scope element and its values is different everytime it iterates in the loop
/*
function x()
{
    for(let i = 0 ; i <= 5 ;i++)
    {
        setTimeout(() => {
            console.log(i);
        }, i * 1000);
    }
    console.log("HELLO JAVA SCRIPT");
}
x();
*/