function salvar() {
    const x = document.querySelector('input[name= "x"]').value
    const y = document.querySelector('input[name= "y"]').value
    const xx = parseInt(x)
    const yy = parseInt(y)
    const soma = xx + yy
    const menos = xx - yy
    const mult = xx * yy
    const divi = xx / yy
    const mostrar = `<p>Soma: ${soma} <p> <p> Subtração: ${menos} <p> <p> Multiplicação: ${mult} <p> <p> Divisão: ${divi} <p>`
    const elementList = document.querySelector('#calculo')
    elementList.innerHTML= `${elementList.innerHTML} <li> ${mostrar} <li>`
}

