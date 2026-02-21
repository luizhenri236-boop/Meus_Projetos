function verificar() {

let idade = Number(document.querySelector('#txtidade').value)
let res = document.querySelector('#res')

res.innerHTML = ''

    if (idade <= 0) {
        res.innerHTML = '<p>Digite sua Idade <strong>por favor!</strong></p>'
        return
    }else if (idade >= 150){
        res.innerHTML = '<p>Sua idade esta invalida, Verifique se esta correta!</strong></p>'
    }else if (idade >= 65) {
        res.innerHTML += `<p>Com ${idade}, Você é idoso</p>`
    } else if (idade >= 18) {
         res.innerHTML += `<p>Com ${idade},Você é adulto</p>`
    } else if (idade >= 16) {
         res.innerHTML += `<p>Com ${idade}, Você é adolecente</p>`
    } else if (idade >= 6 && idade <= 12 ) {
        res.innerHTML += `<p>Com ${idade}, Você é criança</p>`
    } else if (idade >= 1 ) {
         res.innerHTML += `<p>Com ${idade}, Você é um bebê e não pode ver telas ainda</p>`
    }


    if (idade >= 150) {
        res.innerHTML += '<p><strong>VERIFICAR IDADE!</strong></p>'
    }else if (idade >= 65) {
        res.innerHTML += `<p>Seu voto é opcional!</p>`
    } else if (idade >= 18) {
        res.innerHTML += `<p>Voto obrigatorio!</p>`
    } else if (idade >= 16) {
        res.innerHTML += `<p>Seu voto é opcional!</p>`
    } else if (idade >= 6 && idade <= 12 ) {
        res.innerHTML += `<p>Espere mais um pouco para você poder votar</p>`
    } else if (idade >= 1 ) {
        res.innerHTML += `<p><strong>Pai ou responsavel</strong> por que esta tentando usar o nome do seu filho. O senhor pode ir preso!</p>`
    }
  

    document.querySelector('#txtidade').value = ''
}