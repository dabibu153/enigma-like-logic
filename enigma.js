const configGenerator = (side1, side2) => {

    const stringLen = side1.length;

    const wiringLogic = {};

    for (let i = 0; i < stringLen; i++) {

        wiringLogic[side1[i]] = side2[i];

    }

    return wiringLogic;

};

const leftrotate = (str, d) => {
    let ans = str.substring(d, str.length) +
        str.substring(0, d);
    return ans;
}

const original = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let routerA = "DMTWSILRUYQNKFEJCAZBPGXOHV";

let routerB = "HQZGPJTMOBLNCIFDYAWVEUSRKX";

let routerC = "UQNTLSZFMREHDPXKIBVYGJCWOA";

const reflector = "EJMZALYXVBWFCRQUONTSPIKHGD";

const plugBoard = "FMREHDPXKIBVYGJCWOAUQNTLSZ"

/*
add text to be encrypted below.

to decrypt a encryption, put the encrypted text back in below const and run the script again
*/

const originalText = "";

let cypherText = "";

const stepCounters = { c1: 0, c2: 0 };

for (const alp of originalText) {

    const wiring1 = configGenerator(original, routerA);
    const wiring2 = configGenerator(original, routerB);
    const wiring3 = configGenerator(original, routerC);
    const wiring4 = configGenerator(original, reflector);
    const wiring5 = configGenerator(routerC, original);
    const wiring6 = configGenerator(routerB, original);
    const wiring7 = configGenerator(routerA, original);

    const plugBoardConfig = configGenerator(original, plugBoard);
    const plugBoardConfigRev = configGenerator(plugBoard, original);

    cypherText += plugBoardConfigRev[wiring7[wiring6[wiring5[wiring4[wiring3[wiring2[wiring1[plugBoardConfig[alp]]]]]]]]];

    stepCounters.c1 += 1;

    routerA = leftrotate(routerA, 1);

    if (stepCounters.c1 === 25) {
        stepCounters.c1 = 0;
        stepCounters.c2 += 1;
        routerB = leftrotate(routerB, 1);
    };

    if (stepCounters.c2 === 25) {
        stepCounters.c2 = 0;
        routerC = leftrotate(routerC, 1);
    }

};

console.log(cypherText);
