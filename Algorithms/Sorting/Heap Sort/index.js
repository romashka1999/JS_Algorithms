// Time complexity Big O(n Log n)
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function heapRoot(arr, i, arrLength) {
    let left = 2*i+1;
    let right = 2*i+2;
    let max = i;
    if (left < arrLength && arr[left] > arr[max]) {
        max = left;
    }
    if (right < arrLength && arr[right] > arr[max])     {
        max = right;
    }
    if (max != i) {
        swap(arr, i, max);
        heapRoot(arr, max, arrLength);
    }
}

function HeapSort(arr) {
    let arrLength = arr.length;
    let i;
    for (i = Math.floor(arrLength/2); i >= 0; i --) {
        heapRoot(arr, i, arrLength);
    }
    for (i=arr.length-1; i>0; i--) {
        swap(arr, 0, i);
        arrLength--;
        heapRoot(arr, 0, arrLength);
    }
    return arr;
}

// Driver Code
console.log(HeapSort([3, 0, 2, 5, -1, 4, 1]));