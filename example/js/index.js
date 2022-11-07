/**
 * 1. Ta fram ett paket bröd - 1s
 * 2. Rosta brödet - 2s
 * 3. Bred på smör - 1.5s
 * 4. Lägga på ost - 1s
 */

function getBread() {
    const getBread = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Hämtat bröd');
        }, 1000); // 1000 ms = 1s
    });

    return getBread;
}

function toastBread() {
    const toastBread = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Bröd rostat');
        }, 2000);
    });

    return toastBread;
}

function butterBread() {
    const butterBread = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Bröd smörat');
        }, 1500);
    });

    return butterBread;
}

function applyCheese() {
    const applyCheese = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Lagt på ost');
        }, 1000);
    });

    return applyCheese;
}

// getBread.then((result) => {
//     console.log(result);

//     toastBread.then((result) => {
//         console.log(result);

//         butterBread.then((result) => {
//             console.log(result);

//             applyCheese.then((result) => {
//                 console.log(result);
//             });
//         });
//     });
// });

async function makeBreakfast() {
    const bread = await getBread();
    console.log(bread);
    const toast = await toastBread();
    console.log(toast);
    const butter = await butterBread();
    console.log(butter);
    const cheese = await applyCheese();
    console.log(cheese);
}

makeBreakfast();