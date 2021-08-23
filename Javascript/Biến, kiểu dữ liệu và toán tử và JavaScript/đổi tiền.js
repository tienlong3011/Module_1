function convert() {
    let amount = document.getElementById("amount").value;
    amount = parseInt(amount);
    let from = document.getElementById("from").value;
    from = parseInt(from);
    let to = document.getElementById("to").value;
    to = parseInt(to);
    let result = amount * from / to
    document.getElementById("result").innerText = result;
}