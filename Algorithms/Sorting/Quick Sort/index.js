// Time complexity(BEST) Big O(n log n)
// Time complexity(AVARAGE) Big O(n log n)
// Time complexity(WORST) Big O(n^2)
// Space conplexity O(log n)

// works by selecting one element (called the "pivot")
// and finding the index where the pivot should end up
// in the sorted array

function pivot(arr, start=0, end=arr.length-1) {
    const swap = (array, index1, index2) => {
        [array[index1], array[index2]] = [array[index2], array[index1]];
    }
    // we are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIndex = start;

    for(let i=start+1; i<=end; i++) {
        if(pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    // swap the pivot from the start the swapPoint
    swap(arr, swapIndex, start);
    return swapIndex;
}

function QuickSort(arr, left=0, right=arr.length-1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
        QuickSort(arr, left, pivotIndex-1) //leftSide
        QuickSort(arr, pivotIndex+1, right) //rightSide
    }
    return arr;
}


// Driver Code
console.log(QuickSort([100,-3,2,4,6,9,1,2,5,3,23]));      

  
  

  
