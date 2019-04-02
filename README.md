<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

In this project, we'll provide practice JavaScript problems to help you better understand `Arrays`.

## Setup

* `Fork` this repository.
* `Clone` your fork.
* Open `./practice.js` with your code editor.
* Open `./index.html` with your browser.

## Directions

Complete the first <b>5</b> activities inside of `./practice.js` to make the spec runner pass it's tests. In order to check the progress of the spec runner, open `./SpecRunner.html` with your browser. Remember to commit and push your code often. Good luck!

## Tips and Tricks

One of the biggest tools at the developer's disposal is the browser's built-in debugger. To use it, open `./index.html` with your browser. Another great tool for small and isolated pieces of code is <a href="http://www.pythontutor.com/visualize.html#">Pyton Tutor</a>. Just make sure to change the code to `JavaScript ES6`.

## Resources

<details>

<summary> <code> Arrays </code> </summary>

```js
// declare an empty array
let myThings = [];

// declare an array with items
let myThings = ['Bike', 7, {name: 'Jeff'}, ['Catfish']]

// Arrays have index to access the contents inside
// they start at 0 and end at the length of the array - 1

myThings.length === 4 // true

myThings[0] === 'Bike' // true

myThings[3] === ['Catfish'] // true

myThings[4] === undefined // true

// if you don't know how long an array is, you can access the last value like so

myThings[myThings.length - 1] === ['Catfish'] // true

```

</details>

<details>

<summary> <code> Array Methods </code> </summary>

```js
// Arrays have many built in methods (functions) that we can use to interact with the array and it's contents
// These method's include ways to add items, remove items, sort the array, filter values, etc.
// Each method has a value that is returned when you invoke it. Some of the methods include:
```

* [Push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
* [Pop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
* [Shift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
* [Unshift](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
* [Slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
* [Splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

</details>

<details>

<summary> <code> For Loops </code> </summary>

```js
// A for loop is a common pattern to use in JavaScript when you need to execute a block of code a certain number of times.

// This can be an arbitrary number of times, or more commonly when wanting to execute a block of code on each item in the array or searching an array. A typical for loop will look like the following:

for (var i = 0; i < 10; i++) {
  console.log(i);
}

/*
a for loop statement is comprised of 3 parts:

1. The iterator (count)
2. Condition (when should it stop looping)
3. Increment Expression (how should it add to the count?)
*/

// In the above example, we start our count at 0, loop as long as the count is less than 10 and add one to the count after each time the loop runs. This will log 0-9 to the console, respectively. You can swap the console log with any valid javascript and it will run 10 times

// You can change the values in the for statement to fit your needs, e.g.:

for (var i = 10; i > 0; i--) {
  console.log('The iterator is ' + i);
}

// In the above example we start at 10 and work our way down to 1 by decrementing the iterator

// A for loop to access array items

var myThings = ['Bike', 'Car', 'Hat'];

for (var i = 0; i < myThings.length; i++) {
  console.log(myThings[i]);
}

// In the above example we start our loop at 0 (or the first index in the array) and we loop as long as the iterator (count, i) is less than the length of myThings (remember, arrays start at 0, so the length will always be 1 larger than the last items index), add one to the iterator on each loop and look at the next item in the array. This will print 'Bike', then 'Car', then 'Hat'. 

```

</details>

<details>

<summary> <code> Nesting </code> </summary>

```js

// The following will be several examples of accessing properties in normal structured data

var users = [{name: 'Steven', age: 26, friends: ['John', 'Kate']}, {name: 'Kate', age: 27, friends: ['John', 'Steven']}];

users[0].name === 'Steven' // true
users[1].name === 'Kate' // true
users[0].friends[1] === 'Kate' // true
users[1].friends[0] === 'John' // true

var user1 = {
  name: 'John',
  age: 33,
  appearance: {
    hairColor: 'Blonde',
    eyeColor: 'Hazel',
    height: {
      onTinder: '6ft. 4in.',
      offTinder: '6ft. 1in.'
    }
  }
}

user1.name === 'John' // true
user1.appearance.hairColor === 'Blonde' // true
user1.appearance.height // { onTinder: '6ft. 4in., offTinder: '6ft. 1in.' }
user1.appearance.height.onTinder === '6ft. 4in.' // true

```

</details>

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
