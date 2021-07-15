async function makeGet(){
    const options = {
        method: get,
    }
    resposta = await fetch(urlGet, options)
    .then(Response => Response.json())
    .then(elemento => {
        
        return elemento
    })

    return resposta
}

async function makePost(){
    var body = createBody()
    console.log(body)
    //retornar corpo no console
    const options = {
        method: get,
    }
    resposta = await fetch(urlPost, options);

    if(!resposta.ok){
        return new Error();
    }

    return resposta
}
function getInformations(){
    try{
        var response = makeGet()
        response.then(resposta => console.log(resposta))
        
    }catch(e){
        console.log(e)
    }
    
    let nome = document.getElementsByName("nome")
    console.log(nome)
    
    $scope.linguagens = linguagens
    $scope.vagas = vagas
}
function postInformations(){
    try{
        var response = makePost()
        response.then(resposta => console.log(resposta))
        
    }catch(e){
        console.log(e)
    }

    
}

/*
function fillInformations(resposta){
    var inputName = document.getElementsByName("nome")
    var inputtelefone = document.getElementsByName("telefone")
    inputName.value = resposta.name
    inputtelefone.value = resposta.celular
    inputName.readOnly = true
    inputtelefone.readOnly = true
}*/


function createBody(){
    let nome = document.querySelector("input[name='nome']")
    let celular = document.querySelector("input[name='celular']")
    let vagas = getValues("vagas")
    let linguagens = getValues("linguagens")
    
    
    let body = {
        'name' : nome.value,
        'celular' : celular.value,
        vagas,
        linguagens,
    }

    return body

}

function getValues(tipo){
    if(tipo == "vagas"){
        var query = 'input.checkvagas:checked'
    }
    if(tipo == "linguagens"){
        var query = 'input.checklinguagens:checked'
    }

    var lista = document.querySelectorAll(query)
    var values = []
    for(i = 0; i<lista.length; i++) {
        values.push(lista[i].name)
    }
    //console.log(values)
    return values
    
}


