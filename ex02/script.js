function salvar() {
    const x = document.querySelector('input[name= "x"]').value
    const xx = parseFloat(x)
    if (x >= 0) {
        const raiz = xx ** 0.5
        const mostrarr = `<p>Raiz Quadrada: ${raiz} <p>`
        const elementList = document.querySelector('#calculo')
        elementList.innerHTML= `${elementList.innerHTML} <li> ${mostrarr} <li>`
    }
    else {
        const Quadrado = xx ** 2
        const mostrarq = `<p>Numero ao quadrado: ${Quadrado} <p>`
        const elementList = document.querySelector('#calculo')
        elementList.innerHTML= `${elementList.innerHTML} <li> ${mostrarq} <li>`
    }

}

