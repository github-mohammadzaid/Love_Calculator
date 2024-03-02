function checkloveper() {
    var name = document.getElementById('name').value;
    var lname = document.getElementById('lname').value;

    if (name == "") {
        alert("please enter your name first");
    }
    else if (name.length <= 2) {
        alert("min length is 3")
    }
    else if (!isNaN(name)) {
        alert("numbers are not allowed")
    }

    else if (lname == "") {
        alert("please enter your partner name first");
    }
    else if (lname.length <= 2) {
        alert("min length is 3")
    }
    else if (!isNaN(lname)) {
        alert("numbers are not allowed")
    }
    else {
        var lovedata = Math.random() * 100;
        lovedata = Math.floor(lovedata)
        document.getElementById('lovevalue').value = lovedata + "%";
    }


}