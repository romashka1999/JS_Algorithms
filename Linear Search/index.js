// Time complexity Big O(n)
function LinearSearch(arr, val) {
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === val) {
            return i;
        }
    }
    return -1;
}

// Driver code
console.log(LinearSearch([1,3,1,6,89,2], 3));

// Javascript Built in Linear Search
// arr.indexOf(val)  --- returns index, if not exists returns -1
// arr.includes(val)  --- returns boolean
