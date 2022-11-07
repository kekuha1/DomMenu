function hideNumbers(){
document.querySelector('#Numbers').style.display='none';
document.querySelector('#Letters').style.display='block';
}
function hideLetters(){
    document.querySelector('#Numbers').style.display='block';
    document.querySelector('#Letters').style.display='none';
    }

function toggleMenu() {
    const menu = document.querySelector('#menu');
    if(menu.style.display === 'none'
        )
        menu.style.display = 'flex';
        else 
        menu.style.display = 'none'
}