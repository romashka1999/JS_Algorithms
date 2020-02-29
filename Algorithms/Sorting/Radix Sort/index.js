// Time complexity(BEST) Big O(nk)
// Time complexity(AVARAGE) Big O(nk)
// Time complexity(WORST) Big O(nk)
// Space conplexity O(n+k)

// radix sort is a special sorting algorithm that works on lists of numbers.
// it never makes comparisons between elements.
// it exploits the fact that information about the size of a number is encoded in the number of digits.
function RadixSort(numbersArr) {
    const getDigitByPosition = (number, positionFromRight) => { // for example: getDigitByPosition(234, 0) returns --- 4
        return Math.floor(Math.abs(number) / Math.pow(10, positionFromRight)) % 10;
    }

    const getNumberDigitCount = (number) => { // for example: getDigitLength(234) returns --- 3
        if(number === 0) {
            return 1;
        }
        return Math.floor(Math.log10(Math.abs(number))) + 1;
    }

    const getMaxDigits = (numbers) => { // for example: getMaxDigits([23,345,12345,23,1]) returns --- 5
        let maxDigits = 0;
        for(let i = 0; i < numbers.length; i++) {
            maxDigits = Math.max(maxDigits, getNumberDigitCount(numbers[i]));
        }
        return maxDigits;
    }
    let negativeIntegerExists = false;
    let maxDigitCount = getMaxDigits(numbersArr);
    for(let i=0; i<maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => []); // to create Array wchich consists 10 arrays
        for(let j=0; j < numbersArr.length; j++) {
            if(numbersArr[j] < 0) {
                negativeIntegerExists = true;
            }
            const digitBucketIndex = getDigitByPosition(numbersArr[j], i);
            digitBuckets[digitBucketIndex].push(numbersArr[j]);
        }
        numbersArr = [].concat(...digitBuckets);
    }
    if(negativeIntegerExists) {
        const positiveNumbers = [];
        const negativeNumbers = [];
        for(let number of numbersArr) {
            console.log(number);
            if(number >= 0) {
                positiveNumbers.push(number);
            } else {
                negativeNumbers.push(number)
            }
        }
        negativeNumbers.reverse();
        numbersArr = negativeNumbers.concat(positiveNumbers);
    }
    return numbersArr;
}



// Driver Code
console.log(RadixSort([1,5,-2,3,5,-456,21,0,23,7,2]));