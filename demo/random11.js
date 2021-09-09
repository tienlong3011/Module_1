function randomNumber(size) {
    let array = [];
    array.length = size;
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 10);
    }
    return array;
}
// let index = 0

let arrayNumber = [];

function randomNumber1() {

    let checkTicket = productList[0].getTicket()

    let specialPrize = randomNumber(5);
    document.getElementById('specialPrize').innerHTML = specialPrize.join('');

    let firstPrize = randomNumber(5);
    document.getElementById('firstPrize').innerHTML = firstPrize.join('');

    let secondPrize1 = randomNumber(4);
    document.getElementById('secondPrize1').innerHTML = secondPrize1.join('');

    let secondPrize2 = randomNumber(4);
    document.getElementById('secondPrize2').innerHTML = secondPrize2.join('');

    let thirdPrize1 = randomNumber(4);
    document.getElementById('thirdPrize1').innerHTML = thirdPrize1.join('');

    let thirdPrize2 = randomNumber(4);
    document.getElementById('thirdPrize2').innerHTML = thirdPrize2.join('');

    let thirdPrize3 = randomNumber(4);
    document.getElementById('thirdPrize3').innerHTML = thirdPrize3.join('');

    let fourPrize1 = randomNumber(3);
    document.getElementById('fourPrize1').innerHTML = fourPrize1.join('');

    let fourPrize2 = randomNumber(3);
    document.getElementById('fourPrize2').innerHTML = fourPrize2.join('');

    let fourPrize3 = randomNumber(3);
    document.getElementById('fourPrize3').innerHTML = fourPrize3.join('');

    let fourPrize4 = randomNumber(3);
    document.getElementById('fourPrize4').innerHTML = fourPrize4.join('');

    let fifPrize1 = randomNumber(2);
    document.getElementById('fifPrize1').innerHTML = fifPrize1.join('');

    let fifPrize2 = randomNumber(2);
    document.getElementById('fifPrize2').innerHTML = fifPrize2.join('');

    let fifPrize3 = randomNumber(2);
    document.getElementById('fifPrize3').innerHTML = fifPrize3.join('');

    let fifPrize4 = randomNumber(2);
    document.getElementById('fifPrize4').innerHTML = fifPrize4.join('');

    //push phần tử random vào mảng
    arrayNumber = [];
    arrayNumber.push(specialPrize);
    arrayNumber.push(firstPrize);
    arrayNumber.push(secondPrize1);
    arrayNumber.push(secondPrize2);
    arrayNumber.push(thirdPrize1);
    arrayNumber.push(thirdPrize2);
    arrayNumber.push(thirdPrize3);
    arrayNumber.push(fourPrize1);
    arrayNumber.push(fourPrize2);
    arrayNumber.push(fourPrize3);
    arrayNumber.push(fourPrize4);
    arrayNumber.push(fifPrize1);
    arrayNumber.push(fifPrize2);
    arrayNumber.push(fifPrize3);
    arrayNumber.push(fifPrize4);

    let a = fifPrize4.toString()
    let a1 = fifPrize1.toString()
    let a2 = fifPrize2.toString()
    let a3 = fifPrize3.toString()
    let b = checkTicket.toString().replaceAll(',','')
    // a.replaceAll(',','')
    console.log(a.replaceAll(',',''))
    console.log(checkTicket)
    let c = b.slice(3,5);
    console.log(b)
    console.log(c)
    if(c === a || c===a1|| c===a2||c===a3){
        alert("trúng giải")
    }
}

function display() {
    let checkTicket = productList[index].getTicket().split('');
    for (let i = 0; i < arrayNumber.length - 1; i++) {
        if (check(checkTicket, arrayNumber[i]) === true) {
            alert("bạn đã trúng giải" + (i + 1))
        }
    }
}


function check(arrX, arrY) {
    let number = 0;
    for (let i = arrY.length - 1; i > -1; i--) {
        if (arrX[i] === arrY[i]) {
            number++;
        }
    }
    return number !== 0 && number >= 2;
}

// return number
// }
// let ticketS = [];
// function getTicket(){
//     for (let i = 0; i < productList.length-1; i++) {
//         ticketS.push(productList[i].getTicket())
//     }
// }

