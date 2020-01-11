function targetTerdekat(arr) {
    // you can only write your code here!
    var indexO=arr.indexOf('o');
    var indexX=arr.indexOf('x');
    if(indexO===-1 || indexX===-1)
        return 0;

    var indicesOfX=arr.map((v,i)=>v==='x'?i:-1).filter((v)=>v!==-1).map((v)=>Math.abs(indexO-v));
    return Math.min.apply(this,indicesOfX);
  }
  
  // TEST CASES 
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2