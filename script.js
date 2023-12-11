//this program generates fibonnacci series for a given number of terms
//the fibonnacci series are series that consist of terms such that each term is the sum of the two terms before it



function myFibonnacci(terms){
    let arr = [0, 1];
    let i;

    if (terms <= 2){
        return arr.slice(0, count);
    }
    for (i = 2; i < terms; i++){
        arr.push(arr[i -1] + arr[i - 2]);
    }

    return arr;
}

let generatedSequence = myFibonnacci(12);
console.log(generatedSequence);