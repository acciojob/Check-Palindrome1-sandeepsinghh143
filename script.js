// complete the given function

function palindrome(str){
	let i=0;
	let j=str.length-1;
	while(i<=j){
		if(str[i]==" "){
			i++;
		}
		if(str[j]==" "){
			j--;
		}
		if(str[i]!=str[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome
