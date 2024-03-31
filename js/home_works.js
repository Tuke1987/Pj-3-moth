const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /\w@gmail.com$/

gmailButton.addEventListener('click', ()=> {
    if (regExp.test(gmailInput.value.trim())){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else  {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
})


// const childBlock = document.getElementsByClassName('.child_block')
// childBlock.style.left = '50px'
//
// const startTime = new Date().getTime()
//
// let moveLeft = function () {
//     const currTime = new Date().getTime()
//     const newLeft = (50 + ((currTime - startTime) /1000) * 30)
//     childBlock.style.left = newLeft + 'px'
//     if (newLeft < 449){
//         window.requestAnimationFrame(moveLeft);
//     }
//
// }
//
// moveLeft();

// const element = document.querySelector('.child_block')
// const duration = 1000
// const distance = 100
//
// let startAnimation = null
//
// requestAnimationFrame(function measure (time){
//     if (startAnimation) {
//         startAnimation = time
//     }
//
//     const progress = (time - startAnimation) / duration
//
//     const translate = progress * distance
//
//     element.style.transform = `transLatex(${translate}px)`
//
//     if (progress < 4.47) {
//         requestAnimationFrame(measure)
//     }
// })


const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')


let positionX = 0
let positionY = 0





const  maxOffsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const  maxOffsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight





const moveBlock = () => {
    if (positionX < maxOffsetWidth && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 4)
    }else if (positionX === maxOffsetWidth && positionY < maxOffsetHeight) {
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 4)
    }else if (positionY === maxOffsetHeight && positionX > 0) {
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 4)
    }else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 4)
    }
}

moveBlock()


const buttonStart = document.querySelector('#start')
const buttonStop = document.querySelector('#stop')
const buttonReset = document.querySelector('#reset')
const secondsValue = document.querySelector('#seconds')

let seconds = 0
let interval

buttonStart.onclick = () => {
        clearInterval(interval)
        interval = setInterval(() => {
            seconds++
            secondsValue.innerHTML = seconds
        }, 1000)
}

buttonStop.onclick = () => {
    clearInterval(interval)
}

buttonReset.onclick = () => {
    clearInterval(interval)
    seconds = 0
    secondsValue.innerHTML = seconds
}



















