let operacao = ''



function somar() {
    operacao = '+'
}

function subtrair() {
    operacao = '-'
}

function multiplicar() {
    operacao = '*'
}

function dividir() {
    operacao = '/'
}

function resto() {
    operacao = '%'
}

function calcular() {

    let tnum1 = document.querySelector('#txtnum1').value
    let tnum2 = document.querySelector('#txtnum2').value

    let res = document.querySelector('#res')

    let resutado = operacao

    res.innerHTML = ''


    if (tnum1 === '' || tnum2 === '') {
        res.innerHTML = 'Preencha os dois slotes para fazermos seu calculo!'
        return
    }

    let num1 = Number(tnum1)
    let num2 = Number(tnum2)
    
    
    if (operacao === ''){

        res.innerHTML += '<p>Escolha sua operação para reaizar seu calculo!</p>'

    }

    switch (operacao) {

        case '+':
            num1+num2
            resutado = num1+num2
            break

        case '-':
            num1-num2
            resutado = num1-num2
            break

        case '*':
            num1*num2
            resutado = num1*num2
            break

        case '/':
            num1/num2
            resutado = num1/num2
            break

        case '%':
            num1%num2
            resutado = num1%num2
            break
    }

    res.innerHTML += resutado
}