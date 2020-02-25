// Time Complexity Big O(n^2)
function NaiveStringSearch(str, pattern) {
    let searchedPatternIndexes = [];
    for(let i=0; i<str.length; i++) {
        for(let j=0; j<pattern.length; j++) {
            if(pattern[j] !== str[i+j]) {
                break;
            }
            if(j === pattern.length - 1) {
                searchedPatternIndexes.push([i, i+j]);
            }
        }
    }
    return searchedPatternIndexes;
}

// Driver Code
console.log(NaiveStringSearch('aqvedzeb', 'edze'));
console.log(NaiveStringSearch("lolie lolold", "lol"));
