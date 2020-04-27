function buyLunch(arr) {
  var length = arr.length;
  console.log(length);
  var randomNum = Math.random() * length;
  randomNum = Math.floor(randomNum);

  console.log(randomNum);
  return arr[randomNum];
}