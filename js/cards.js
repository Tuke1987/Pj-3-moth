const card = document.querySelector('.container-card')

const ID = 'https://jsonplaceholder.typicode.com/posts'

const cardFetch = async (link) => {
    try {
        const response = await fetch(link)
        const data = await response.json()
        data.forEach(obj => {
            const cards = document.createElement('div')
            cards.classList.add('card')
            cards.innerHTML = `
                <img src="../img/work/1.jpg" alt="work-1">
                <span class="span">${obj.title}</span>
                <p class="p">${obj.body}</p>
            `
            card.append(cards)
        })
    }catch (err) {
        console.error(err)
    }
}

cardFetch(ID)

