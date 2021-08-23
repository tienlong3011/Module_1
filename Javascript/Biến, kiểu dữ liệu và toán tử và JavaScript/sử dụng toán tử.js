function bt() {
    let inputWidth;
    let inputHeight;
    inputWidth = prompt("Nhập chiều rộng");
    inputHeight = prompt("Nhập chiều cao");
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    let arena = width * height;
    document.write("Nhập chiều rộng: " + inputHeight + '<br/>');

    document.write("Nhập chiều cao: "+ inputHeight + '<br/>');

    document.write("Diện tích: " + arena);
}