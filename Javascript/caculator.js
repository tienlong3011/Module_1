function phepCong() {
    // B1: Lấy dữ liệu
    // số thứ nhất: num1 (số nguyên)
    // số thứ hai: num2 (số nguyên)
    let num1= document.getElementById("num1").value;
    num1 = parseInt(num1);
    let num2= document.getElementById("num2").value;
    num2 = parseInt(num2);

    // B2: Tính toán
    // Kết quả: result
    // result = num1+num2
    let result = num1 + num2;
//     b3: In kết quả ra
    document.getElementById("result").innerText = result;
}