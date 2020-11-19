const me = document.getElementById('me');
function randomColor() {
    return Math.floor(Math.random() * 255);
}

me.addEventListener('click', () => {
    me.style.backgroundColor = 'rgba('+randomColor() + ',' + randomColor() + ',' + randomColor() +')'
})