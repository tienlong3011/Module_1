function nhapdiem(){
    let pointa;
    let pointb;
    let pointc;
    pointa = prompt("Điểm vật lý");
    pointb = prompt("Điểm hóa học");
    pointc = prompt("Điểm sinh học");
    let a = parseFloat(pointa);
    let b = parseFloat(pointb);
    let c = parseFloat(pointc);
    let d = a + b + c ;
    let e = d / 3;
    document.write("Điểm vật lý: " + pointa + '<br/>');
    document.write("Điểm hóa học: " + pointb + '<br/>');
    document.write("Điểm sinh học: " + pointc + '<br/>');
    document.write("Điểm tổng: " + d + '<br/>');
    document.write("Điểm trung bình: " + e + '<br/>')

}