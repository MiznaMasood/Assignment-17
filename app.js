//  Chap 14 - 16

//  Q1

var studentNames = [];

// Q2

var colorsName = ["red" ,"blue" ,"green"];

// Q3

// var number = [1,2,3,4,5];

// // Q4

// var bool = [true, false];

// // Q5

// var mixedArray = ["Red" ,1 , true];

// // Q6

// var qualification = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil", "PhD" ];

// document.write( "<h2> Qualifications </h2>");
// document.write("<ul>")
//  for(var i=0; i < qualification.length ; i++){
//       document.write("<li>" + qualification[i] + "</li>")
//  }
//  document.write("</ul>");

//  Q7

var studentNames = ["Michael", "Jhon", "Tony"];
var score = [320 , 230 , 480];
var totalMarks = 500;
document.write("Score of " + studentNames[0] +  " is " + score[0] + "percentage " + (score[0] / totalMarks) * 100 + "% <br>" );

document.write("Score of " + studentNames[1] + " is " + score[1] + "percentage " + (score[1] / totalMarks) * 100 + "% <br>" );

document.write("Score of " + studentNames[2] + " is " + score[2] + "percentage " + (score[2] / totalMarks) * 100 + "% <br>" );


// Q8

// var colors = ["Red", "Orange", "Yellow", "Green", "Pink"];

// document.write("<h2> Original Colors Names </h2>")
// displayColors(colors);

// // Part a

// var userColorBegin = prompt("Enter a color to add the begining of array")
// colors.unshift(userColorBegin);
// document.write("<h2> Updated array after adding to beginning")
// displayColors(colors);

// // part b

// var userColorEnd = prompt("Enter a color to add the end of array")
// colors.push(userColorEnd);
// document.write("Updated array after adding to to end")
// displayColors(colors)

// // part c

// colors.unshift("purple", "black");
// document.write("<h2> Updated array after adding two more colors");
// displayColors(colors);

// // part d

// colors.shift();
// document.write("Updated array after deleting the first color")
// displayColors(colors);

// // part e

// colors.pop();
// document.write("<h2> Updated array after deleting the last color </h2> ");
// displayColors(colors);

// // part f

// var indexToAdd = prompt("Enter the index to add a color: ");
// var colorToAdd = prompt("Enter color name to add");
// colors.splice(indexToAdd, 0 , colorToAdd);
// document.write("<h2> Updated Array after Adding Color at User-defined Index:</h2>");
// displayColors(colors)

// // part g

// var indexToDelete = prompt("Enter the index to delete a color:")
// var delColors = prompt("Enter the number of colors to delete ")
// colors.splice(indexToDelete, 0, delColors);
// document.write("<h2> Updated array after deleting colors </h2>")
// displayColors(colors);


// function displayColors(array){
//      document.write("<ul>")
//      for(var i = 0; i < array.length ; i++){
//           document.write("<li>" + array[i] + "</li>");
//      }
//      document.write("</ul>")
// // }

// // Q10

// var studentScores = [320, 230, 480, 120]
// document.write("Scores of Students : " + studentScores + "<br>")
// studentScores.sort();
// document.write( "Ordered Scores of students : "+ studentScores + "<br> <br>")

// // Q11

// var cityNames = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]



// document.write("Cities list" +"<br>" + cityNames + "<br>")

// var selectedcities = cityNames.slice(2,4);

// document.write("Selected cities list : " +"<br>"+ selectedcities +"<br> <br>" );

// // Q12

// var arr = ["This", "is", "my", "cat" ]
// document.write("<h3> Array : </h3> "+   arr)

// var a = arr.join(" ");
// document.write("<br> <h3> String : </h3> " + a + "<br> <br>");

// // Q13

// var array = ["keyboard" , "mouse", "printer", "monitor"]
// document.write("<h3> Devices : </h3> " + array)


// for(var i = 0; i < 4; i++){
//      document.write("<h3> Out : </h3>"+array [i] + "<br>")
// }

// // Q14

// // var array = ["keyboard" , "mouse", "printer", "monitor"]
// // document.write("<h3> Devices : </h3> " + array)
// // for(var i = 0; i < 4; i++){
// //      document.write("<h3> Out : </h3>"+array [i] + "<br>")
// // }


// // Chap  17-20

// // Q1

// var multiArray = [];

// // Q2



// // Q3

// for (var i = 1; i < 11; i++){
//      document.write(i+ "<br> <br>")
// }

// // Q4 

// var number = +prompt("Enter a number")
// var range = +prompt("Enter range")

// for(var i = 1; i <= range; i++){
//      document.write(number + "x" + i + "=" + number * i + "<br> <br>")
// }

// // Q5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(var i = 0; i < fruits.length; i++){
//      document.write(fruits[i] + "<br> <br>")
// }

// // Q6

var number1 = 0
var range1 = 15
document.write("<h4> Counting </h4>")

for(var i = 1; i <= range1; i++){
     document.write((number1 + i) + ", " )
}

document.write("<br>")
var number2 = 10;
document.write("<h4> Reverse counting </h4> ")
for(var i = 10; i >= 1; i--){
     document.write(i);
     if(i > 1){
        document.write(", ")
     }

}

document.write("<br> <h4> " + "Even Counting : " + "<br> </h4>" )

for(var i = 0; i <= 20; i += 2){
    document.write(i + ", ");
    
}

document.write("<br> <h4> " + "Odd Number : " + "<br> </h4> ")

for(var i = 1; i <= 20 ; i += 2){
    document.write(i + ", ")
}
document.write("<br> <br>")




// // Q7

// var bakeryItem = prompt("Welcome to ABC Bakery.What do you want to order?")

// // var updateInput = bakeryItem.toLowerCase();


// var a = ["cake", "apple pie", "cookie", "chips", "patties" ];

// var flag = "false"

// for(var i = 0; i < bakeryItem.length; i++){
//      if(bakeryItem === a[i]){
//           flag = "true";
//           document.write(bakeryItem + " is available in our bakery ")
//      }
// }
// if(flag === "false"){
//      document.write("we are sorry. "  + bakeryItem + " is not available in our bakery.")
// }

// // Q8

// var A = [24, 53, 78, 91, 12]
// var largest = 0;
// document.write(  "<br> <br>"+ "Array items : " + A + "<br>" )

// for(var i = 1 ; i < A.length; i++){
//      if(A[i] > largest){
//        largest = A[i]
//      }
// }
// document.write("The largest number is " + largest)

// // Q9

// var A = [24, 53, 78, 91, 12]
// var smallest = A[0];

// document.write(  "<br> <br>"+ "Array items : " + A + "<br>" )

// for(var i = 1 ; i < A.length; i++){
//      if(A[i] < smallest){
//        smallest = A[i]
//      }
// }
// document.write("The smallest number is " + smallest + "<br> <br>")

// // Q10

// for(var i = 1; i <= 100; i++){
//      if(i % 5 === 0){
//      document.write( i + ", ")}
//  }

// ______________________________________

// Chap 14-20

// Q2


// if(a === 1){
//      if(c === "Max"){
//           alert("OK")
//      }
// }

// Q3




// if(a === 1 && c === "Max"){
//      alert("OK")
// }

// Q4


// var num1 = 10;
// var num2 = 10;


// if (num1 === num2) {
//     if (num1 <= num2) {
        
//         alert("The first variable equals the second variable.");
//     }
// }


// // ______________________

// // Chap 15

// // Q1

// var array = [];

// // Q2

// var array1 = ["Cake"];

// // Q3

// var alphabet = ["h", "i", "j", "k"]

// alert(alphabet[2])

// // Q4

// var alphabet1 = ["h", "i", "j", "k", "l", "m", "n", "o"]

// alert(alphabet1.length)


// // Q5

// var array2 = ["blue"];

// array2.push("purple")


// alert(array2[1])

// // _____________________

// // Chap 16

// // Q1

// var array3 = ["cat"]

// array3.push("dog")


// alert(array3[1])


// // Q2

// var alphabet2 = ["h", "i", "j", "k"];

// alphabet2.pop()

// alert(alphabet2)

// // Q3

// var alphabet3 = ["h", "i", "j", "k"];

// alphabet3.push("5")

// alert(alphabet3)


// // Chap 16 (Array |||)

// // Q1

// var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// sizes.shift();

// alert(sizes);

// // Q2

// var sizes1 = ["S", "M", "XL", "XXL", "XXXL"];

// sizes1.unshift("5", "10", "15")


// alert(sizes1)

// // Q3

// var element = ["bear"]

// element.unshift("tiger")

// alert(element[0]);

// // Q4

// var sizes2 = ["S", "M", "XL", "XXL", "XXXL"];

// sizes2.splice(2 , 0, "L" )

// alert(sizes2)

// // Q5

// var sizes3 = ["S", "M", "XL", "XXL", "XXXL"];

// var regSizes = sizes3.slice(0,3);

// console.log(sizes3);

// // Q6

// var pets = ["dog", "cat", "ox", "duck", "frog"];

// pets.splice(1,3, "bear", "lion")

// alert(pets);

// // Q7

// var pets1 = ["dog", "cat", "ox", "duck", "frog"];

// pets1.splice(1,2)

// alert(pets1);

// // Q8

// var pets2 = ["dog", "cat", "ox", "duck", "frog", "flea"];

// var reducedPets = pets2.slice(3,5);

// console.log(reducedPets);

// // ____________________________

// // Q17 - 20

// // Q1

// for(var i = 0; i < 11 ; i++){
//     document.write(i+ "<br>")
// }

// // Q2

// for(var i = 1; i < 13 ; i++){
//     document.write()
// }



// // Q3

// for(var i = 0; i <= 4 ; i++){
//     document.write()
// }

// // Q4

// for(var count = 1; count < 101; count++ ){
//      document.write("count"+ count+  "<br>")
// }

// // Q5

// for(var i = 3; i > 0; i--){
//     document.write(i  + "<br>")
// }

// // Q6

// var myArray = [10, 11, 12, 13, 14, 15]

// console.log(myArray.length);

// // Q7

// var flag = ["true"];

// // Q8

// for(var i = 0; i < pets.length; i++){
//     console.log(i)
// }
// // Q9

// for(var i = 1; i <= 10; i++){
//     if(i === 2){
//         alert(i - 1);
//         break;
//     }
// }

// Q10

// var userNames = ["Jhon", "Alice", "Bob", "Emma"];

// var firstName = prompt()

// var nameFound = false;

// for(var i = 0; i < userNames.length; i++ ){
//     if(firstName === userNames[i]){
//         nameFound = true;
//         break;
//     }
// }
// if(nameFound){
//     alert("Enter")
// }
// else{
//     alert("please write correct user name")
// }






// Q11
var list = ["ABC", "DEF", "GHI", "JKL", "MNO"]
var matchFound = "false";
var userInput = +prompt()

for(var i = 0; i < list.length; i++ ){
    if(userInput === list[i]){
        alert("Match found")
          matchFound = "true"; break;

    }
}

if(!matchFound){
    alert("Not Found ")
}

// Q12

var firstArr = ["a", "b", "c", "d", "e", "f"];
var secondArr = ["1", "2", "3", "4", "5","6"];

for(var i = 1; i < firstArr.length; i++){
    for (var j = 0; j < secondArr.length; j++){
        document.write(firstArr[i] + secondArr[j] + "<br>")
    }
}

