// Immediately Invoked Function Expressions (IIFE)

(function chai()
{
    console.log("Hello DC Fan");
})(); // IIFE function is invoke but he didn't know where to stop the function or exit that's why we have to put semicolon ;

((name) =>
{
    console.log(`hello coder ${name}.`)
})("Rohit")

