
const textArea = document.querySelector(".textarea-entrada");
const mensaje = document.querySelector(".textarea-salida");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; 
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

}

function encriptar(stringEncriptar){
    let matrizCodigo = [['e','enter'], ['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    // console.table(matrizCodigo);
    stringEncriptar = stringEncriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringEncriptar.includes(matrizCodigo[i][0])){
            stringEncriptar =   stringEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }
    return stringEncriptar;
}

function desencriptar(stringDesencriptar){
    let matrizCodigo = [['e','enter'], ['i','imes'],['a','ai'],['o','ober'],['u','ufat']];
    stringDesencriptar = stringDesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){

        if(stringDesencriptar.includes(matrizCodigo[i][1])){
            stringDesencriptar =   stringDesencriptar.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptar;
}


function copiarTexto(){
    if(mensaje ==""){
        mensaje.value ="No hay texto para copiar";
    }else{
        mensaje.select();

        document.execCommand("copy");
        // alert("Texto-Copiado");
    }
}

copiarTexto();


