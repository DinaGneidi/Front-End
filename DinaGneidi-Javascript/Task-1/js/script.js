console.log('hey');
document.getElementById('choose').onchange =
    function choose() {
        var country = document.getElementById('choose').value;
        if (country === "Cairo") {
            var arr = ['Madinet-Nasr', 'Abasya', 'CityLight', 'Fifth-ste'];
        } else if (country === "Alexandria") {
            var arr = ['CampChizar', 'SidiBeshr', 'Montaza', 'Ebrahmya'];
        } else if (country === "Giza") {
            var arr = ['6-October', 'Pyramids'];
        }
        var x = "";
        for (i = 0; i < arr.length; i++) {
            x += "<option>" + arr[i] + "</option>";
        }
        x = "<select>" + x + "</select>";
        document.getElementById('display-content').innerHTML = x;
    }