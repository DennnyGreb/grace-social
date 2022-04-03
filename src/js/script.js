// $(window).scroll(function () {
//   if ($(document).scrollTop() > 600 && $("#myModal").attr("displayed") === "false") {
//       $('#myModal').modal('show');
//       $("#myModal").attr("displayed", "true");
//   }
// });

$(document).ready(function() {
//   /* Burger menu trigger */
//   var menuBurger = document.getElementById('menu-burger');
//   var overlay = document.getElementById('menu-modal');

//   menuBurger.addEventListener('click', function() {
//     if (!this.classList.contains('close')) {
//       this.classList.add('close');
//       overlay.classList.add("overlay");
//       document.body.setAttribute(
//         'style',
//         'overflow: hidden; width: 100%;'
//       );
//     } else {
//       this.classList.remove('close');
//       overlay.classList.remove("overlay");
//       document.body.removeAttribute('style');
//     }
//   });

//   overlay.addEventListener('click', function() {
//     console.log('Fire');
//     if (menuBurger.classList.contains('close')) {
//       console.log('Fire 2');
//       menuBurger.classList.remove('close');
//       this.classList.remove("overlay");
//       document.body.removeAttribute('style');
//     }
//   });
//   /* ------- */

  $('.coming__slider').slick({
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    arrows: false,
  });

  var clickEvent = function() {
    var linkClosed = this.classList.contains('closed');
    if (linkClosed) {
        this.innerHTML = "Згорнути";
        this.previousElementSibling.classList.remove("hide-content");
        this.previousElementSibling.classList.add("show-content");
        this.classList.remove('closed');
    }
    else {
        this.innerHTML = "Розгорнути";
        this.previousElementSibling.classList.remove("show-content");
        this.previousElementSibling.classList.add("hide-content");
        this.classList.add('closed');
    }
  };

  var elements = document.getElementsByClassName("show-more");

  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', clickEvent, false);
  }
});
