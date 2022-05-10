window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  backToTop()
  activeMenuAtCurrentSection(home)
  activeMenuAtCurrentSection(services)
  activeMenuAtCurrentSection(about)
}

function showNavOnScroll() {
  if (scrollY > 5) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

function backToTop() {
  if (scrollY > 280) {
    backToTopButton.classList.add('showButton')
  } else {
    backToTopButton.classList.remove('showButton')
  }
}

function activeMenuAtCurrentSection(section) {
  //Declarando a TargetLine (Linha Imaginário que percorre junto ao ScrollY)
  const targetLine = scrollY + innerHeight / 4
  //Declarando números da sessão.
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  //Comparando se a TargetLine passou dos limites das sessões.
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  const sectionEndPassedTargetLine =
    sectionTop + sectionHeight <= targetLine

  //Definindo limite da sessão para a TargetLine
  const sectionLimitsScroll =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionLimitsScroll) {
    menuElement.classList.add('active')
  }
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 500
}).reveal(`#home, 
#home img, 
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#contact,
#contact header,
#contact .content`)
