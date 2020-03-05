// ფენვიკის ხე (ორობითი ინდექს-ხე): ამოცანის დასმა:
// ვთქვათ, მოცემულია n ცალი რიცხვისაგან შედგენილი მიმდევრობა
// 1.) გავზარდოთ i-ური წევრის მნიშვნელობა.
// 2.) შეკითხვა: დავადგინოთ ელემენტთა ჯამის მნიშვნელობა [k,j] ინტერვალში

// ფენვიკის ხე ეფუძნება იმ ფაქტს, რომ ნებისმიერი რიცხვი შეიძლება წარმოვადგინოთ 2-ის ხარისხების ჯამით. 
// მაგ: 13 = 8 + 4 +1
// ( idx & -idx ) --- მარჯვნიდან პირველი ერთიანი ორობითში ანუ ყველაზე დაბალი ორის ხარისხი

// როგორც განახლების ასევე შეკითხვის დამუშავების დროა O (log n)
class FenwickTree {

    constructor(arr) {
        this.tree = new Array(arr.length+1).fill(0);
        this.makeTree(arr);
    }

    makeTree(arr) {
        for(let i=0; i<arr.length; i++) {
            this.update(i+1, arr[i]);
        }
    }

    change(index, value) {
        const changedValue = this.tree[index] - value;
        this.update(index, changedValue);
    }

    update(index, value) {
        while(index < this.tree.length) {
            this.tree[index] += value;
            index += (index & -index);
        }
    }

    getSumFromBeginningToIndex(index) {
        if(index < 1 || index >= this.tree.length) {
            return 'index is out of tree bound';
        }
        let sum = 0;
        while(index > 0) {
            sum += this.tree[index];
            index -= (index & -index);
        }
        return sum;
    }

    getSumRange(leftIndex, rightIndex) {
        if(leftIndex > rightIndex) {
            return 'leftIndex must be <= rightIndex';
        }
        return this.getSumFromBeginningToIndex(rightIndex) - this.getSumFromBeginningToIndex(leftIndex-1);
    }
}


// Driver Code
const arr = [1,5,1,23,1,2,5,2];
const tree = new FenwickTree(arr);
console.log(tree.getSumRange(2,4));
