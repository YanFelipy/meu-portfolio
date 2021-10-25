 // Botôes:
 const btnMobile = document.getElementById('btn-mobile');
 const btnMob = document.getElementById('btn-mob');
 

 // Funções:

 function toggleMenu(event) {
     if (event.type === 'touchstart') event.preventDefault();

     const nav = document.getElementById('nav');
     nav.classList.toggle('active');

     const active = nav.classList.contains('active');
     event.currentTarget.setAttribute('aria-expanded', active);

     if (active) event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
     else event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

 }
 

 // Eventos:

 btnMobile.addEventListener('click', toggleMenu);
 btnMobile.addEventListener('touchstart', toggleMenu);
 btnMob.addEventListener('click', toggleMenu);
 btnMob.addEventListener('touchstart', toggleMenu);