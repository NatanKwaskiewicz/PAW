    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });


    function divisors(number) {
        let original = number;
        console.log("The number " + original + " is divisible by:");
        for (let i = 1; i <= number; i++) {
            if(original%i==0) {
                console.log(" " + i);
            }
        }
    }

    function toBinary(number) {
        let original = number;
        let working = number;
        let result_initial = "";
        while(working>0)
        {
            if(working%2==0)
            {
                result_initial += "0";
            }
            else result_initial += "1";

            working = Math.floor(working/=2);
        }
        let result_flipped = "";
        for(let i = result_initial.length-1; i >= 0; i--)
        {
            result_flipped += result_initial[i];
        }
        console.log("The number's " + original + " binary form is: " + result_flipped);
    }

    rl.question(`Input a number: `, answer => {
        let number = Number(answer);
        divisors(number);
        toBinary(number);
        rl.close();
    });



