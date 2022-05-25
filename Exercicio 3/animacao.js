const divlampada = document.querySelector('div.lampada')
const btnAddRemover = document.querySelector('#on-off')

btnAddRemover.addEventListener('click', () => {
    if (divlampada.classList.contains('on')) {
        divlampada.classList.remove('on') // remove classes css do elemento
    } else {
        divlampada.classList.add('on') // adiciona classes css no elemento
    }
})



