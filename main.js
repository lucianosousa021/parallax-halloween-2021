let lua = document.getElementById('lua');
let bruxa = document.getElementById('bruxa');
let nuvem = document.getElementById('nuvem');
let morcego = document.getElementById('morcego');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    lua.style.right = value * .1 + '%';
    lua.style.top = value * 0.09 + '%';

    bruxa.style.left = value * 0.15 + '%';
    bruxa.style.bottom = value * 0.17 + '%';

    nuvem.style.left = value * 0.04 + '%';

    morcego.style.right = value * 0.2 + '%';
    morcego.style.bottom = value * 0.1 + '%';
})