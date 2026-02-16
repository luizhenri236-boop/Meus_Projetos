let msg = document.querySelector('#txtmsg')
let res = document.querySelector('#res')

function enviar() {

    let texto = msg.value.trim()

    if (texto === "") {

        alert("Digite uma msg")

    } else {

        res.innerHTML += `<p>${texto}</p>`

    }
    msg.value = ""
}