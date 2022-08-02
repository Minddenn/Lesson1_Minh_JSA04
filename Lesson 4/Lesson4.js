function checkEvenOdd()
{
    // Lấy giá trị input
    var n = Number(document.getElementById('number').value);
    // Số chẵn là số chia hết cho 2, số là số không chia hết cho 2
    // Toán tử ba ngôi
    // điều kiện ? true : false
    alert(n % 2 == 0 ? 'Đây là số chẵn' : 'Đây là số lẻ');
}