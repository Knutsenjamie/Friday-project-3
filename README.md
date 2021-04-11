# _Mr. Robogers Neighborhood_


### _Friday Project 3_

##### By:
#####  _**Jamie Knutsen**_ _©2021_


## Technologies Used

* _Html_
* _CSS_
* _Visual Studio Code_
* _JavaScript_
* _jQuery_

## Description: 
This application was designed to showcase uses of arrays and looping by taking a users input, making a range of numbers with said input ending that range, and replacing 1,2,3 with "Beep","Boop", and "Won't you be my neighbor?" respectively- with exceptions kept in mind.

## Tests/Specs

### Describe: convertToNumber();
Test: "It should take a users input and convert it to a number" 
Code: convertToNumber("1")
Expected Output: 1

Test: "It should only take a users input if it is a number"
Code: convertToNumber("");
convertToNumber("Hi");
Expected Output: false;

### Describe: rangeOfNumbers ()
Test: "It should return a range of numbers after taking in user's number"
Code: rangeOfNumbers(0,13);
Expected Output: [0,1,2,3,4,5,6,7,8,9,10,11,12,13]

Test: "It should take range of numbers, then replace 1 (all digits) with "Beep"."
Code: rangeOfNumbers (0,12)
Expected Output: [0,"Beep",2,3,4,5,6,7,8,9,"Beep","Beep","Beep"]

Test: "It should take that same range of numbers, then replace 2 (all digits) with "Boop" - supersceding the rules for "Beep" when necessasry i.e. (12)"
Code: rangeOfNumbers (0,12)
Expected Output: [0,"Beep","Boop",3,4,5,6,7,8,9,"Beep","Beep","Boop"]

Test: "It should take that same range of numbers, then replace 3 (all digits) with "Won't you be my neighbor?" - supersceding the rules for "Beep" and "Boop" when necessasry i.e. (13)"
Code: rangeOfNumbers (0,13)
Expected Output: [0,"Beep","Boop","Won't you be my neighbor?",4,5,6,7,8,9,"Beep","Beep","Boop", "Won't you be my neighbor?"]


## Setup/Installation Requirements
_You can view this webpage by checking out the url:_
https://github.com/Knutsenjamie/Friday-project-3.git
1. Open terminal
2. Input these commands into terminal's command line:

* cd desktop
* Clone https://github.com/Knutsenjamie/Friday-project-3.git
* code .

## Licensing

Licensed under the [MIT License](license).

## Contact Information

_Jamie Knutsen (knutsenjamie@yahoo.com)_