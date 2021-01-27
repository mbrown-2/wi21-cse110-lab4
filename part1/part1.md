## Variables & Scoping

1) **What will happen at line 11 and why?**

  On line 11, i = **prices.length** and is printed to console. i is defined with var within the for-loop and is therefore within scope of the entire function.
  
2) **What will happen at line 12 and why?**

  On line 12, the last assignment of discountedPrice is printed. Based on the for-loop, var discountedPrice is reassigned a value for every iteration. By using our input for question 4 as an example, **300** is the last price of the array, it is the last value calculated for the variable and is not overwritten. Additionally, discountedPrice is defined as var and is within scope of the entire function.

3) **What will happen at line 13 and why?**

  On line 13, the last assignment of finalPrice is inserted. Similarly to discountedPrice, the value of finalPrice is overwritten for every iteration of the loop. finalPrice is meant to round off the hundredths place of discountedPrice (to represent cents). finalPrice is also a var and is within scope of the entire function.

4) **What will the function return if we call discountPrices([100, 300, 300], .5)? Give a brief explanation.**

  The function will return [50, 100, 150]. This will be an array of all discounted prices where each price is pushed onto the array for every iteration of the loop.

--------------------------------------------

5) **What will happen at line 11 and why?**

  On line 11, an error will occur. Due to <em>var</em> being replaced as <em>let</em>, i is within a block scope in which it can only be accessed within the for-loop but not by the entire function.

6) **What will happen at line 12 and why?**

  On line 12, an error will occur. Similarly, the block scope of discountedPrice is within the for-loop but not the entire function.

7) **What will happen at line 13 and why?**

  On line 13, finalPrice will be printed to console. Although <em>var</em> is replaced, it is still defined outside of the scope of the for-loop. Hence, its block scope is the entirety of the function.
  
8) **What will the function return for discountPrices([100,200,300], .5)? Give a brief explanation.**

  The function will return [50, 100, 150]. Variables discounted and finalPrice are both defined outside of the for-loop in which their scope is the entire function.

--------------------------------------------

9) **What will happen at line 11 and why?**

  On line 11, an error will occur. i is defined by <em>let</em> in which the scope of the variable is within the for-loop only, not the entire function.

10) **What will happen at line 12 and why?**

  On line 12, the last iteration of discountedPrice from the for-loop will be returned. Although the variable is defined as const, it is technically not being re-assigned/re-declared to the same variable. For every loop, a whole new const variable is created with only the same name. We would instead have issues if const discountedPrice was defined before the for-loop in which line 6 contained "discountedPrice = ..." Here, the issue would occur since we are directly trying to re-assign a value to teh same const variable.
  
11) **What will happen at line 13 and why?**

  On line 13, the last iteration of finalPrice will be returned. For each iteration of the for-loop, the next value of the given array of prices is processed. As the loop concludes, the last element of the array is calculated for finalPrice as it is no longer re-written.

12) **What will the function return for discountPrices([100,200,300], .5)**

  The function will return [50, 100, 150]. This occurs becuase we push finalPrice to teh discounted array for every iteration of the for-loop. Take note that we are not re-writing nor re-declaring discounted as it is a const array. We are instead simply appending to the list that this constant is pointing to.
  
--------------------------------------------

## Data Types

13a) student.name

13b) student['Grad Year']

13c) student.greeting()

13d) student['Favorite Teacher'].name

13e) student.courseLoad[0]


--------------------------------------------

## Basic Operators & Type Conversion

### Arithmetic
14a) 32

14b) 1

14c) 3

14d) 3null

14e) 4

14f) 0

14g) 3undefined

14h) NaN

### Comparison
15a) true

15b) false

15c) true

15d) false

15e) false

15f) true

16) Explain the difference between the == and === operators.

These operators represent loose equality and strict equality. Loose equality converts both operands to a (even those of different types) to numbers then compares. On the other hand, strict equality immediatly returns false if both operands are of different types.

--------------------------------------------

## Conditionals

17) The conditional statement will print 'How are you?' The first statement evaluates both operands as numbers since both are of different types. The numeric representation of true is 1 in which 2 != 1. The second statement evaluates to true in which any number other than 0 will evaluate as true. This is also because false (from boolean to integer logic) evaluates as 0.

--------------------------------------------

## Loops

18) See part1-question18.js

--------------------------------------------

## Functions

19) The "callback" keyword allows our functions to synchronously call other functions withouot relying on the order of their declarations in our code.

When calling **modifyArray([1,2,3]**, doSomething), a new array is declared in which for each element of the input array, doSomething will be called. An additional function called "function(x)" is called as input for doSomething's second parameter under callback.

In other words, we execute doSomething(array[i], function(array[i] + 2)) for all elements i of the input array. Each number is therefore incremented by 2 and doubled before being pushed.

Our final answer is [6, 8, 10].

--------------------------------------------

## setInterval(), setTimeout(), clearTimeout()

20) See part1-question20.js

21) 1, 3, 2 (note that these values are logged on individual lines with 1 being the first number logged to console)
