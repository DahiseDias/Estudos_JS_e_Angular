/*1º - Crie uma função que receba como parâmetro uma string e caso a string tenha um tamanho maior que 10 
ou algum dos seguintes caracteres []!@#$%^{} retorna false, se não retorna true. */



function verificarString(text){
    var caracteres = ["[", "]", "!","@","#","$","%", "^", "{", "}"]
    var resultado = text
    var isntGreater
    var hasntSpecialCrt = true
    for(i in caracteres){
        if(resultado.indexOf(caracteres[i]) > -1)
        {
            hasntSpecialCrt= false
        }
    
    }
    if(resultado.length > 10){
        isntGreater = false
    }else{
        isntGreater = true
    }
    
    return isntGreater&&hasntSpecialCrt

}

alert(verificarString("haha!"))

