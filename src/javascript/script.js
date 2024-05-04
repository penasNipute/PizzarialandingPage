const  mobileMenu = document.getElementById('mobile_menu')
const  mobileBtn = document.getElementById('mobile_btn')
const icon = mobileBtn.getElementsByTagName('i')


window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const navItems = document.getElementsByClassName('nav-items')

  const scrollPosition = window.scrollY-96;


  sections.forEach((section,i) => {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    const sectionBottom = sectionTop + section.getBoundingClientRect().height;

    if (scrollPosition >= sectionTop && scrollPosition <= sectionBottom) {
      
      for(const navItem of navItems){
        navItem.classList.remove('active')
      }

      navItems[i].classList.add('active')
      navItems[i+3].classList.add('active')

      
    }
  });
})

function handleClick(){
  mobileMenu.classList.toggle('active')
   icon[0].classList.toggle('fa-x')
}