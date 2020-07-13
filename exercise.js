//                      PART ONE EXERCISE

//Question 1 & 2
var firstName = "Kingsley Chijioke";
var secondName = "Kingsley Chijoke";
var thirdName = "Kingsley Chijioke"
var dayOfBirth = 22;

//Question 3
var favoriteColor = prompt("What's your favorite color?");
if (favoriteColor === "green"){
    console.log("Waoh, that's cool My favorite color is green too");
}
else{
    console.log("That's cool, my favorite color is Green");
}

//Question 4
var phrase = 'kingsley said "i haven\'t been to China" the other day.';
var phrase = "kingsley said 'i haven't been to China' the other day.";

//Question 5: 

//UNDEFINED -- IS any variable that is created in JavaScript that is not assigned a value, while; 
//Null is not the same as undefined. It signifies an intentional absence of data. But both UNDEFINED and NULL are falsey values.

//Question 6
//The NaN property represents "Not-a-Number" value. This property indicates that a value is not a legal number.
//typeof NaN:  The type of NaN , which stands for Not a Number is, surprisingly, a number.
//The reason for this is, in computing, NaN is actually technically a numeric data type. However, it is a numeric data type whose value cannot be represented using actual numbers.

//Question 7
//var thing = thing here is the variable name that is to be assigned aq value.

//                                  PART TWO EXERCISE

// 2 === "2";               = true
// 2 ==== 2;                = true
// 10 % 3 === 1;            = true
// true && false;           = false
// false || true;           = true
// true || false;           = true

//                                          PART THREE EXERCISE
//                                                  (A)
//(i)The code will console.log      = keep it up!.
//(ii)we didn't specify a true value to the if function because the variable has a true value already according to boolean expression.
//                                                  (B)

//(1) it will console.log           = third, because firstVariable and thirdVariable are same with falsey or undefined values.
//(2) undefined
//(3) not a truthy value
//(4) not a truthy value, but undefined/falsey value
//(5) yes a truthy value, because the variable value (1) is a true value according to boolean expression.

//                                          PART FOUR EXERCISE

//(1)
//(2) A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context. 
//JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.

//                                          Falsey values
// the number 0
// the BigInt 0n
// the keyword null
// the keyword undefined
// the boolean false
// the number NaN
// the empty string "" (equivalent to '' or ``)