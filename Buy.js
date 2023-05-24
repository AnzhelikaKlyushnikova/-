
let Buys = document.querySelectorAll('.buy')
let popup = document.querySelector('.popup')
let close = document.querySelector('.close')
for(let Buy of Buys){
Buy.onclick = function() {
    popup.style.display="block"
}

close.onclick = function() {
    popup.style.display="none"
}
}
