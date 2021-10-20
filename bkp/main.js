let lua = document.getElementById('lua');
let bruxa = document.getElementById('bruxa');
let nuvem = document.getElementById('nuvem');
let morcego = document.getElementById('morcego');

window.addEventListener('scroll', function(){
    let value = window.scrollY;

    lua.style.right = value * 2 + 'px';
    lua.style.top = value * 1 + 'px';

    bruxa.style.left = value * 1.9 + 'px';
    bruxa.style.bottom = value * 2 + 'px';

    nuvem.style.left = value * 0.1 + 'px';

    morcego.style.right = value * 2 + 'px';
    morcego.style.bottom = value * 0.5 + 'px';
})