const aumentar = document.getElementById('aumenta');
aumentar.addEventListener('click', increment);

const diminuir = document.getElementById('subtrai');
diminuir.addEventListener('click', decrement);

//var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    if(currentNumber <= 10){

    document.getElementById('currentNumber').innerHTML = currentNumber;
 //   currentNumberWrapper.innerHTML = currentNumber;
    }else{
    document.getElementsByName('aumentar').disabled = 'true';
    currentNumber = 10;    
    }
    
    if(currentNumber == 10){
        document.getElementById('fim').innerHTML = 'Fim da contagem!!!';
    }else{
        document.getElementById('fim').innerHTML = '';
    }
    
}

function decrement(){
    currentNumber = currentNumber - 1;

    if(currentNumber >= 0){

    document.getElementById('currentNumber').innerHTML = currentNumber;
 //   currentNumberWrapper.innerHTML = currentNumber;
    }else{
    document.getElementsByName('subtrair').disabled = 'true';
    currentNumber = 0;
    }
   
    
    if(currentNumber == 0){
        document.getElementById('fim').innerHTML = 'Iniciar a Contagem!';
    }else{
        document.getElementById('fim').innerHTML = '';
    }

}