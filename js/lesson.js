// PhHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click', () => {
    if (regExp.test(phoneInput.value.trim())) {
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    } else {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
})


// TAB SLIDER

const tabsParent = document.querySelector('.tab_content_items')
const tabContent = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')

const hideTabContent = () => {
    tabContent.forEach((content) => {
        content.style.display = 'none'
    })
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContent[index].style.display = 'block'
    tabs[index].classList.add('tab_content_item_active')
}


hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabs.forEach((tab, tabIndex) => {
            if (event.target === tab) {
                hideTabContent()
                showTabContent(tabIndex)
            }
        })
    }
}


let index = 0


const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > tabs.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}

autoSlider(index)


// CONVERTER


const somInput = document.querySelector('#som')
const usdInput = document.querySelector('#usd')
const eurInput = document.querySelector('#eur')


const converter = (element, targetElement, eur, current) => {
    element.oninput = async () => {
        try {
        const response = await fetch('../data/converter.json')
        const data = await response.json()
            switch (current) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2)
                    eur.value = (element.value / data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    eur.value = (element.value * data.usdEur).toFixed(2)
                    break
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2)
                    eur.value = (element.value * data.eurUsd).toFixed(2)
                    break
                default:
                    break
            }
            element.value === '' && (targetElement.value = '')
            element.value === '' && (eur.value = '')
        }catch (error) {
            console.log(error)
        }
    }
}

converter(somInput, usdInput, eurInput, 'som')
converter(usdInput, somInput, eurInput, 'usd')
converter(eurInput, somInput, usdInput, 'eur')

// CARD SWITCHER

const cardBlock = document.querySelector('.card')
const btnPrev = document.querySelector('#btn-prev')
const btnNext = document.querySelector('#btn-next')

let count = 1



const cardSwitcher  = async (number) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
        const data = await response.json()
        cardBlock.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `

    }catch (e) {
        console.error(e)
    }
}


btnNext.onclick = () => {
    count++
    if (count > 200) {
        count = 1
    }
    cardSwitcher(count)
}
btnPrev.onclick = () => {
    count--
    if (count < 1) {
        count = 200
    }
    cardSwitcher(count)
}


cardSwitcher(count)


const fetchExample = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
fetchExample()

// WEATHER SEARCH

const searchInput = document.querySelector('.cityName')
const city = document.querySelector('.city')
const temp = document.querySelector('.temp')

// query params

const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const URL = 'http://api.openweathermap.org'


const citySearch = () => {
    searchInput.oninput = async (event) => {
        try {
            const response = await fetch(`${URL}/data/2.5/weather?q=${event.target.value}&appid=${API_KEY}`)
            const data = await response.json()
            city.innerHTML = data.name ? data.name : 'Город не найден...'
            temp.innerHTML = data?.main?.temp ? Math.round(data?.main?.temp - 273.15) + '&deg;C' : '...'
        } catch (err) {
            console.log(err)
        }
    }
}

citySearch()

