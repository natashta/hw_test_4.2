  export default function sorted(arr) {
  
  arr.sort(function(a, b) {
    return (a.health - b.health);
  });
   let newArr = arr.reverse();
   return newArr;
  }
 
