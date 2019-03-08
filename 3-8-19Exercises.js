function addStrings(str1, str2, str3){
    let stringArray = [str1, str2, str3];
    let output = ""
    let times = str1.length
    stringArray.forEach(function (string) {
        output += string.slice(0,1);
    });
    console.log(output.repeat(times));
}
addStrings("aaa", "bbb", "ccc")

function sumZero(sortedArray) {
    const array = []
    sortedArray.forEach(function(num) {
        if (sortedArray.includes(num * -1)) {
            array.push([num, num* -1]);
        };
    });
    return array[0];
}

console.log(sumZero([-7,-3,-2,-1,0,1,2,3,4,5,6]))

// function 
// start = 0
// end = i.length-1

// elseif (sum > 0) {
//     end--;
// } else {
//     start++;
// }
// }
// return undefined;

// Create a function which accepts a sorted array and counts the unique values in an array. There can be
// negative values in the array but the array will always be sorted
// ======================================================
// O(N Linear Solution) Multiple Pointer Look Ahead
// ======================================================


function uniqueValues(sortedArray) {
    let i = 0;
    console.log(sortedArray[0]);
    // let uniqueCount = 0;
    
    // let start = 0;
    // let end = i.length 

    for (let j = 0; j <= i.length; j++); {
        if (sortedArray[i].includes(sortedArray[i+1])) {
            pass;
        } else {
            numCount += 1
        }};
    console.log(numCount)

}

let sortedArray = [-3,-2,-2,-1,0,1,2,2,2,2,3,4,4,6]
uniqueValues(sortedArray)


function DNAStrand(dna){
    newDNAString = ""
    let DNAStringSplit = dna.split("");
    DNAStringSplit.forEach(function (letter) {
    if (letter === "A") {
        newDNAString += "T";
      } else if (letter === "T") {
        newDNAString += "A"; 
      } else if (letter === "G") {
        newDNAString += "C";
      } else if (letter === "C") {
        newDNAString += "G";
      } else {
      newDNAString += letter;
    }
    });
}