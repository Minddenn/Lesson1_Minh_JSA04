function check()
{
    var n = Number(document.getElementById("n").value)
    //Toán tử ba ngôi
    //Cú pháp: điều kiện ? Đúng : Sai;
    return n % 2 == 0 ? 'Đây là số chẵn' : 'Đây là số lẻ';
}