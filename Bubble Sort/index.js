// Time complexity Big O(n^2)
// make many swap operations
// a sorting algorithm ,where the largest values bubble up to the top!
function BubbleSort(arr) {
    let noSwaps; // add nosWaps variable to ptimization
    const swap = (arr, index1, index2) => {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
    }
    for(let i=arr.length; i>0; i--) {
        noSwaps = true;
        for(let j=0; j<i-1; j++) {
            if(arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if(noSwaps) {
            break; //avoid inane loop iteration, when array is already sorted
        }
    }
    return arr;
}


// Driver Code
console.log(BubbleSort([23,1,5,1,2,7,2,51,23,-2]));


