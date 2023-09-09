function solution(inputString) {
    const reverseString = inputString.toLowerCase().split("").reverse().join("");
    if(reverseString === inputString){
        return true;
    }
    else{
        return false;
    }  
}
