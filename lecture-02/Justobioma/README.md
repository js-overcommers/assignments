Assignment 02
_My solutions_

1.  With code ex, explain let, var and const keywords;
    a) The 'var' keyword was the first used to declare and define variables in Javascript. It
    could do a lot of work in this regard as seen below;
    var myName = 'Obioma';
    var myJob = 'Developer';
    This is fine and it is possible to redeclare the variable in another line;
    var myName = 'James';
    var myJob = 'Admin';
    However it is prone to cause confusion and errors over time. There is really no need to user 'var' for any reason.
    b) The 'let' keyword should be used instead of 'var'. It wouldn't allow someone to redeclare
    a variable twice thereby eliminating errors in the system.
    let myName = 'Obioma';
    let myName = 'James'; // Throws an error
    Instead, one can do the following;
    let myName = 'Obioma';
    myName = 'James';
    c) The 'const' keyword is for declaring constants used in a program. That is, values that we are not going to change in the lifetime of the program. for ex;
    const myStartYear = 2015;
    myStartYear = myStartYear + 5; // Throws an error
    [courtsey: developer.mozilla.org]

2.  Create a variable called z, assign x + y to it, and display the result in an alertbox;

    - DONE - See code below;
      <!DOCTYPE html>
      <html>
      <body>

             <h2>JavaScript Alert</h2>

             <button onclick="myFunction()">Try it</button>

             <script>
             function myFunction() {
             let x = 3;
             let y = 4;
             let z = x + y;
             //alert("I am an alert box!");
             alert(`${z}`);
             }
             </script>

             </body>
             </html>

3.  Display the sum of 5 + 10, using two variables: x and y.
    let x = 5;
    let y = 10;
    let sum = x + y;
    console.log(sum);

4.  Create a variable called carName, assign the valueVolvo to it
    let carName = valueVolvo;

5.  What error message do you get when you try to redeclare a variable stored with let and const. - 'Variable has already been declared' and 'Identifier has already been declared' respectively.

6.  What error message is displayed when you try to access the block scope variables outside the block ?
    For variables declared with 'var', they can be accessed outside the block. However this is not the case with variables declared with 'let' and constants declared with 'const'.
    for ex;
    {
    let x = 2;
    }  
     console.log(x);
    The error message received if this is attempted is 'Uncaught ReferenceError: x is not defined'.
