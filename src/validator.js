const validator = {
  
  isValid:(creditCardNumber)=>{
    const arrayNumber = creditCardNumber.split("");
    let result= 0;
    for (let i = 0; i < arrayNumber.length; i ++){  
      if ( i % 2 ==0){
        if((arrayNumber[i]*2).length >1){
          let additionDig = (arrayNumber[i]*2)-9;
          result += additionDig;
        }else{
          let doubleDig = arrayNumber[i]*2;
          result += doubleDig;
        }        
      }else{
        result += arrayNumber[i];
      }
    }
    if (result % 10 == 0) {
      return true;
    }else{
      return false;
    }
   }
  /*maskify:(creditCardNumber)=>{
    

    return( creditCardNumber);
  }*/

}

export default validator;
