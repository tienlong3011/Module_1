class Member {
    constructor(_name, _age, _phone, _ticket) {
        this.name = _name;
        this.age = _age;
        this.phone = _phone;
        this.ticket = _ticket;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getPhone() {
        return this.phone;
    }

    getTicket() {
        return this.ticket;
    }

}

let productList = [];
function showAllProduct() {
    let content = "";
    for (let i = 0; i < productList.length; i++) {
        content +=
            "Họ và tên: " + productList[i].getName() + '\n<br>' +
            "Tuổi: " + productList[i].getAge() + '\n<br>' +
            "Số điện thoại: " + productList[i].getPhone() + '\n<br>' +
            "Mã Ticket: " + productList[i].getTicket() + '\n<br>' + '<hr/>'
    }
    document.getElementById("result").innerHTML = content;
}

function newProduct() {
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let phone = document.getElementById("numberPhone").value;
    let ticket = document.getElementById("ticket").value;
    let member = new Member(name, age, phone, ticket);
    productList.push(member)
    showAllProduct()
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("numberPhone").value = "";
    document.getElementById("ticket").value = "";
    document.getElementById("create").disabled = true;

}

function checkP(){
    if(document.getElementById("name").value !== ""
        && document.getElementById("age").value !== ""
        && document.getElementById("numberPhone").value !== ""
        && document.getElementById("ticket").value !== ""){
        document.getElementById("create").disabled = false;
    }
}




