// Time complexity(BEST) Big O(n^2)
// Time complexity(AVARAGE) Big O(n^2)
// Time complexity(WORST) Big O(n^2)
// Space conplexity O(1)

// make max 1 swap operation in outer loop on each iteration
// similar to bubble sort, but instead of first placing
// large values into sorted position, it places small values into sorted position
function SelectionSort(arr) {
    const swap = (arr, index1, index2) => {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    for(let i=0; i<arr.length; i++) {
        let minIdx = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[minIdx] > arr[j]) {
                minIdx = j;
            }
        }
        if(i !== minIdx) {
            swap(arr, minIdx, i);
        }
    }
    return arr;
}

// Driver Code
console.log(SelectionSort([2,4,1,12,1,45,-1,5,2]));