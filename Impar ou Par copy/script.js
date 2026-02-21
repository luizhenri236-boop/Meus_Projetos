function calcular(){

let num = Number(document.querySelector('#txtnumber').value)
let res = document.querySelector('#res')


    if (num < 0 ) {
        res.innerHTML = `<p>Seu número ${num}, ele é <strong>negativo</strong></p>`
    } else if (num > 0) {
        res.innerHTML = `<p>Seu número ${num}, ele é <strong>positivo</strong></p>`
    }else if (num == 0) {
        res.innerHTML = `<p>Seu número 0 é <strong>neutro</strong></p>`
    }

    if (num % 2 == 0) {
        res.innerHTML += `<p>Seu número é <strong>PAR</strong></p>`
    } else {
        res.innerHTML += `<p>Seu número é <strong>IMPAR</strong></p>`
    }

    if (num > 100) {
        res.innerHTML += `<p>Seu número e maior que 100!</p>`
    }else if (num <= 100) {
        res.innerHTML += `<p>Seu número e menor que 100!</p>`
    }


    document.querySelector('#txtnumber').value = ''
}