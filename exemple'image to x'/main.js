const cara = 'N@#w$987543210?abc;:+=-,._             ';
const img = new Image();   
img.src = 'baset.jpg';

img.onload = function() {
	dessiner(this);
  };

  function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
  

 	var can = document.getElementById('can');
	 var div = document.getElementsByClassName("image")[0];

	var ctx = can.getContext('2d');
 
	
  function dessiner(img) {


	// let nw = img.naturalWidth;
	// let nh = img.naturalHeight;
	// let aspect = nw/nh;
	// let h = can.width / aspect;
	//can.height=h;


	ctx.drawImage(img, 0, 0,can.width,can.height);

	


  }

  
 const gray = function(e){
	const  imageData = ctx.getImageData(0,0,can.width,can.height);
	var arr = imageData.data; // getImageData is read only
	var text ='';

	for(let i = 0;i<arr.length;i=i+4){
console.log(arr.length/(can.width * 4));
		let ttl = arr[i]+arr[i+1]+arr[i+2];

		let avg = parseInt(ttl/3);

	
		arr[i] = avg;
		arr[i+1] = avg;
		arr[i+2] = avg;
		// console.log(cara[Math.floor(scale(0, 0, 255, 0,cara.length))]);
		// console.log(cara[Math.floor(scale(150, 0, 255, 0,cara.length))]);
		// console.log(cara[Math.floor(scale(254, 0, 255, 0,cara.length))]);

		let charGene = cara[Math.floor(scale(avg, 0, 255,0,(cara.length -1)))]; 


		if(charGene === " "){
			text += '&nbsp';

		}else{
			text += charGene;
		}


		let d = i / (can.width * 4) ;


		// if((d == 1 || d % 2 == 0 ) && d != 0){


		// 	text += "</br>";
	
		// }
		if((i>=(can.width * 4)) && (i%(can.width * 4) == 0) ){


			text += "</br>";
	
		}
	}

	div.innerHTML=text;

	ctx.putImageData(imageData,0,0);

	// mapping two ranges

	/*
	influence
				o = [1,2,3];
				y = o;
				delete y[0];
				y;// result: [undefined × 1, 2, 3]
				o;// result: [undefined × 1, 2, 3]
	*/

}



 	
can.addEventListener('click',gray);



