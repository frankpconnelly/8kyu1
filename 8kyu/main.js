function lovefunc(flower1,flower2){
    if (flower1%2==0&&flower2%2!==0) {
        return true;
    }else if(flower1%2!==0&&flower2%2==0){
        return true;
    }else return false;
}

function simpleMultiplication(number) {
    if(number % 2 == 0) {
      return(number * 8)
    }else{
      return(number * 9)
  }
}
