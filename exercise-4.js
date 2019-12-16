var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling2(input){
    //step 1
    var splicedArr=input.splice(1,4,"Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro");
    console.log(input);

    //step 2
    var splitArr=input[3].split('/');
    var m='';
    switch(Number(splitArr[1])){
        case 1:
            m='Januari';
        break;
        case 2:
            m='Februari';
        break;
        case 3:
            m='Maret';
        break;
        case 4:
            m='April';
        break;
        case 5:
            m='Mei';
        break;
        case 6:
            m='Juni';
        break;
        case 7:
            m='July';
        break;
        case 8:
            m='Agustus';
        break;
        case 9:
            m='September';
        break;
        case 10:
            m='Oktober';
        break;
        case 11:
            m='November';
        break;
        case 12:
            m='Desember';
        break;
    }
    console.log(m);

    console.log(splitArr.sort(function(a,b){
        return parseInt(a)-parseInt(b);
    }).reverse());

    console.log(splitArr.join('-'));
    console.log(input[1].slice(0,15));


}

dataHandling2(input);