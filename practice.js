/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var arr = [10,20,30];
// Do not edit the code above.

/*
  Create a function named 'first' that is given 'arr' as an argument.
  Return the first item in the given array.
*/

//Code Here
function first(arr){
  return arr[0]
}


////////// PROBLEM 2 //////////

// Do not edit the code below.
var arr = [40,50,60];
// Do not edit the code above.

/*
  Create a function named 'last' that is given 'arr' as an argument. 
  Return the last item in the given array.
*/

//Code Here
function last(arr){
  return arr[arr.length -1]
}


////////// PROBLEM 3 //////////

// Do not edit the code below.
var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
// Do not edit the code above.

/*
  Create a function named 'looper' that is given family as it's only argument. 
  Loop through the given array and alert every item in the array.
*/

//Code Here
function looper(family){
  for (let i = 0; i < family.length; i++){
    alert(family[i])
  }
}


////////// PROBLEM 4 //////////

// Do not edit the code below.
var letters = ['A', 'B', 'C', 'D', 'E'];
// Do not edit the code above.

/*
  Write a function called reversedLooper that is given letters as it's only argument. 
  Loop backwards, starting at the end of the letters array, alerting every item in the array.
*/

//Code Here
function reversedLooper(letters){
  for (let i = letters.length -1; i >= 0; i--){
    alert(letters[i])
  }
}

////////// PROBLEM 5 //////////

// Do not edit the code below.
var nums = [1,2,3,6,22,98,45,23,22,12];
// Do not edit the code above.

/*
  Write a function named evenFinder that is given nums as it's only argument.
  Return an array that contains the even numbers from the nums array.
*/

//Code Here
function evenFinder(nums){
  let arr1 = []
  for (let i = 0; i < nums.length; i++){
    if (nums[i] % 2 === 0){
      arr1.push(nums[i])
    }
  }
  return arr1
}






/////////////////////// EXTRA PRACTICE PROBLEMS BELOW ////////////////////
////////// MOVE ONTO NEXT SECTION BEFORE WORKING ON THESE ////////////////







////////// PROBLEM 6 //////////

// Do not edit the code below.
var numbersArray = [1,2,34,54,55,34,32,11,19,17,54,66,13];
// Do not edit the code above.

/*
  Write a function called divider that is given one argument, numbersArray.
  Have divider return an array with the first item in the array being the evens array (all the even values from numbersArray)
  and the second item in the array being the odds array (all the odd values from numbersArray).
*/

//Code Here
function divider(numbersArray){
  let evenArr = []
  let oddArr = []
  for (let i = 0; i < numbersArray.length; i++){
    if (numbersArray[i] % 2 === 0){
      evenArr.push(numbersArray[i])
    } else {
      oddArr.push(numbersArray[i])
  }
}
return numbersArray = [evenArr, oddArr]
}


////////// PROBLEM 7 //////////

// Do not edit the code below.
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * 30);
};
// Do not edit the code above.

/* 
  var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
  Above you're given a function (getRandomArbitrary) that will return a random number between 0 and 30.
  There is also a commented out array full of numbers to help you visualize what your function will be receiving.
  Write a function named finder that will take in an array as an argument.
  In the function create a variable called randomNumber and set it to the invocation of getRandomArbitrary.
  Loop through the array to see if randomNumber is in the array. 
  If it is, return true, if it's not, return false
*/

//Code Here
function finder(arr){
  let randomNumber = getRandomArbitrary()
  for (let i=0; i < arr.length; i++){
    if (randomNumber === arr[i]){
      return true
    }
    } return false
  }



////////// PROBLEM 8 //////////

// Do not edit the code below.
var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];
// Do not edit the code above.

/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list and adding new items to our list.

  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the second is an item to remove from myGroceryList. 
  If the second argument (or the item to add or remove) matches an item in myGroceryList, remove that item from the your grocery list and return the new, updated grocery list.

  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list. 
  In addItem add the item you passed in to myGroceryList then return the new, updated grocery list.

  In both removeItem and addItem check to see if the 'myGroceryList' and 'item' arguments are truthy.
  If they are not, return an empty array.

  Here are some examples of calling your functions and what should be returned:
  removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
  addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
  removeItem(myGroceryList) --> [];
  addItem() --> [];
*/

//Code Here
function removeItem(myGroceryList,item){
  for (let i = 0; i < myGroceryList.length; i++){
    if (item === myGroceryList[i]){
      myGroceryList.splice(i,1)
    }
  }
  if (myGroceryList && item){
    return myGroceryList
  } else {
    return []
  }
}

function addItem(myGroceryList, item){
  myGroceryList.push(item)
  if (item && myGroceryList){
    return myGroceryList
  } else {
    return []
  }
}


////////// PROBLEM 9 //////////

/*
  Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.
*/

//Code Here
function maker(){
  let arr = []
  for (let i=1; i<=215; i++){
    arr.push(i)
  }
  return arr
}


////////// PROBLEM 10 //////////

// Do not edit the code below.
var numbers = [5, '9', 16, 19, '25', '34', 48];
// Do not edit the code above.

/*
  Write a function called addTen that is given 'numbers' as it's only argument.
  Return a new array after adding ten to each item in numbers. 
  Your output should look like this -> [15, 19, 26, 29, 35, 44, 58]
*/
  
//Code Here
function addTen(numbers){
  let newArr = []
  for (let i = 0; i < numbers.length; i++){
    newArr.push((numbers[i]*1) + 10)
  }
  return newArr
}


////////// PROBLEM 11 //////////

// Do not edit the code below.
var num1 = Math.floor(Math.random() * 30);
var num2 = Math.floor(Math.random() * 30);
var arr1 = [];
var arr2 = [];
for(var i = 0; i < num1; i++){
  arr1.push(i);
}
for(var i = 0; i < num2; i++){
  arr2.push(i);
}
// Do not edit the code above.

/*
  Above is some code that adds a random number of values to both arr1 and arr2.
  Write a function called 'longer' that is given arr1 and arr2 as it's only arguments. 
  Return the longer of the two arrays.
*/

//Code Here
function longer(arr1, arr2){
  if (arr1.length > arr2.length){
    return arr1
  } else {
    return arr2
  }
}


/*
  As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).
  'both' should return a new array with the matching numbers found in both arr1 and arr2.

  Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

//Code Here
function both(arr1, arr2){
  newArray = []
  for (let i = 0; i < arr1.length; i++){
    for (let j = 0; j < arr2.length; j++){
      if (arr1[i] === arr2[j]){
        newArray.push(arr1[i])
      }
    }
  } return newArray 
}


////////// PROBLEM 12 //////////

// Do not edit the code below.
var devMountainEmployees = [];

var joe = {
    name: 'Joe',
    position: 'Instructor',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};
// Do not edit the code above.

/*
  Above you're given an empty array and four variables containing objects. 
  Fill the devMountainEmployees array with those four objects. 
  After that console.log the length of the Array and make sure that it's equal to 4. 
*/

//Code Here
devMountainEmployees.push(joe, cahlan, ryan, colt)
console.log(devMountainEmployees.length)


/*
  Now let's say Cahlan has to take a leave of absence.
  Loop through your devMountainEmployees until you find cahlan, then remove him from the array.
*/

//Code Here
function removeCah(devMountainEmployees){
  for (let i = 0; i < devMountainEmployees.length; i++){
  for (let j = 0; j < 4; j++){
    if (devMountainEmployees.name[j]==='Cahlan'){
      devMountainEmployees.splice(i,1)
    }
  }
  }
}


////////// PROBLEM 13 //////////


/*
  A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects) of data is to have an array full of objects. 
  Create an empty array called users.
*/

//Code Here
let users = []


/*
  Now add three user objects to your users array. Each user object should contain the following properties. name, email, password, username.

  Include the following user1 object as one of the objects in your array.
*/

// Do not edit the code below.
var user1 = {
    name: 'Mark McIver',
    email: 'mark.mciver@devmounta.in',
    password: 'hunter2',
    username: 'ihazcode'
};
// Do not edit the code above.

//Code Here
var user2 = {
  name: 'Mark McIver',
  email: 'mark.mciver@devmounta.in',
  password: 'hunter2',
  username: 'ihazcode'
};
var user3 = {
  name: 'Mark McIver',
  email: 'mark.mciver@devmounta.in',
  password: 'hunter2',
  username: 'ihazcode'
};

users.push(user1, user2, user3)

/*
  Now you have a very common data structure. 
  Twitter is a good use case.
  It's easy to imagine that your followers list on Twitter is an array full of objects and those objects contain properties about the specific person you follow.

  Now let's say that Mark decided to delete his account.
  Loop through your array of objects until you find Mark's account (use his email, mark.mciver@devmounta.in, to find him).
  Once you find the array index he's located in, delete him from the array.
*/

//Code Here



/*
  The activity we just did is very much how data works in 'the real world'.
*/
