const div = document.querySelector('div')
const btnOnOff = document.querySelector('#on-off')

btnOnOff.addEventListener('click', () => {
    if (div.classList.contains('on')) {
        div.classList.remove('on') // remove classes css do elemento
    } else {
        div.classList.add('on') // adiciona classes css no elemento
    }
})



