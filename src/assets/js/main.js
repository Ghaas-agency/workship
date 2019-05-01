var d = new Date();
document.getElementsByClassName('year')[0].innerText = d.getFullYear() + " ";
var menuToggle = true;
var headerList = document.getElementById('header-menu-list');

window.onclick = function(e) {
  if (e.target.className.indexOf('index-faq__item') !== -1 || 
  e.target.parentElement.className.indexOf('index-faq__item') !== -1 ||
  e.target.parentElement.parentElement.className.indexOf('index-faq__item') !== -1) {

    var parent = e.target.closest('.index-faq__item');
    if (parent.className === 'index-faq__item') {
      parent.className = "index-faq__item index-faq__item--active";
    } else if (parent.className === 'index-faq__item index-faq__item--active') {
      parent.className = "index-faq__item";
    }
  }

  if (e.target.className === 'nav-menu-icon') {
    if (menuToggle) {
      headerList.style.display = "block";
      menuToggle = false;
      e.target.src = "assets/img/close.svg";
    } else {
      headerList.style.display = "none";
      menuToggle = true;
      e.target.src = "assets/img/menu.svg";
    }
  }
}

/* Smooth scroll. */
if (typeof SmoothScroll !== 'undefined') {
  var scroll = new SmoothScroll('a[href*="#"]', {
    offset: function(anchor, toggle) {
      if (anchor.id === 'advantage') {
        return -200;
      } else {
        return 0;
      }
    },
    updateURL: false,
    easing: 'easeInOutCubic',
    speed: 600,
	  speedAsDuration: true,
  });
}
