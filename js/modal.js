// MODAl

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const modalCloseButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => {
    openModal()
}

modalCloseButton.onclick = () => {
    closeModal()
}

modal.onclick = (event) => {
    if (event.target === modal)
    closeModal()
}



const autoOpenModal = (i = 0) => {
    const start = setInterval(() => {
        openModal(i)
        clearInterval(start)
    }, 10000)
}

autoOpenModal()


const scrollEnd = () => {
    if (addEventListener.document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        openModal()
    } else {
        removeEventListener = () => {
            openModal()
        }
    }
}

scrollEnd()



