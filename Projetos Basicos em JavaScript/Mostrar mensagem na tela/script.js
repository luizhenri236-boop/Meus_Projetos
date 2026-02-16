    let msg = document.querySelector("#txtmsg")
    let res = document.querySelector('#res')   

function enviar() {

    let Rmsg = msg.value.trim()

    if (Rmsg === "") {
        res.innerHTML = "Digite uma mensagem!"
    } else {
        res.innerHTML = Rmsg

    }
    msg.value = ""
}
