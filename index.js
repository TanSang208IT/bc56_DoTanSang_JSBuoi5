console.log("hi")

/** BÀI TẬP 1: tìm số nguyên dương nhỏ nhất sao cho 1+2+3+..+ n >10000
 * INPUT: nhập dãy số 1 -> n
 * 
 * CÁC BƯỚC XỬ LÝ: tổng 1+2+3 +..+ n <=10000
 * 
 * OUTPUT xuất số n cho phép tính trên  
 */

function timSoNguyenN () {
     
     var tongSoNguyen = 0;
     var soNguyen = 1;

     while (tongSoNguyen < 10000){
        tongSoNguyen += soNguyen; 
        soNguyen++;
     }
     return soNguyen - 1;

    } 
 var ketQua = timSoNguyenN();
 document.getElementById("soDuongNhoNhat").innerHTML = "Số nguyên dương nhỏ nhất là " + ketQua;

 /**BÀI TẬP 2: VIẾT CHƯƠNG TRÌNH NHẬP VÀO 2 số x, n tính tổng S(n) = x + x^2 + x^3 +...+ x^n
  * INPUT: nhập số x, n nguyên dương
  *Xử lý dữ liệu: nếu số mũ < n thì số mũ + 1 cho đén khi số mũ = n
  * OUTPUT: xuất kết quả tính tổng S(n)
  */
function tinhTongMu() {
    var soN = document.getElementById("soN").value * 1;
    var soX = document.getElementById("soX").value * 1;

    var tongMu = 0;
    var soMu = 1;
    while (soMu <= soX) {
       
        tongMu += soN ** soMu;
        soMu++;
    }
    document.querySelector(".tinhTongMu").innerHTML = tongMu;
}
  /**BÀI TẬP 3: nhập vào n. tính giai thừa 1*2*..*n
   * 
   * INPUT: nhập dữ liệu số n nguyên dương
   * Xử lý dữ liệu: tính theo công thức 1*2*..*n với tham số <= n
   * OUTPUT: xuất kết quả cho người dùng
   */
  function tinhGiaiThua () {
    var soNBatKy = document.getElementById("soNBatKy").value * 1;
    var thamSo = 1;
var giaiThua = 1;
    while (thamSo <= soNBatKy) {
giaiThua = giaiThua * thamSo;
thamSo++
    }
    document.querySelector(".tinhGiaiThua").innerHTML = giaiThua;
  }

  /**BÀI TẬP 4: VIẾT CHƯƠNG TRÌNH khi click vào button sẽ in ra 10 thẻ div. Nếu div vị trí chẵn thì background màu đỏ, vị trí lẻ thì background xanh dương.
   * Input: tạo nút button 
   * Xử lý dữ liệu: gán giá trị cho thẻ div xuất ra từ 1 -> 10. nếu giá trị chia hết cho 2 thì màu đỏ, không chia hết thì màu xanh dương
   * Output: xuất kết quả cho người dùng các ô chẵn đỏ lẻ xanh 
   */
function xetChanLe() {
  var xetChanLe = document.getElementById("chanLe");

  for (var i = 1; i <= 10; i++) {
     var div = document.createElement("div");
     div.textContent =   i;
      div.className = i % 2 === 0 ? "red" : "blue";
      chanLe.appendChild(div);
  }
}
