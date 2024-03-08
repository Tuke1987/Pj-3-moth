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

const element = document.querySelector('.child_block')
const duration = 1000
const distance = 100

let startAnimation = null

requestAnimationFrame(function measure (time){
    if (startAnimation) {
        startAnimation = time
    }

    const progress = (time - startAnimation) / duration

    const translate = progress * distance

    element.style.transform = `transLatex(${translate}px)`

    if (progress < 4.46) {
        requestAnimationFrame(measure)
    }
})



















