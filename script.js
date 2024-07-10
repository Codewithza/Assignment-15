

// 1. Write a JavaScript program to list the properties of a JavaScript object
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };
// Sample Output: name,sclass,rollno

var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  console.log(Object.keys(student).join(","));

  // Output
  // name,sclass,rollno

  

//   2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
// Sample object:
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  console.log("Before deleting rollno:");
  console.log(student);
  
// Outout
// Before deleting rollno:
//  {name: 'David Rayy', sclass: 'VI', rollno: 12}

  
  console.log("After deleting rollno:");
  console.log(student);

// Outout
 //  After deleting rollno:
//  {name: 'David Rayy', sclass: 'VI'}



//   3. Write a JavaScript program to get the length of a JavaScript object.   
// Sample object :
// var student = {
// name : "David Rayy",
// sclass : "VI",
// rollno : 12 };


var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  };
  
  console.log(Object.keys(student).length);

  
//  Output
//  3




//   4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];


var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    }
 ];
 
 library.forEach(function(book) {
   console.log(`Book: ${book.title}, Author: ${book.author}, Reading Status: ${book.readingStatus}`);
 });


 // Output
//  Book: The Road Ahead, Author: Bill Gates, Reading Status: true
// Book: Walter Isaacson, Author: Steve Jobs, Reading Status: true
// Book: Mockingjay: The Final Book of The Hunger Games, Author: Suzanne Collins, Reading Status: false



//  5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   
// Volume of a cylinder : V = πr2h
// where r is the radius and h is the height of the cylinder.


class Cylinder {
    constructor(radius, height) {
      this.radius = radius;
      this.height = height;
    }
  
    getVolume() {
      return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
  }
  
  let cylinder = new Cylinder(5, 10);
  console.log(cylinder.getVolume());

  
// Output
// 785.3982



//   6. Write a Bubble Sort algorithm in JavaScript.   
// Note : Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
// Sample Data: [6,4,0, 3,-2,1]
// Expected Output : [-2, 0, 1, 3, 4, 6]
 


function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  
  console.log(bubbleSort([6, 4, 0, 3, -2, 1]));

  // Output
  // (6) [-2, 0, 1, 3, 4, 6]


//   7. Write a JavaScript program which returns a subset of a string.   
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]
 


function getSubsets(str) {
    let subsets = [];
    for (let i = 0; i < str.length; i++) {
      for (let j = i + 1; j <= str.length; j++) {
        subsets.push(str.slice(i, j));
      }
    }
    return subsets;
  }
  
  console.log(getSubsets("dog"));

  
// Output
// (6) ['d', 'do', 'dog', 'o', 'og', 'g']




//   8. Write a JavaScript program to create a Clock.   
// Note: The output will come every second.
// Expected Console Output :
// "14:37:42"
// "14:37:43"
// "14:37:44"
// "14:37:45"
// "14:37:46"
// "14:37:47"



function startClock() {
    setInterval(() => {
      let now = new Date();
      console.log(now.toTimeString().split(' ')[0]);
    }, 1000);
  }
  
  startClock();

  // Output



//   9. Write a JavaScript program to calculate the area and perimeter of a circle.   
// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.
 


class Circle {
    constructor(radius) {
      this.radius = radius;
    }
  
    getArea() {
      return (Math.PI * Math.pow(this.radius, 2)).toFixed(4);
    }
  
    getPerimeter() {
      return (2 * Math.PI * this.radius).toFixed(4);
    }
  }
  
  let circle = new Circle(5);
  console.log(`Area: ${circle.getArea()}`);
  console.log(`Perimeter: ${circle.getPerimeter()}`);

  
// Output
// Area: 78.5398
// Perimeter: 31.4159



//   10. Write a JavaScript program to sort an array of JavaScript objects.   
// Sample Object :

// var library = [ 
//    {
//        title:  'The Road Ahead',
//        author: 'Bill Gates',
//        libraryID: 1254
//    },
//    {
//        title: 'Walter Isaacson',
//        author: 'Steve Jobs',
//        libraryID: 4264
//    },
//    {
//        title: 'Mockingjay: The Final Book of The Hunger Games',
//        author: 'Suzanne Collins',
//        libraryID: 3245
//    }];
// Expected Output:

// [[object Object] {
//   author: "Walter Isaacson",
//   libraryID: 4264,
//   title: "Steve Jobs"
// }, [object Object] {
//   author: "Suzanne Collins",
//   libraryID: 3245,
//   title: "Mockingjay: The Final Book of The Hunger Games"
// }, [object Object] {
//   author: "The Road Ahead",
//   libraryID: 1254,
//   title: "Bill Gates"
// }]
 



var library = [ 
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }
 ];
 
 library.sort((a, b) => b.libraryID - a.libraryID);
 
 console.log(library);

 // Output
//  (3) [{…}, {…}, {…}]
// 0
// : 
// {title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264}
// 1
// : 
// {title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245}
// 2
// : 
// {title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254}




 
//  11. Write a JavaScript function to print all the methods in an JavaScript object.   
// Test Data :
// console.log(all_properties(Array));
// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]



function all_properties(obj) {
    return Object.getOwnPropertyNames(obj).filter(function(property) {
      return typeof obj[property] === 'function';
    });
  }
  
  console.log(all_properties(Array));

    
// Output
  // (4) ['isArray', 'from', 'of', 'fromAsync']0: "isArray"1: "from"2: "of"3: "fromAsync"length: 4[[Prototype]]: Array(0)


//   12. Write a JavaScript function to parse an URL.   


function parseURL(url) {
    let parser = document.createElement('a');
    parser.href = url;
    return {
      protocol: parser.protocol,
      hostname: parser.hostname,
      pathname: parser.pathname,
      search: parser.search,
      hash: parser.hash,
      host: parser.host
    };
  }
  
  console.log(parseURL('http://www.example.com/path?name=John#section1'));

  
// Output
// {protocol: 'http:', hostname: 'www.example.com', pathname: '/path', search: '?name=John', hash: '#section1', …}



//   13. Write a JavaScript function to retrieve all the names of object's own and inherited properties. 


function getAllProperties(obj) {
    let properties = [];
    for (let prop in obj) {
      properties.push(prop);
    }
    return properties;
  }
  
  console.log(getAllProperties(new Date()));

  // Output
  // []length: 0[[Prototype]]: Array(0)


//   14. Write a JavaScript function to retrieve all the values of an object's properties.   
 


function getAllValues(obj) {
    return Object.values(obj);
  }
  
  console.log(getAllValues({
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  }));

  // Output
  // (3) ['David Rayy', 'VI', 12]




//   15. Write a JavaScript function to convert an object into a list of `[key, value]` pairs.   
 
 

function objectToList(obj) {
    return Object.entries(obj);
  }
  
  console.log(objectToList({
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  }));

  // Output
  // (3) [Array(2), Array(2), Array(2)]



//   16. Write a JavaScript function to get a copy of the object where the keys have become the values and the values the keys.   


function invert(obj) {
    let newObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[obj[key]] = key;
      }
    }
    return newObj;
  }
  
  console.log(invert({
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  }));

  
// Output
// {12: 'rollno', David Rayy: 'name', VI: 'sclass'}

  

// 17. Write a JavaScript function to check whether an object contains given property. 



function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
  }
  
  console.log(hasProperty({
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  }, 'name'));
  
  // true

  console.log(hasProperty({
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
  }, 'age'));
  
  // false

  // Output
 //  true
//  false