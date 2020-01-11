function filter(arr){
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

console.log(filter(['bola','baju','baju','sepatu']));