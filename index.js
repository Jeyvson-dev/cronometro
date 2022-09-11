var tempo

var start1 = document.getElementById('start')

var pause1 = document.getElementById('pause')


function start(){

    
    tempo = setInterval(function () {
        
        var cronometro = document.getElementById('contagem').innerHTML
        
        var soma = parseInt(cronometro)+1

        document.getElementById('contagem').innerHTML = soma
        
        
    }, 1000);
    

}

function pause(){

    clearInterval(tempo)



}
function entrarstart(){


    start1.style.background = 'green'

}

function entrarpause(){

    pause1.style.background = 'red'

}

function sairstart(){
 
    start1.style.background = '#024a02'

}

function sairpause(){

    pause1.style.background = '#6b1010'

}
