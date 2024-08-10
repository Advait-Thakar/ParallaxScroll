let text = document.getElementById('text')
let sun = document.getElementById('sun')
let cloud1 = document.getElementById('cloud1')
let cloud2 = document.getElementById('cloud2')
let cloud3 = document.getElementById('cloud3')

window.addEventListener('scroll', ()=>{
    let value = window.scrollY();

    text.style.marginTop = value*2.5 + 'px';
    sun.style.top = value*2.5 + 'px';
    cloud1.style.left = value*2.5 + 'px';
    text.style.marginTop = value*2.5 + 'px';
    text.style.marginTop = value*2.5 + 'px';
    text.style.marginTop = value*2.5 + 'px';
})