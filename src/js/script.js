  const catalogButton = document.querySelectorAll('.catalog__btn');
  const catalogAuto = document.querySelectorAll('.catalog__auto');

  catalogButton.forEach(function(element){
    element.addEventListener('click',open)
  })

  function open(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const contentActive = document.querySelectorAll(`.${button}`);

    catalogButton.forEach(function(item){
      item.classList.remove('catalog__btn-active')
    })

    target.classList.add('catalog__btn-active')

    catalogAuto.forEach(function(item){
      item.classList.remove('catalog__auto-active')
    });

    contentActive.forEach(function(item){
      item.classList.add('catalog__auto-active')
    })
  }

  const dargoButton = document.querySelectorAll('.dargo__btn');
  const dargoAuto = document.querySelectorAll('.dargo__auto');

  dargoButton.forEach(function(element){
    element.addEventListener('click',openSecondCard)
  })

  function openSecondCard(evt){
    const target = evt.currentTarget;
    const button = target.dataset.button;
    const dargoActive = document.querySelectorAll(`.${button}`);

    dargoButton.forEach(function(item){
      item.classList.remove('dargo__btn-active')
    })

    target.classList.add('dargo__btn-active')

    dargoAuto.forEach(function(item){
      item.classList.remove('dargo__auto-active')
    });

    dargoActive.forEach(function(item){
      item.classList.add('dargo__auto-active')
    })
  }


$(document).ready(function() {
  $(".fancybox").fancybox({
    type: "ajax"});
});

const menu = document.querySelector('.menu__stamp'),
    hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__hamburger-active');
        menu.classList.toggle('menu__stamp-active');
    });


