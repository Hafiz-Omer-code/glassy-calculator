document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        const display = document.querySelector('.display input');
        const value = this.textContent;

        if (value === "=") {
            try {
                display.value = eval(display.value) || "";
            } catch (error) {
                display.value = "Error";
            }
        } else if (value === "AC") {
            display.value = "";
        } else if (value === "DE") {
            display.value = display.value.slice(0, -1);
        } else {
            display.value += value;
        }
    });
});
