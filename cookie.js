function writeCookie(name, value, days){
    //por padrão não há expiração, então o cookie é temporário
    var expires = "";

// especificar um número de dias torna o cookie persistente
    if(days){
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toGMTSString();
    }

    // atribua nome, valor e data de validade ao cookie

    document.cookie = name + "=" + value + expires + "; path=/";

}

function readCookie(name){
    //Busque o cookie especificado e retorne seu valor

    var searchName = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++){
        var c = cookies[i]
        while (c.charAt(0)=='')
            c = c.substring(1, c.length);
        if (c.indexOf(searchName)==0)
            return c.substring(searchName.length, c.length);
    }

    return null;

}

function eraseCookie(name){
    //Apague o cookie especificado
    writeCookie(name, "", -1);
}
