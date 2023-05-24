let upBtn = document.querySelector('.upbtn');
window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    if (scrolled > 300) {
        upBtn.style.display = 'block';
    } else {
        upBtn.style.display = 'none';
    }
  };
  upBtn.onclick = function () {
    window.scrollTo ( 0, 0 )
  };