function unique(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        var c1=arr[i];
        var counter=0
        for(var j=0;j<arr.length && j!==i;j++){
            var c2=arr[j];
            if(c1==c2)
                counter++;
        }
        if(counter===0)
            newArr.push(c1);
    }
    return newArr;
}

function groupAnimals(animals) {
    // you can only write your code here!
    var map_arr=animals.map((c) => c[0]);
    var sort_arr=unique(map_arr).sort();

    var result=[];
    for(var i=0;i<sort_arr.length;i++){
        var r=animals.filter((curr) => curr[0]===sort_arr[i]);
        result.push(r);
    }
    return result;
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]