let age = +prompt('what is your age');
console.log (typeof age)

// switch(age){
//   case 10:
//     console.log('you can play the game')
//     break;
//     case 15:
//     console.log('you can see a movie')
//     break;
//     case 23:
//     console.log('you can grab a coffee')
//     break;s
//     case 30:
//     console.log('you can fuck off')
//     break;
//     default:
//     console.log('you are not involved')
// }
if (age == 10){
  console.log('you can play the game')
}
else if (age == 15){
  console.log('you see a movie')
}
else if (age == 23){
  console.log('you see a grab a coffee')
}
else if (age == 30){
  console.log('you can fuck off')
}
else{
  console.log('you are not involved')
}