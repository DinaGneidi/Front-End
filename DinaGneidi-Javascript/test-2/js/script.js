document.querySelector("#add").onclick = function() {
    // console.log("add pressed"); 
    var todo = document.querySelector("#input").value;
    var li = document.createElement('li');
    li.setAttribute("id", todo);
    li.innerHTML = "<span>" + todo + "</span>";
    document.querySelector("#todos").append(li);
}
document.querySelector("#remove").onclick = function() {
    var ul = document.querySelector('#todos');
    var input = document.querySelector("#input").value;
    var li = document.getElementById(input);
    ul.removeChild(li);
    // or you can the user type what he's want to delete it and remove it
    /*var ul = document.getElementById('todos');
        var input = document.getElementById('input');
        var item = document.getElementById(input.value);
        ul.removeChild(item);
        */
}
document.querySelector("#email").onblur = function() {
    var mail = document.querySelector("#email").value;
    if (mail.indexOf('@') == -1 || mail.indexOf('.com') == -1) {
        alert("your email must be contain '@' and '.com'");
    }
}
document.querySelector("#send").onclick = function() {
    var name = document.querySelector("#name").value;
    var address = document.querySelector("#address").value;
    var salary = document.querySelector("#salary").value;

    var table = document.getElementsByTagName("table")[0];

    var newRow = table.insertRow(length - 1);

    var cell_1 = newRow.insertCell(0);
    var cell_2 = newRow.insertCell(1);
    var cell_3 = newRow.insertCell(2);

    cell_1.innerHTML = name;
    cell_2.innerHTML = address;
    cell_3.innerHTML = salary;

}

var menuButton2 = document.getElementById('men2').onclick =
    function display() {
        document.getElementById('tab1').style.display = "none";
        document.getElementById('tab2').style.display = "block";
        document.getElementById('tab3').style.display = "none";
    }

var menuButton1 = document.getElementById('men1').onclick =
    function display() {
        document.getElementById('tab1').style.display = "block";
        document.getElementById('tab2').style.display = "none";
        document.getElementById('tab3').style.display = "none";
    }
var menuButton3 = document.getElementById('men3').onclick =
    function display() {
        document.getElementById('tab1').style.display = "none";
        document.getElementById('tab2').style.display = "none";
        document.getElementById('tab3').style.display = "block";
    }