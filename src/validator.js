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
   },
  maskify:(creditCardNumber)=>{  //"1234567"//"1"
    let arraySecretNumbers = creditCardNumber.split("");
    if(arraySecretNumbers.length > 4 ){
      let positionFinal = arraySecretNumbers.length - 5; //2// 0,1,2// // [#,#,#,4,5,6,7] => "###4567"//
      //console.log(positionFinal);//
      for ( let i = 0 ; i <= positionFinal; i++ ){
          arraySecretNumbers[i]= "#";
      }
  }
    return(arraySecretNumbers.join(""));
  }
}

export default validator;
