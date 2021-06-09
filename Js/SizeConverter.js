function Convert(origin , destination, valueToConvert) {
    debugger;
    if(origin == destination){
        return 0;
    }
    if(origin == 1 && destination == 2){
        return divide(valueToConvert);
    }
    if(origin == 1 && destination == 3){
        return divide1eTo6(valueToConvert);
    }
    if(origin == 1 && destination == 4){
        return divide1eTo9(valueToConvert);
    }
    if(origin == 1 && destination == 5){
        return divide1eTo12(valueToConvert);
    }
    if(origin == 2 && destination == 1){
        return multiplication(valueToConvert);
    }
    if(origin == 2 && destination == 3){
        return divide(valueToConvert);
    }
    if(origin == 2 && destination == 4){
        return divide1eTo6(valueToConvert);
    }
    if(origin == 2 && destination == 5){
        return divide1eTo9(valueToConvert);
    }
    if(origin == 3 && destination == 1){
        return multiplication1eTo6(valueToConvert);
    }
    if(origin == 3 && destination == 2){
        return multiplication(valueToConvert);
    }
    if(origin == 3 && destination == 4){
        return divide(valueToConvert);
    }
    if(origin == 3 && destination == 5){
        return divide1eTo6(valueToConvert);
    }
    if(origin == 4 && destination == 1){
        return multiplication1eTo9(valueToConvert);
    }
    if(origin == 4 && destination == 2){
        return multiplication1eTo6(valueToConvert);
    }
    if(origin == 4 && destination == 3){
        return multiplication(valueToConvert);
    }
    if(origin == 4 && destination == 5){
        return divide(valueToConvert);
    }
    if(origin == 5 && destination == 1){
        return multiplication1eTo12(valueToConvert);
    }
    if(origin == 5 && destination == 2){
        return multiplication1eTo9(valueToConvert);
    }
    if(origin == 5 && destination == 3){
        return multiplication1eTo6(valueToConvert);
    }
    if(origin == 5 && destination == 4){
        return multiplication(valueToConvert);
    }

  }

  function divide(valueToConvert) {
    return valueToConvert / 1000;
  }

  function divide1eTo6(valueToConvert) {
    return valueToConvert / 1e+6 ;
  }

  function divide1eTo9(valueToConvert) {
    return valueToConvert / 1e+9 ;
  }

  function divide1eTo12(valueToConvert) {
    return valueToConvert / 1e+12 ;
  }

  function multiplication(valueToConvert) {
    return valueToConvert * 1000;
  }

  function multiplication1eTo6(valueToConvert) {
    return valueToConvert / 1e+6 ;
  }

  function multiplication1eTo9(valueToConvert) {
    return valueToConvert / 1e+9 ;
  }

  function multiplication1eTo12(valueToConvert) {
    return valueToConvert / 1e+12 ;
  }