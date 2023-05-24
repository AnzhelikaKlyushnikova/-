let Sbm = document.querySelector('.sbm');
let Ready = document.querySelector('.ready');
let Order = document.querySelector('.order')
Sbm.onclick = function() {
    Ready.style.display="block"
    Order.style.display="none"
    Sbm.style.display="none"
};