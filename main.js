(function() {

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  on('click', '.mobile-nav-toggle', function(_e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('fa-list')
    this.classList.toggle('fa-x')
  })

  const gLightbox = GLightbox({
    selector: '.glightbox'
  });

  const galelryLightbox = GLightbox({
    selector: '.galelry-lightbox'
  });

})()