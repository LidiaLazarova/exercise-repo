function solve(args) {

    console.log(ToWord(args));

    function ToWord(num) {

        if (num < 10) {
            digit = num;
        }
        else {
            digit = num % 10;
        }
        switch (digit) {
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            case 4: return "four";
            case 5: return "five";
            case 6: return "six";
            case 7: return "seven";
            case 8: return "eight";
            case 9: return "nine";
            case 0: return "zero";
            default: return "Not a digit";
        }
    }
}

const test1 = [`42`];

solve(test1);
