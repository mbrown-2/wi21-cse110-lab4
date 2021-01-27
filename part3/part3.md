## DevTools - Debugging

![First Image](https://github.com/mbrown-2/wi21-cse110-lab4/blob/main/part3/Debugger-Pic1.png)

![Second Image](https://github.com/mbrown-2/wi21-cse110-lab4/blob/main/part3/Debugger-Pic2.png)

The bug: when retrieving variables num1 and num2, both were still String types. As a result, result was also a String upon output as the two variables would be concatenated together.

Fix: When declaring result, we use the parseInt() function for num1 and num2 to numerically convert them before adding them together. We then get the correct answer.
