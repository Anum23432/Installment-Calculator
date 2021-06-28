function calculate(){
    let amount = parseInt(document.querySelector('#input1').value);
    let period = parseInt(document.querySelector('#input2').value);
    let monthlyInstallment = amount / period;
    document.querySelector('span').innerHTML= monthlyInstallment;
    }
    