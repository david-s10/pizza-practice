const btnHeader = document.querySelector('.btn-menu__header');
const popupMenu = document.querySelector('.popup-menu');
const popupClose = document.querySelectorAll('.popup__btn-close');
if(btnHeader) {



    btnHeader.addEventListener('click', function(e) {
        document.body.classList.add('is-lock');
        popupMenu.classList.add('is-active');
        
    });

    


    
}

popupClose.forEach(function(el) {

    el.addEventListener('click', function(ev) {

      ev.stopPropagation();

      popupMenu.classList.remove('is-active');
      popupFormMenu.classList.remove('is-active');
      document.body.classList.remove('is-lock');
    });
});


// ------------------ scroll start --------------

const menuLinks = document.querySelectorAll('.navigate[data-goto]');
    if (menuLinks.length > 0) {
        menuLinks.forEach(menuLink => {
            menuLink.addEventListener('click', onMenuLinkClick);
        });

        function onMenuLinkClick(e) {
            menuLink = e.target;
            if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

                if(popupMenu.classList.contains('is-active')) {
                    document.body.classList.remove('is-lock');
                    popupMenu.classList.remove('is-active');
                }
                

            window.scrollTo({
            top:gotoBlockValue,
            behavior: "smooth"
            });
            
            e.preventDefault();

            }
        }
    }

// ---------------scroll end -----------------------


// -------------- filter ------------------------

const catalogFilter = document.querySelectorAll('.catalog__item');
const navSelect = document.querySelectorAll('.catalog-nav__btn')

document.querySelector('.catalog-nav').addEventListener('click', event=> {
    if(event.target.tagName !== 'BUTTON') return false;

    let filterMenu = event.target.dataset['filter'];



  

    catalogFilter.forEach( elem => {
        elem.classList.remove('hide')
        if(!elem.classList.contains(filterMenu) && filterMenu !== 'all') {
            elem.classList.add('hide')
        }
    });

    console.log(filterMenu)
});




const btnAll = document.querySelector('.catalog-nav__btn_all')
const btnMushrooms = document.querySelector('.catalog-nav__btn_mushrooms')
const btnMeat = document.querySelector('.catalog-nav__btn_meat')
const btnChease = document.querySelector('.catalog-nav__btn_chease')


      
    btnAll.addEventListener('click', function(e) {

      btnAll.classList.add('is-active');

      if(btnAll.classList.contains('is-active')) {
        btnMeat.classList.remove('is-active');
        btnMushrooms.classList.remove('is-active');
        btnChease.classList.remove('is-active');
    
    }
      

    });


  
    btnMushrooms.addEventListener('click', function(e) {

      btnMushrooms.classList.add('is-active');

      if(btnMushrooms.classList.contains('is-active')) {
        btnMeat.classList.remove('is-active');
        btnChease.classList.remove('is-active');
        btnAll.classList.remove('is-active');
    
    }
      

    });

    btnMeat.addEventListener('click', function(e) {

      btnMeat.classList.add('is-active');

      if(btnMeat.classList.contains('is-active')) {
        btnChease.classList.remove('is-active');
        btnMushrooms.classList.remove('is-active');
        btnAll.classList.remove('is-active');
    
    }
      

    });

    btnChease.addEventListener('click', function(e) {

      btnChease.classList.add('is-active');
      
      if(btnChease.classList.contains('is-active')) {
        btnMeat.classList.remove('is-active');
        btnMushrooms.classList.remove('is-active');
        btnAll.classList.remove('is-active');
    
    }
      

    });



    let popupForm = document.querySelectorAll('.product__btn')
    let popupFormMenu = document.querySelector('.popup-order')

    popupForm.forEach(function(el) {
       
        el.addEventListener('click', function(ev) {
       
          ev.stopPropagation();
          
          popupFormMenu.classList.add('is-active');
        });
    });
    





    
  