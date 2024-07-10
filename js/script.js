// //toggle icon navbar
// let menuIcon = document.querySelectorAll('#menu-icon');
// let navbar = document.querySelectorAll('.navbar');

// menuIcon.onclick = () => {
//   menuIcon.classList.toggle('bx-x');
//   navbar.classList.toggle('active');
// };

// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar');
// ketika hamburger menu di klik
document.querySelector('#menu-icon').onclick = () => {
  navbarNav.classList.toggle('active');
};

//Scroll Sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      //active navbar links
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      // active sections for animation on scroll
      sec.classList.add('show-animate');
    }
    // if want to use animation that repeat
    else {
      sec.classList.remove('show-animate');
    }
  });

  //Sticky Header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  navbarNav.classList.remove('active');

  // animation footer on scroll
  let footer = document.querySelector('footer');

  footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
};

// Send Email
const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const mess = document.getElementById('message');

function sendEmail() {
  const bodyMessage = 'Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}';
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'yogajebag24@gmail.com',
    Password: '08D4469BAA4F382E00E7EE3932A943EA04C9',
    To: 'yogajebag24@gmail.com',
    From: 'yogajebag24@gmail.com',
    Subject: subject.value,
    Body: bodyMessage,
  }).then((message) => alert(message));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  sendEmail();
});
