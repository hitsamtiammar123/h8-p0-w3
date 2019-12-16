function groupAnimals(animals) {
    // you can only write your code here!
    var map_arr=animals.map((c) => c[0]);
    var sort_arr=Array.from(new Set(map_arr)).sort();

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