getDigitsSum(1)
printAnanas()
reverse("45122.45")

function getDigitsSum(value) {
    value,
        sum = 0;
    count = 0;
    let str = "Your number less then 10";
    if (value < 0) value = -value;

    while (value) {
        sum += value % 10;
        count++;
        value = Math.floor(value / 10);
        sum = Math.round(sum)
    }
    if (count > 1)
        console.log(sum);
    else
        console.log(str);

}

function printAnanas() {
    console.log(('A' + + 'a' + 'A' + 'S').toLowerCase());
}

function reverse(number) {
    var revNumber = 0;
    while (number > 0) {
      revNumber = (revNumber * 10) + (number % 10);
      number = Math.floor(number / 10);
      revNumber = Math.round(revNumber);
    }
    console.log(revNumber);
  }
  
