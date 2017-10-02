function solve(args) {
    let numbers = args[1].split(' ').map(Number);

    console.log(sortDescending(numbers).reverse().join(' '));


    function sortDescending(arr) {
        let length = arr.length,
            max,
            maxIndex,
            temp;

        for (let i = 0; i < length; i+=1) {
            max = GetMax(i, arr);
            maxIndex = arr.indexOf(max, i);
            temp = arr[i];
            arr[i] = max;
            arr[maxIndex] = temp;
        }

        return arr;
    }

    function GetMax(index, arr) {
        let length = arr.length,
            max = arr[index];

        for (let i = index; i < length; i+=1) {
            if (max < arr[i]) {
                max = arr[i];
            }
        }

        return max;
    }
}

const test1 = [`6`,
`3 4 1 5 2 6`];

const test2 = [`10`,
`36 10 1 34 28 38 31 27 30 20`];

solve(test1);
solve(test2);
