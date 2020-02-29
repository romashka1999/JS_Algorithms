//  Time Complexity: O(n+k) where n is the number of elements in input array and k is the range of input.
// Auxiliary Space: O(n+k)

function CountingSort(arr) {

    let sortedArray = [];
    let maxVaueInArr = 30; // for example 30
    // to create Array wchich consists maxVaueInArr + 1 elements , with value 0
    let countingArray = Array.from({length: maxVaueInArr + 1}, () => 0);

    // Take a count array to store the count of each unique object
    for(let element of arr) {
        countingArray[element]++;
    }

    // Modify the count array such that each element at each index 
    // stores the sum of previous counts (---prefixSums---)

    for(let i=1; i<countingArray.length; i++) {
        countingArray[i] = countingArray[i] + countingArray[i-1];
    }

    // The modified count array indicates the position of each object in 
    // the output sequence.

    // Build the output character array  
    for (i = 0; arr[i]; i++) {  
        const idx = countingArray[arr[i]]-1;
        sortedArray[idx] = arr[i];  
        countingArray[arr[i]]--;  
    } 
    return sortedArray;
}

// Driver code
console.log(CountingSort([6,1,4,6,26,1,18,12]));