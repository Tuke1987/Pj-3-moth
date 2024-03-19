const personsJSON = document.querySelector('.persons')

const persons = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "persons.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.addEventListener('load', () => {
        const data = JSON.parse(request.response)
        data.forEach((person) => {
            const personsCard = document.createElement('div')
            personsCard.setAttribute('class', 'person_card')
            personsCard.innerHTML = `
                <div class="person_photo">
                    <img src="${person.photo}"  alt="${person.name}">
                </div>
                <h3>${person.name}</h3>  
                <span>age: ${person.age}</span>
            `
            personsJSON.append(personsCard)
        })
    })
}
persons()