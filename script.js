// complete the given function

function palindrome(str){
	let str2=str.toLowerCase();
	let i=0;
	let j=str2.length-1;
	while(i<j){
		if(str2[i]==" "){
			i++;
		}
		if(str2[j]==" "){
			j--;
		}
		if(str2[i]!=str2[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome
