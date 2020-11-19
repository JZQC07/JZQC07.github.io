





//Add element with id="me", give it width: 100%, top: 0, onelementclick will give it a new random color 
const me = document.getElementById('me');
function randomColor() {
    return Math.floor(Math.random() * 255);
}

me.addEventListener('click', () => {
    me.style.backgroundColor = 'rgba('+randomColor() + ',' + randomColor() + ',' + randomColor() +')'
})