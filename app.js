const menuBtn = document.getElementById('menuBtn');
const aside = document.querySelector('aside');


menuBtn.addEventListener('click', function(){

    aside.classList.toggle('active');

})