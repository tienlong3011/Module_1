let productList = [
    new ProductList("Iphone Xsmax","10tr","fullBox")
];
//ten ham: showAllProduct
//ds tham so: khong co:
//dl tra ve: khong co
//chuc nang: lap danh sach san pham, dien vao trong the co id products
function showAllProduct(){
    let content="";
    for (let i = 0; i < productList.length; i++) {
        content += '<tr>\n' +
            '            <td>'+productList[i].getName()+'</td>\n' +
            '            <td>'+productList[i].getPrice()+'</td>\n' +
            '            <td>'+productList[i].getNote()+'</td>\n' +
            '            <td><button onclick="editProduct('+i+')">Edit</button></td>\n' +
            '            <td><button onclick="deleteProduct('+i+')">Delete</button></td>\n' +
            '        </tr>'
    }
    document.getElementById("Product").innerHTML = content;
    document.getElementById("sumOfProduct").innerText = productList.length + " Product";
}
//ten ham: creatNewProduct
//ds tham so: khong co:
//dl tra ve: khong co
//chuc nang:
//Lấy dữ liệu
// Push vào mảng
// hiển thị lại dữ liệu
function createNewProduct() {
    // let newP = prompt("Moi ban nhap ten sp moi");
    let newName = document.getElementById("newName").value;
    let newPrice = document.getElementById("newPrice").value;
    let newNote= document.getElementById("newNote").value;
    let newP = new ProductList(newName,newPrice,newNote);
    productList.push(newP);
    showAllProduct();
    document.getElementById("newName").value = "";
    document.getElementById("newPrice").value = "";
    document.getElementById("newNote").value = "";
}
//ten ham: deleteProduct
//ds tham so: index
//dl tra ve: khong co
//chuc nang: xoa san pham theo index
// hien thi lai danh sach
function deleteProduct(index){
    productList.splice(index, 1);
    showAllProduct();
}
//ten ham: editProduct
//ds tham so: index
//dl tra ve: khong co
//chuc nang: sua san pham theo index
//1. cho nguoi dung nhap vao sp moi
//2. gan lai sp cho sp cu
//3. hien thi lai danh sach

function editProduct(index){
    //biến cục bộ
    let newName = prompt("Sửa tên sản phẩm")
    let newPrice = prompt("Sửa giá sản phẩm")
    let newNote= prompt("Sửa ghi chú sản phẩm")
    let pro = new ProductList(newName,newPrice,newNote);
    productList[index] = pro;
    showAllProduct();

}