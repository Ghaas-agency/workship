var d = new Date();
document.getElementsByClassName('year')[0].innerText = d.getFullYear() + " ";

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
}
