// Time complexity(BEST) Big O(n log n)
// Time complexity(AVARAGE) Big O(n log n)
// Time complexity(WORST) Big O(n log n)
// Space conplexity Big O(n)

// works by decomposing an array into smaller arrays of
// 0 or 1 elements, then building up a newly sorted array

function mergeSortedTwoArrays(arr1, arr2) {
    let sortedArray = [];
    let pointer1 = 0;
    let pointer2 = 0;
    let currentPointer = 0;
    while(currentPointer < (arr1.length + arr2.length)) {
        let isArr1Depleted = pointer1 >= arr1.length;
        let isArr2Depleted = pointer2 >= arr2.length;
        if(!isArr1Depleted && (isArr2Depleted || (arr1[pointer1] < arr2[pointer2]))) {
            sortedArray[currentPointer] = arr1[pointer1];
            pointer1++;
        } else {
            sortedArray[currentPointer] = arr2[pointer2];
            pointer2++;
        }
        currentPointer++;
    }
    return sortedArray;
}


function MergeSort(arr) {
    if(arr.length <= 1) {
        return arr;
    }
    let middle = Math.floor(arr.length/2);
    let leftArray = MergeSort(arr.slice(0, middle));
    let rightArray = MergeSort(arr.slice(middle));
    return mergeSortedTwoArrays(leftArray, rightArray);
}


// Driver Code
console.log(MergeSort([1,5,2,7,6,23,76,3]));