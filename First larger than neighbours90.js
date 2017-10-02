function solve(args) {
    let numbers = args[1].split(" ").map(Number);

    console.log(FirstLargerPos(numbers));

    function FirstLargerPos(arr) {
        let arrLength = arr.length,
            result=-1;

        for (i = 1; i < arrLength-1; i+=1) {
            if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
                result = i;
                break;
            }
        }

      return result;
    }
}

const test1 = [`6`,
`-26 -25 -28 31 2 27`];

solve(test1);
