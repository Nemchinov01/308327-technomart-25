var buy = document.querySelectorAll(".page-catalog-buy"),
    popup_buy = document.querySelector(".container-catalog-modal"),
    close_buy = document.querySelector(".modal-close-buy"),
    cart = document.querySelector(".main-header-order-item:nth-child(3)"),
    bookmark = document.querySelector(".main-header-order-item:nth-child(2)"),
    bookmark_link = document.querySelectorAll(".page-catalog-btn");

    for (i=0; i <= buy.length-1; i++) {            
        buy[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_buy.classList.add("modal-show");
        });

        close_buy.addEventListener("click", function (evt) {
            evt.preventDefault();
            popup_buy.classList.remove("modal-show");
            cart.classList.add("indicator"); 
         });
    };

    for (k=0; k <= bookmark_link.length-1; k++) {
        bookmark_link[k].addEventListener("click", function (evt) {
        evt.preventDefault();
        bookmark.classList.add("indicator");
        });
    };

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (popup_buy.classList.contains("modal-show")) {
                evt.preventDefault();
                popup_buy.classList.remove("modal-show");
            }
        };
    });

    
    