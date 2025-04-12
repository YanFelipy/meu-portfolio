 // Botões:

 const btnMobile = document.getElementById('btn-mobile');
 const btnMob = document.getElementById('btn-mob');
 const btnDown1 = document.getElementById('btn-down1');
 const btnDown2 = document.getElementById('btn-down2');

 // Funções:

 function toggleMenu (event) {
     if (event.type === 'touchstart') event.preventDefault();

     const nav = document.getElementById('nav');
     nav.classList.toggle('active');

     const active = nav.classList.contains('active');
     event.currentTarget.setAttribute('aria-expanded', active);

     if (active) event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
     else event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

 }
 function toggleSkillFront (event) {
    if (event.type === 'touchstart') event.preventDefault();

    const frontskills = document.getElementById('tech-skillsfront');
    frontskills.classList.toggle('active');
   
    const active = frontskills.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

      if (active) event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    else event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

}

function toggleSkillBack (event) {
    if (event.type === 'touchstart') event.preventDefault();

    const backskills = document.getElementById('tech-skillsback');
    backskills.classList.toggle('active');

     const active = backskills.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if (active) event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    else event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

}





 // Eventos:

 btnMobile.addEventListener('click', toggleMenu);
 btnMobile.addEventListener('touchstart', toggleMenu);
 btnMob.addEventListener('click', toggleMenu);
 btnMob.addEventListener('touchstart', toggleMenu);

 btnDown1.addEventListener('click', toggleSkillFront);
 btnDown1.addEventListener('touchstart', toggleSkillFront);
 
 btnDown2.addEventListener('click', toggleSkillBack);
 btnDown2.addEventListener('touchstart', toggleSkillBack);