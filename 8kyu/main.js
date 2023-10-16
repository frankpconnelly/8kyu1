/*8kyu Katas; let's do this*/

/*Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.*/

function lovefunc(flower1,flower2){
    if (flower1%2==0&&flower2%2!==0) {
        return true;
    }else if(flower1%2!==0&&flower2%2==0){
        return true;
    }else return false;
}

/*-----------------------------------------------------------------------------------------------*/

/*Multiply a given number by eight if it is an even number and by nine otherwise.*/

function simpleMultiplication(number) {
    if(number % 2 == 0) {
      return(number * 8)
    }else{
      return(number * 9)
  }
}

/*-----------------------------------------------------------------------------------------------*/

/*Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.*/

var countSheep = function (num){
  let str = "";
  for(i = 1; i <= num; i++) {str+= `${i} sheep...`}
  return str;
}

countSheep(5);

/*-----------------------------------------------------------------------------------------------*/

/*Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions

Complete the function to return his total number of goals in all three leagues.

*/

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return(laLigaGoals + copaDelReyGoals + championsLeagueGoals)
}

/*-----------------------------------------------------------------------------------------------*/

/*Is n even?*/

// function testEven(n) {
//     if(n % 2 === 0) {
//       return('true')
//     }else{
//       return('false')
//     }
// }

//The above code is a loooong way to say the exact same thing below. 
//I still need an explanation as to why the above code is not necessary. 
//It must be that the below function returns a boolean instinctively, and therefore does not necessitate a conditional.

function testEven(n) {
    return n%2===0;
}
