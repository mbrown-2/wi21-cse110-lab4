### Variables & Scoping

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

  On line 12, an error also occurs. Similarly to <em>let</em>, variables declared with the <em>const</em> keyword are also block scoped. In this case, we cannot retrieve discountedPrice as it is within a for-loop.
  
11) **What will happen at line 13 and why?**

  On line 13, an error will also occur. For each iteration of the for-loop, the function attempts to change the value of finalPrice despite that the variable was const and initialized as 0.

12) **What will the function return for discountPrices([100,200,300], .5)**

  The function will return an error. The for-loop attempts to push new values to the discounted array although it was originally initialized constant as an empty array. 
  
--------------------------------------------

### Data Types

13a) student.name
13b) student['Grad Year']
13c) student.greeting()
13d) student['Favorite Teacher'].name
13e) student.courseLoad[0]

--------------------------------------------

### Basic Operators & Type Conversion


