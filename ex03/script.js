function salvar() {
    const x = document.querySelector('input[name= "x"]').value
    const xx = parseFloat(x)
    if (x % 5 == 0) {
        const mostrarr = `<p>${xx} é divisivel por 5 <p>`
        const elementList = document.querySelector('#calculo')
        elementList.innerHTML= `${elementList.innerHTML} <li> ${mostrarr} <li>`
    }
    else {
        const Quadrado = xx ** 2
        const mostrarq = `<p>${Quadrado} não é divisivel por 5<p>`
        const elementList = document.querySelector('#calculo')
        elementList.innerHTML= `${elementList.innerHTML} <li> ${mostrarq} <li>`
    }

}
