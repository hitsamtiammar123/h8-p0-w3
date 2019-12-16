function targetTerdekat(arr) {
    // you can only write your code here!
    var indexO=arr.indexOf('o');
    var indexX=arr.indexOf('x');

    var r_arr=arr.reverse();


    if(indexO===-1 || indexX===-1)
        return 0;
    else{
        var indexOR=r_arr.indexOf('o');
        var indexOX=r_arr.indexOf('x');

        var r1=Math.abs(indexO-indexX);
        var r2=Math.abs(indexOR-indexOX);


        return r1<r2?r1:r2;
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2