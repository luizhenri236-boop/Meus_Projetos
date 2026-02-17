function mostrar() {

    let nome = document.querySelector('#txtnome').value
    let idade = Number(document.querySelector('#txtidade').value)
    let salario = Number(document.querySelector('#txtsalario').value)
    let nota = Number(document.querySelector('#txtnota').value)


    let res = document.querySelector('#res')

    res.innerHTML = ""

    if (nome === "" || idade === 0 || salario === 0 || nota === 0) {
        res.innerHTML = `<p>⚠ Preencha todos os campos!</p>`
        return
    } 

    res.innerHTML += `<p>Olá ${nome}, seja bem vindo(a)</p>`

    //formatação de salario
    res.innerHTML += `<p>Sua renda é ${salario.toLocaleString('pt-br', {style: "currency", currency: 'BRL'})}</p>`

    //condição idade
    if (idade >= 65) {

        res.innerHTML += `Com ${idade} anos, você é idoso!`

    } else if (idade >= 18) {
        res.innerHTML += `Com ${idade} anos, vocé é adulto!`
    } else if (idade >= 16){
        res.innerHTML += `Com ${idade} anos, vocé é adolecente!`
    } else {
        res.innerHTML += `Com ${idade} anos, você é menor de idade!`
    }

    //condição nota
    if (nota >= 7) {
        res.innerHTML += `<p>Sua nota foi muito boa! \u{1F929}</p>`
    } else {
        res.innerHTML += `<p>Vamos melhorar! \u{1F614}</p>`
    }

    //limpar campos
    document.querySelector('#txtnome').value = ''
    document.querySelector('#txtidade').value = ''
    document.querySelector('#txtsalario').value = ''
    document.querySelector('#txtnota').value = ''
}