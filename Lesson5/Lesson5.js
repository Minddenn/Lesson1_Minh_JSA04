// ` nằm dưới nút esc
var html = `<tr>
    <tr>
        <th>Họ tên</th>
        <th>Trường</th>
        <th>Học lực</th>
    </tr>
</tr>`;
// ban đầu nó sẽ hiện thị ra danh sách học sinh luôn
if (localStorage.getItem('students') != "undefined" && localStorage.getItem('student') != null) {
    var studentAll = JSON.parse(localStorage.getItem('student'));
} else {
    var studentAll = [];
}

if (studentAll.length > 0) {
    for (var item of studentAll) {
        html +=`
            <tr>
                <td>${item.fullname}</td>
                <td>${item.school}</td>
                <td>${item.strong}</td>
            </tr>
        `;
    }
}

document.getElementById("myTable").innerHTML = html;

document.getElementById("btnAdd").addeventListener("click", function () {
    var fullname = document.getElementById('fullname').value;
    var school = document.getElementById('school').value;
    var strong = document.getElementById('strong').value;
    
    if (localStrorage.getItem('students') != "undefined" && localStorage.getItem('students') !=null) {
        var studentsArr = JSON.parse(localStorage.getItem('students'));
    } else {
        studentArr = [];
    }
})