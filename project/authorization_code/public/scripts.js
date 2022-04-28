const title = document.getElementById('welcome')
const message_1 = "Welcome to our rush API project"

function typewriter(word, index){
    if(index < word.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(message_1, index +1)
        }, 200)
    }
}
setTimeout(() => {
    typewriter(message_1, 0)
}, 500);