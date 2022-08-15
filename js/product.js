;(function() {
    var catalog = document.querySelector('.catalog');

    if(catalog === null) {
        return
    }


    var changeProductSize = function(target) {
        console.log(target);
    };

    catalog.addEventListener('click', function(e) {
        var target = e.target;
        
        if (target.classList.contains('product__size')) {
            e.preventDefault();
            changeProductSize(target);
        }
    });

})();
