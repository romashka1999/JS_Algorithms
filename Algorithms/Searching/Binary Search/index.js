// Time complexity Big Log(n)

function BinarySearchWIthLoop(sortedArray, val) {
    let leftIndex = 0;
    let rightIndex = sortedArray.length - 1;
    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(sortedArray[middleIndex] === val) {
            return middleIndex;
        } else if(sortedArray[middleIndex] > val) {
             rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    return -1;
}


function BinarySearchWithRecursion(sortedArray, val, leftIndex, rightIndex) {
    if(leftIndex > rightIndex) {
        return -1;
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(sortedArray[middleIndex] === val) {
        return middleIndex;
    } else if(sortedArray[middleIndex] > val) {
        return BinarySearchWithRecursion(sortedArray, val, leftIndex, middleIndex - 1);
   } else {
       return BinarySearchWithRecursion(sortedArray, val, middleIndex + 1, rightIndex);
   }
}


// Driver code
console.log(BinarySearchWIthLoop([1,2,3,4,5,6,7,23,44,123], 23));
console.log(BinarySearchWithRecursion([1,2,3,4,5,6,7,23,44,123], 23, 0, [1,2,3,4,5,6,7,23,44,123].length));