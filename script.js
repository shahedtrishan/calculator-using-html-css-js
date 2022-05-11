let screen = document.getElementById("screenS");

function display(num) {
    screen.value += num;
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (err) {
        alert("Invalid!")
    }
}

function clr() {
    screen.value = "";
}

function del() {
    screen.value = screen.value.slice(0, -1);
}