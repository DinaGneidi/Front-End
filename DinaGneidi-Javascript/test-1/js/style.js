document.querySelector("#input").onchange = function() {
    var a = document.querySelector("#input").value;
    if (a === "Egypt") {
        var arr = ['Cairo', 'Giza', 'Alex'];
    } else if (a === "KSA") {
        var arr = ['Riyadh', 'Medina', 'Mecca'];
    } else {
        var arr = [];
    }
    var string = "";
    for (i = 0; i < arr.length; i++) {
        string = string + "<option>" + arr[i] + "</option>";
    }
    string = "<select>" + string + "</select>";
    document.querySelector("#output1").innerHTML = string;

}