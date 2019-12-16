function isPalindrome(num){
    var p=num.toString();
    var r='';
    for(var i=p.length-1;i>=0;i--)
        r+=p[i];
    
    var p_num=Number(r);
    if(p_num===num)
        return true;
    else
        return false;
    
}

function angkaPalindrome(num) {
    // you can only write your code here!
    num=num+1;
    while(!isPalindrome(num))
        num++;   
    return num;
    
  }
  
  // TEST CASES
  console.log(angkaPalindrome(8)); // 9
  console.log(angkaPalindrome(10)); // 11
  console.log(angkaPalindrome(117)); // 121
  console.log(angkaPalindrome(175)); // 181
  console.log(angkaPalindrome(1000)); // 1001