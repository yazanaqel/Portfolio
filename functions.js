document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.setAttribute("data-theme", "light");
  
      // Get our button switcher
      var themeSwitcher = document.getElementById("theme-switcher");
  
      // When our button gets clicked
      themeSwitcher.onclick = function() {
        // Get the current selected theme, on the first run
        // it should be `light`
        var currentTheme = document.documentElement.getAttribute("data-theme");
  
        // Switch between `dark` and `light`
        var switchToTheme = currentTheme === "dark" ? "light" : "dark"
  
        // Set our currenet theme to the new one
        document.documentElement.setAttribute("data-theme", switchToTheme);
  
        if(switchToTheme=currentTheme==="light"){
          themeSwitcher.innerHTML="{<i class='bx bxs-moon'></i>}";
        }
        else{
          themeSwitcher.innerHTML="{<i class='bx bxs-sun'></i>}";
        }
      }
    });
  
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  
  menuIcon.onclick=()=>{
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  };
  
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');
  
  window.onscroll=()=>{
      sections.forEach(sec=>{
          let top = window.scrollY;
          let offset = sec.offsetTop-150;
          let height = sec.offsetHeight;
          let id = sec.getAttribute('id');
  
          if(top >= offset && top < offset+height ){
              navLinks.forEach(links=>{
                  links.classList.remove('active');
                  document.querySelector('header nav a[href*='+id+']').classList.add('active');
              });
          };
  
      });
  
      let header = document.querySelector('header');
  
      header.classList.toggle('sticky',window.scrollY>100);
  
  
      menuIcon.classList.remove('bx-x');
      navbar.classList.remove('active');
  
  };
  
  ScrollReveal({
      reset: true,
      distance:'80px',
      duration:2000,
      delay:200
  });
  ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
  ScrollReveal().reveal('.home-img, .services-container, .portfoilo-box, .contact form', { origin:'bottom' });
  ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
  ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });
  
  
  
  
  
  const form = document.querySelector('.mailForm');
  
  function SendMessage(e){
    e.preventDefault();
  
    name = document.querySelector('.txtName');
    tel = document.querySelector('.txtTel');
    sub = document.querySelector('.txtSubject');
    email = document.querySelector('.txtMail');
    msg = document.querySelector('.txtMessage');
  
  Email.send({
  SecureToken : "5564c1bf-e522-4572-9320-55559193007d",
  To : 'yazan.aqel93@gmail.com',
  From : 'yazanakel107@gmail.com',
  Subject : sub.value,
  Body : name.value + '<br><hr/>' + email.value + '<br><hr/>' + msg.value + '<br><hr/>' + tel.value
  }).then(
  message => alert('thank you for emailing me :)'));
  }
  
  form.addEventListener('submit',SendMessage);
