function returnSet(num) {
  var array = [];
  for(var i = 0; i <= num; i++) {
    array.push(inlineFibonnaci(array));
  }
  return array;
}

function inlineFibonnaci(array) {
  var length = array.length;
  if(length === 0) {
    return 0;
  } else if (length === 1) {
    return 1;
  } else {
    return array[length - 2] + array[length - 1];
  }
}

function recursiveFibonnaci(num) {
  if(num < 0) {
    return 0;
  } else if(num === 1) {
    return 1;
  }

  return fibonnaci(num - 2) + fibonnaci(num - 1);
}
