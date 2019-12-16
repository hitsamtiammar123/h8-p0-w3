function dataHandling(data){
    for(var i=0;i<data.length;i++){
        var d=data[i];
        console.log('Nomor ID: '+d[0]);
        console.log('Nama Lengkap: '+d[1]);
        console.log('TTL: '+d[2]+' '+d[3] );
        console.log('Hobi: '+d[4]);
        console.log('');
    }
}

dataHandling([
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]);