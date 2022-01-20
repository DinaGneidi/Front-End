document.write("<h1>This is a heading</h1>");
document.getElementById('add-button').onclick =
    function add() {
        var ul = document.getElementById('to-dos');
        var input = document.getElementById('input');
        var li = document.createElement('li');

        li.setAttribute('id', input.value);
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
    }
document.getElementById('remove-button').onclick =
    function remove() {
        var ul = document.getElementById('to-dos');
        var input = document.getElementById('input');
        var li = document.getElementById(input.value);


        ul.removeChild(li);
    }


var e_mail = document.getElementById('e-mail').onblur =
    function validateEmail() {
        var e_mail_ipnut = document.getElementById('e-mail').value;
        if (e_mail_ipnut.indexOf('@') == -1 || e_mail_ipnut.indexOf('.com') == -1) {
            alert('Enter Valid E-mail again ');
        }
    }

function addRow() {
    var name = document.getElementById('name').value;
    var address = document.getElementById('address').value;
    var salary = document.getElementById('salary').value;

    var table = document.getElementsByTagName('table')[0];

    var newRow = table.insertRow(length - 1);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = address;
    cell3.innerHTML = salary;


}


var menu1 = document.getElementById('menu_1').onclick =
    function display() {
        document.getElementById('tab1').style.display = "block";
        document.getElementById('tab2').style.display = "none";
        document.getElementById('tab3').style.display = "none";
    }

var menu2 = document.getElementById('menu_2').onclick =
    function display() {
        document.getElementById('tab1').style.display = "none";
        document.getElementById('tab2').style.display = "block";
        document.getElementById('tab3').style.display = "none";
    }

var menu3 = document.getElementById('menu_3').onclick =
    function display() {
        document.getElementById('tab1').style.display = "none";
        document.getElementById('tab2').style.display = "none";
        document.getElementById('tab3').style.display = "block";
    }