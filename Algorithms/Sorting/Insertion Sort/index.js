// Time complexity Big O(n^2)
// builds up the sort by gradually creating a larger
// left half which is always sorted
function InsertionSort(arr) {
    for(let i=1; i<arr.length; i++) {
        let currentValue = arr[i];
        for(var j=i-1; j>=0 && arr[j]>currentValue; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}

// Driver Code 
console.log(InsertionSort([2,5,1,3,4,-1,12,4]));