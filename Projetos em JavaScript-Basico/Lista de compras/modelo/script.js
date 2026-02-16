    let lista = []

function adicionar() {

    let item = document.querySelector('#txtItem')
    let valor = item.value.trim()

    if (valor === ""){
        alert('Digite um item!')
        return
    }

    if(lista.indexOf(valor) !== -1){
        alert('Item ja Adicionado')
        return
    }

    lista.push(valor)
    item.value = ""

    atualizarTela()
}

function removerItem(){
    let item = document.querySelector('#txtItem')
    let valor = item.value.trim()

    let posição = lista.indexOf(valor)

    if (posição === -1) {
        alert('Item não encontrado!')
        return
    }

    lista.splice(posição, 1)
    item.value = ""

    atualizarTela()
}

function organizarLista() {

    lista.sort()

    atualizarTela()

}

function atualizarTela() {
    let res = document.querySelector('#res')
    let total = document.querySelector('#total')

    res.innerHTML = ""

    for (let t = 0;t < lista.length;t++) {
        res.innerHTML += `<p>${lista[t]}</p>`
    }

    total.innerHTML = `Total de compras:` + lista.length
}