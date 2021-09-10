function randomNumber(size) {
    let array = [];
    array.length = size;
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random() * 10);
    }
    return array;
}

let arrayNumber = [];

function randomNumber1() {


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


}


function display() {
    let flag = false;
    let checkTicket = [];
    if (productList.length !== 0) {
        for (let count = 0; count < productList.length; count++) {
            checkTicket = productList[count].getTicket().split("");
            for (let i = 0; i < checkTicket.length; i++) {
                checkTicket[i] = parseInt(checkTicket[i]);
            }
            for (let i = 0; i < arrayNumber.length; i++) {
                if (check(checkTicket, arrayNumber[i]) === true) {
                   alert(  "Chúc Mừng " +productList[count].getName() + " Đã Trúng Giải " + (i + 1));
                    flag = true;
                }
            }
            if (flag === false) {
                alert( "Chúc " + productList[count].getName() + " May Mắn Lần Sau");
            }
            flag = false;
        }
    }
}


function check(arrX, arrY) {
    let number = 0;
    for (let i = arrY.length - 1; i > -1; i--) {
        if (arrX[i + (arrX.length - arrY.length)] === arrY[i]) {
            number++;
        }
    }
    if (number === arrY.length) {
        return true;
    } else {
        return false;
    }
}





