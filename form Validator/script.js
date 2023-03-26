let B7Validator = {
    handleSubmit: (event) => {
        event.preventDefault();
        let send = true;

        let inputs = form.querySelectorAll('input');
        
        for(pos in inputs){
            let input = inputs[pos];
            
            let check = B7Validator.checkInput(input);
            
            if(check !== true){
                send = false;
                B7Validator.showError(input,check);
            }
        }
        
        if(send){
            form.submit();
        }
    },
    checkInput:input => { 
        console.log(input);
        let rules = input.getAttribute('data-rules');
        
        if(rules !== null){
            rules = rules.split("|");
            for(let k in rules){
                let rDetails = rules[k].split('=');
                switch(rDetails[0]){
                    case 'required':
                        if(input.value == ''){
                            return 'Campo não pode ser vazio.';
                        }
                    break;
                    case 'min':
                         if(input.value.length() < 2){
                             return "Campo precisa ser maior que 2 caracteres";
                         }
                    break;
                }
            }
        }
        return true;
    },
    showError: (input, check)=>{
        input.style.borderColor = 'red';
        let errorElement = document.createElement('div');
        errorElement.classList.add('error');
        errorElement.innerHTML = check;
        input.parentElement.insertBefore(errorElement, input.ElementSibling)
    }

};
let form = document.querySelector('form.b7validator');
form.addEventListener('submit', B7Validator.handleSubmit);