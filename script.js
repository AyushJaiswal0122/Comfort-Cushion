let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');
let cmenu = document.querySelector('#closedash');
menu.onclick = () =>{
    header.classList.toggle('active');
}
cmenu.onclick=()=>{
    header.classList.remove('active');
}
window.onscroll = () =>{
    header.classList.remove('active');
}
