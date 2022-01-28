
/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/

function encriptar(){
    var x = document.getElementById("input-texto").value;
    x=x.toLowerCase();
    x= x.split("");
    console.log(x);
    for(var i = 0;i<x.length;i++){
        if(x[i]=="e"){
            x[i]="enter";
        }
        if(x[i]=="i"){
            x[i]="imes";
        }
        if(x[i]=="a"){
            x[i]="ai";
        }
        if(x[i]=="o"){
            x[i]="ober";
        }
        if(x[i]=="u"){
            x[i]="ufat";
        }
        
    }

    var y = x.join("");

    //g,ai,t,ober

    document.getElementById("msg").value = y;
}

function desencriptar(){
    var des = document.getElementById("input-texto").value;
    //des=des.split("");
    console.log(des);
    var d2= des.replace(/ai/gi,"a").replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    
    console.log(d2)
    document.getElementById("msg").value = d2;
}

