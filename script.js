// complete the given function

function palindrome(str){
	let i=0;
	let j=str.length-1;
	while(i<=j){
		if(i==" "){
			i++;
		}
		if(j==" "){
			j--;
		}
		if(str[i]!=str[j]){
			console.log(false);
			return;
		}
		i++;
		j--;
	}
	console.log(true);
}
module.exports = palindrome
