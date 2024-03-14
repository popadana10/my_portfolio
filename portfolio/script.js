const header = document.querySelector('header');
const backToTop = document.querySelector('#backToTop');
const mobButton = document.querySelector('.mobile');
const nav = document.querySelector('nav ul');
const menuItems = document.querySelectorAll('nav ul li a');
const menu = document.querySelector('.responsive');


window.onscroll = function () {
  scrollFunction();
};

const scrollFunction = () => {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backToTop.style.display = 'block';
      header.classList.add('bg');
    } else {
      backToTop.style.display = 'none';
      header.classList.remove('bg');
    }
  };


  const toggleMenu = () => {
    nav.classList.toggle('responsive');
  };

  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        responsive.classList.remove('active');
    }
});

backToTop.addEventListener('click', () => {
  document.body.scrollTop = 0; // for Safari
  document.documentElement.scrollTop = 0; // Chrome, FF and others
  // header.style.backgroundColor = 'orange';
  header.classList.toggle('bg');
});

mobButton.addEventListener('click', toggleMenu);
menuItems.forEach((item) => item.addEventListener('click', toggleMenu));
