## DevTools - Debugging

![First Image](https://github.com/mbrown-2/wi21-cse110-lab4/blob/main/part3/Debugger-Pic1.png)

![Second Image](https://github.com/mbrown-2/wi21-cse110-lab4/blob/main/part3/Debugger-Pic2.png)

The bug: when retrieving variables num1 and num2, both were still String types. As a result, result was also a String upon output as the two variables would be concatenated together.

Fix: When declaring result, we use the parseInt() function for num1 and num2 to numerically convert them before adding them together. We then get the correct answer.

-----------------------------

## DevTools - Network Tab

1) JSON file name: **citylots.json**

2) File that initiated download: **part2.js:2**

3) File size: **11.7 MB (disk cache)**

4) Download time: **64 ms**

5) User-Agent: **Mozilla/5.0 (Windows NT 10.0; Win64; x64)**

6) Server type: **Apache**

7) File last modified: **Tue, 26 Jan 2021 22:14:13 GMT**

8) Content-Type: **application/json**

9) Method that initiated file request: **fetchData (from initiating file part2.js:2)**
