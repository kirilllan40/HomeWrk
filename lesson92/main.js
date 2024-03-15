const myModal = document.querySelector('.modal')
const openModal = document.querySelector('.btn')
const body = document.body




const closeModal = () => {
    myModal.classList.remove('open--modal')
    body.classList.remove('body--fixed')
}


openModal.addEventListener('click', () => {
    myModal.classList.add('open--modal')
    body.classList.add('body--fixed')
})

myModal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__btn')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if(event.code === 'Escape' && myModal.classList.contains('open--modal')) {
        closeModal()
    }
})