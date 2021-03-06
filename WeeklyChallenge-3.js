/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * Step adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan.
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 * Output wajib berurutan mulai dari copper, silver, gold, lalu terakhir diamond.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf
 *
 * PSEUDOCODE:
 * 
 * FUNCTION checkCraft(crafts,mine)
 * BEGIN
 * 		STORE hasCraft as false
 * 		STORE indexCraft as -1
 * 
 * 		FOR each craft in crafts 
 * 			IF craft name is equal mine
 * 				SET hasCraft into true
 * 				SET indexCraft into current index loop
 * 			ENDIF
 * 		ENDFOR
 * 		
 * 		IF hasCraft is true
 * 			ADD new element into crafts
 * 		ELSE	
 * 			INCREMENT crafts element based on indexCraft value by 1 
 * 		ENDIF
 * END
 * 
 * FUNCTION craftValue (c)
 * BEGIN
 * 		CASE name of material in c
 * 			'copper': RETURN 0
 * 			'silver': RETURN 1 
 * 			'gold'  : RETURN 2 
 * 			'diamond': RETURN 3
 * END
 * 
 * 
 * FUNCTION mineCraft (mine,steps)
 * BEGIN
 * 
 * 		STORE step as 0
 * 		STORE result as empty array
 * 
 * 		FOR each m1 in mine and step is not equal steps
 * 			FOR each craft in m1 and step is not equal steps
 * 				CASE craft OF
 * 					c	: CALL checkCraft with result and 'copper'
 * 					h or s	: CALL checkCraft with result and 'silver'
 * 					g	: CALL checkCraft with result and 'gold'
 * 					d	: CALL checkCraft with result and 'diamond'
 * 				ENDCASE
 * 				
 * 				INCREMENT step by 1
 * 			ENDFOR
 * 		ENDFOR
 * 		
 * 		SORT result based on craft material value
 * 		
 * 		RETURN result
 * 
 * END	
 */
function checkCraft(crafts,mine){
	var hasCraft=false;
	var indexCraft=-1;

	for(var i=0;i<crafts.length;i++){
		var craft=crafts[i];
		if(craft[1]===mine){
			hasCraft=true;
			indexCraft=i;
		}
	}

	if(!hasCraft)
		crafts.push([1,mine]);
	else
		crafts[indexCraft][0]++;
}

function craftValue(c){
	switch(c[1]){
		case 'copper':
			return 0;
		case 'silver':
			return 1;
		case 'gold':
			return 2;
		case 'diamond':
			return 3;
	}
}

function sort(arr,callback){
	for(var i=0;i<arr.length-1;i++){
		for(var j=0;j<arr.length-i-1;j++){
			if(callback(arr[j],arr[j+1])){
				var temp=arr[j];
				arr[j]=arr[j+1];
				arr[j+1]=temp;
			}
		}
	}
}

function mineCraft(mine, steps) {
	var step=0;
	var result=[];

	for(var i=0;i<mine.length && step!==steps;i++){
		var m1=mine[i];
		for(var j=0;j<m1.length && step!==steps;j++){
			var craft=m1[j];
			switch(craft){
				case 'c':
					checkCraft(result,'copper');
				break;
				case 's':
					checkCraft(result,'silver');
				break;
				case 'g':
					checkCraft(result,'gold');
				break;
				case 'd':
					checkCraft(result,'diamond');
				break;
			}
			step++;
		}
	}

	sort(result,(a,b)=>craftValue(a)>craftValue(b))

	return result;

  
}
var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]
var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine2, 20));
// [[2, copper], [1, diamond]]
var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineCraft(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]

