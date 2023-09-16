      const menuBar = document.querySelectorAll('.js-accordion')  
       function ativarMenu (){
          this.classList.toggle('ativo')
          this.nextElementSibling.classList.toggle('ativo')
       }

menuBar.forEach((item) =>{
        item.addEventListener('click' , ativarMenu)
       })

            
      function animacaoAoScroll(){
          const sections = document.querySelectorAll('.js-scroll')
          if(sections.length){
          const windowMetade = window.innerWidth * 0.5
      function animalScroll(){
        sections.forEach((sectionl) =>{
            const sectionTop = sectionl.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0; 
            if(isSectionVisible)sectionl.classList.add('ativo') 
            else sectionl.classList.remove('ativo')
            
        })
      }
      animalScroll()
      window.addEventListener('scroll' ,animalScroll)
    }}
animacaoAoScroll()

const item = document.querySelector('.js-accordion')
const func = function(){
    item.classList.toggle('ativo02')
}
item.addEventListener('click', func)



function initScrollSuave() {
    const linksInternos = document.querySelectorAll('a[href^="#"]');
  
    function scrollToSection(event) {
      event.preventDefault();
      const href = event.currentTarget.getAttribute('href');
      const section = document.querySelector(href);
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      return section
    }
  
    linksInternos.forEach((link) => {
      link.addEventListener('click', scrollToSection);
    });
  }
  initScrollSuave();