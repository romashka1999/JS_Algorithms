
function makeKMPTable(pattern) {
    let table = [0];
    let leftIndex = 0; // start position
    let rightIndex = 1; // end position

    while(rightIndex < pattern.length) {
        if(pattern[leftIndex] === pattern[rightIndex]) {
            table[rightIndex] = leftIndex+1;
            rightIndex++;
            leftIndex++;
        } else if(leftIndex === 0) {
            pattern[rightIndex] = 0;
            rightIndex++;
        } else {
            leftIndex = pattern[leftIndex-1];
        }
    }
    return table;
}


function KMPSearch(str, pattern) {
    if(pattern.length === 0) {
        return 0;
    }
    let strIndex = 0;
    let patternIndex = 0;
    let KMPTable = makeKMPTable(pattern);

    while(strIndex < str.length) {
        if(str[strIndex] === pattern[patternIndex]) {
            if(patternIndex === pattern.length-1) {
                return (strIndex-pattern.length)+1;
            }
            patternIndex++;
            strIndex++;
        } else if(patternIndex > 0) {
            patternIndex = KMPTable[patternIndex-1];
        } else {
            patternIndex=0;
            strIndex++;
        }
    }
    return -1;
}


// Driver Code
console.log(KMPSearch('aqvedzeb', 'edze'));
console.log(KMPSearch("lolie lolold", "lol"));