function salvar() {
    const x = document.querySelector('input[name= "x"]').value
    completo = x.split(' ')
    max = completo.length
    for (let i = 1; i <= max; i++) {
       if (i == 1){
            nome = completo[0]
            const mostrarr = `<p>${nome}<p>`
            const elementList = document.querySelector('#calculo')
            elementList.innerHTML= `${elementList.innerHTML} <li> ${mostrarr} <li>`}

        if (i == max) {
            nome = completo[i-1]
            const mostrarr = `<p>${nome}<p>`
            const elementList = document.querySelector('#calculo')
            elementList.innerHTML= `${elementList.innerHTML} <li> ${mostrarr} <li>`}
    
        }
}
