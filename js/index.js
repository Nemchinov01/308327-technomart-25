var write = document.querySelector(".btn-site-contacts"),
    popup_write = document.querySelector(".container-modal-write"),
    close_write = document.querySelector(".modal-close-write"),
    map = document.querySelector(".site-contacts-map"),
    popup_map = document.querySelector(".modal-map"),
    close_map = document.querySelector(".modal-close-map"),
    link_def = document.querySelectorAll(".services-item > a"),
    delivery = document.querySelector(".delivery"), 
    guarantee = document.querySelector(".guarantee"),
    credit = document.querySelector(".credit"), 
    bgc = document.querySelector(".delivery-link");

                                // Слайдер Сервисы
    for (i=0; i<=link_def.length-1; i++) {
        link_def[i].addEventListener("click", function(evt) {
            evt.preventDefault();   
        });
    };

    link_def[0].addEventListener("focus", function() {
        delivery.classList.remove("vissually-hidden");
        guarantee.classList.add("vissually-hidden");
        credit.classList.add("vissually-hidden");
    });

    link_def[1].addEventListener("focus", function() {   
        guarantee.classList.remove("vissually-hidden");
        delivery.classList.add("vissually-hidden");
        credit.classList.add("vissually-hidden");
        bgc.classList.remove("delivery-link");
    });

    link_def[2].addEventListener("focus", function() {
        credit.classList.remove("vissually-hidden");
        delivery.classList.add("vissually-hidden");
        guarantee.classList.add("vissually-hidden");
        bgc.classList.remove("delivery-link");
    });

                                // Напишите нам
    write.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_write.classList.add("modal-show");
    });

    close_write.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_write.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (popup_write.classList.contains("modal-show")) {
                evt.preventDefault();
                popup_write.classList.remove("modal-show");
            }
        }
    });

                                    // Карта
    map.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_map.classList.add("modal-show");
    });

    close_map.addEventListener("click", function (evt) {
        evt.preventDefault();
        popup_map.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if ( evt.keyCode === 27) {
            if (popup_map.classList.contains("modal-show")) {
                evt.preventDefault();
                popup_map.classList.remove("modal-show");
            }
        }
    });

