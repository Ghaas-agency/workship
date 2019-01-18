var d = new Date();
document.getElementsByClassName('year')[0].innerText = d.getFullYear() + " ";
var menuToggle = true;
var headerList = document.getElementById('header-menu-list');

window.onclick = function(e) {
  if (e.target.parentElement.className === 'index-faq__item--toggle') {
    var parent = e.target.parentElement;
    var text = parent.parentElement.getElementsByClassName('index-faq__item--answer')[0];
    var img = parent.firstChild;
    if (text.style.display === 'none') {
      text.style.display = 'block';
      img.src = 'assets/img/arrow-up.svg';
    } else {
      text.style.display = 'none';
      img.src = 'assets/img/arrow-down.svg';
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
