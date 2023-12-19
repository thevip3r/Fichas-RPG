function voltar() {
    window.location.href = "../Pagina-Inicial/index.html"
}

let senha01 = document.querySelector(`input#senha01`)
let senha02 = document.querySelector(`input#senha02`)

function cadastrar(){
if (senha01 != senha02){
    window.alert(`As senhas devem ser iguais`)
}
}