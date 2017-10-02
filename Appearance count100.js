function solve(args) {
    let numbers = args[1].split(" ").map(Number),
        searched = parseInt(args[2]);

    return(countNumber(numbers, searched));

    function countNumber(arr, number) {
        let i,
            counter = 0,
            arrLength = arr.length;

        for (i = 0; i < arrLength; i += 1) {
            if (arr[i] == number) {
                counter += 1;
            }
        }

        console.log(counter);
    }
}

const test1 = [`8`,
`28 6 21 6 -7856 73 73 -56`,
`73`];

solve(test1);
Add new changes
