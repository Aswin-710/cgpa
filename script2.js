function myfunction(val) {
    if (val == 1) {
        document.getElementById('display1').style.display = 'block';
        document.getElementById('display2').style.display = 'none';
        document.getElementById('display3').style.display = 'none';
    }
    if (val == 2) {
        document.getElementById('display1').style.display = 'none';
        document.getElementById('display2').style.display = 'block';
        document.getElementById('display3').style.display = 'none';
    }
    if (val == 3) {
        document.getElementById('display1').style.display = 'none';
        document.getElementById('display2').style.display = 'none';
        document.getElementById('display3').style.display = 'block';
    }
}
function getamount1() {
    var u = document.getElementById('amount1').value;
    var s = 20;
    var bill = 0.0;
    if (u > 0 && u < 50) {
        bill = (u * 0.25) + s;
        document.getElementById('display1').innerHTML = "Bill amount: " + bill;
    }
    else
        if (u >= 50 && u < 150) {
            bill = (u * 0.55) + s;
            document.getElementById('display1').innerHTML = "Bill amount: " + bill;
        }
        else
            if (u >= 150 && u < 300) {
                bill = (u * 0.80) + s;
                document.getElementById('display1').innerHTML = "Bill amount: " + bill;
            }
            else
                if (u >= 300 && u < 500) {
                    bill = (u * 1) + s;
                    document.getElementById('display1').innerHTML = "Bill amount: " + bill;
                }
                else
                    if (u >= 500 && u < 1000) {
                        bill = (u * 2) + s;
                        document.getElementById('display1').innerHTML = "Bill amount: " + bill;
                    }
                    else {
                        document.getElementById('display1').innerHTML = "Invalid units";
                    }
}

function getamount2() {
    var u = document.getElementById('amount2').value;
    var s = 35;
    var bill = 0.0;
    if (u > 0 && u < 50) {
        bill = (u * 1.35) + s;
        document.getElementById('display2').innerHTML = "Bill amount: " + bill;
    }
    else
        if (u >= 50 && u < 150) {
            bill = (u * 2.15) + s;
            document.getElementById('display2').innerHTML = "Bill amount: " + bill;
        }
        else
            if (u >= 150 && u < 300) {
                bill = (u * 3) + s;
                document.getElementById('display2').innerHTML = "Bill amount: " + bill;
            }
            else
                if (u >= 300 && u < 500) {
                    bill = (u * 3.5) + s;
                    document.getElementById('display2').innerHTML = "Bill amount: " + bill;
                }
                else
                    if (u >= 500 && u < 1000) {
                        bill = (u * 6) + s;
                        document.getElementById('display2').innerHTML = "Bill amount: " + bill;
                    }
                    else {
                        document.getElementById('display2').innerHTML = "Invalid units";
                    }
}
function getamount3() {
    var u = document.getElementById('amount3').value;
    var s = 65;
    var bill = 0.0;
    if (u > 0 && u < 50) {
        bill = (u * 3) + s;
        document.getElementById('display3').innerHTML = "Bill amount: " + bill;
    }
    else
        if (u >= 50 && u < 150) {
            bill = (u * 4.5) + s;
            document.getElementById('display3').innerHTML = "Bill amount: " + bill;
        }
        else
            if (u >= 150 && u < 300) {
                bill = (u * 5.5) + s;
                document.getElementById('display3').innerHTML = "Bill amount: " + bill;
            }
            else
                if (u >= 300 && u < 500) {
                    bill = (u * 6.8) + s;
                    document.getElementById('display3').innerHTML = "Bill amount: " + bill;
                }
                else
                    if (u >= 500 && u < 1000) {
                        bill = (u * 9) + s;
                        document.getElementById('display3').innerHTML = "Bill amount: " + bill;
                    }
                    else {
                        document.getElementById('display3').innerHTML = "Invalid units";
                    }
}