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
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
        openModal()
        window.removeEventListener('scroll', scrollEnd)
    }
}

window.addEventListener('scroll', scrollEnd)



const  farmElement = document.querySelector('form')

const postData = (data) => {
    fetch('server.php', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: data
    })
}

const bindPostData = (form) => {
    form.onsubmit = (event) => {
        event.preventDefault()

        const formData = new FormData(form)
        formData.forEach((item, index) => {
            console.log(index, item)
        })
    }
}

bindPostData(postData)


