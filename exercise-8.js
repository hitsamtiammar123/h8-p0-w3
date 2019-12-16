function pasanganTerbesar(num) {
    // you can only write your code here!
    var s1=0;
    var s2=2;
    var max=0;

    var num_str=num.toString();
    var curr=0;
    while(s2<=num_str.length){
        curr=Number(num_str.slice(s1,s2));
        if(curr>max)
            max=curr;
        s1++;
        s2++;
    }
    return max;
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99