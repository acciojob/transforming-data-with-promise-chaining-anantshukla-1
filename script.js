//your JS code here. If required.
document.getElementById('btn').onclick = function(){
	let number = Number(document.getElementById('ip').value);

	let firstPromise = new Promise((resolve, reject) =>{
		setTimeout(()=>{
			document.getElementById('output').innerHTML = "Result: " + number;
			resolve(number);
		},2000);
		
	});
	firstPromise
	  .then((result)=>{
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{	
			let mlty = result * 2;
			document.getElementById('output').innerHTML = "Result: " + mlty;	
			resolve(mlty);
		},2000)
		});
	})
	.then((result)=>{
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{	
			let sub = result - 3 ;
			document.getElementById('output').innerHTML = "Result: " + sub;	
			resolve(sub);
		},1000)
		});
	})
	.then((result)=>{
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{	
			let divd = result / 2 ;
			document.getElementById('output').innerHTML = "Result: " + divd;	
			resolve(divd);
		},1000);
		});
	})
	.then((result)=>{
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{	
			let add = result + 10 ;
			document.getElementById('output').innerHTML = "Final Result: " + add;	
			resolve(add);
		},1000)
		});
	})
}