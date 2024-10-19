function salvar() {
    const x = document.querySelector('input[name= "x"]').value
    const xx = parseInt(x)
    for (let i = 1; i <= xx; i++) {
        const soma = formula(i)
        const mostrarr = `<p>${soma}<p>`
        const elementList = document.querySelector('#calculo')
        elementList.innerHTML= `${elementList.innerHTML} <li> ${mostrarr} <li>`

    }
}
function formula(num){
    if (num < 3) return 1;

    return formula(num - 1) + formula(num - 2);
}
