function reverseString(string){
	if (string === "") {return null;}
        var splitS = string.split("");
        var reverse = splitS.reverse();
        var joinReverse = reverse.join("")
    if (string === joinReverse) {
        return true;
    }
    else{
        return joinReverse;
    }
}
module.exports = reverseString;