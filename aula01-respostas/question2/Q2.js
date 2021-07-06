/*2º - Crie uma função que não tem parâmetro e ao ser executada guarda os valores de todos os inputs 
de uma página em um array e retorna o array.*/

function returnArray(){
    var lista = []
    var tamanho= document.querySelector("#entradas").childElementCount
    for(i=1; i<(tamanho+1); i++){
        var id = "dado" + i
        lista.push(document.getElementById(id).value)
    }
    return lista
    
  
}

var button = document.querySelector('#send')
button.addEventListener("click", function(e){
    console.log(returnArray())
})

