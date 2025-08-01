let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('input[type="button"]');

let string = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonText = button.value;

        switch (buttonText) {
            case '=':
                try {
                    string = eval(string).toString();
                } catch {
                    string = 'Error';
                }
                input.value = string;
                break;
            case 'AC':
                string = '';
                input.value = string;
                break;
            case 'DEL':
                string = string.slice(0, -1);
                input.value = string;
                break;
            default:
                string += buttonText;
                input.value = string;

               }

    });

   });