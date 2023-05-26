function xepLop() {
    let t = +prompt("Nhập điểm Toán");
    let v = +prompt("Nhập điểm Văn");
    let a = +prompt("Nhập điểm Anh");

    let total = 2 * (t + v) + a;
    let result = "";

    if (total >= 30 || t > 8 || v > 8) {
        if (total >= 40 && t >= 8) {
            result = "LC T";
        } else if (total >= 40 && v >= 8) {
            result = "LC V";
        } else {
            result = "LT";
        }

    } else {
        result = "Failed";
    }

    alert(result);
    document.write(result);
    console.log(result)
}

xepLop();