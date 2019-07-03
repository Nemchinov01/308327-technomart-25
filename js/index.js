var write = document.querySelector(".btn-site-contacts"),
    popup_write = document.querySelector(".container-modal-write"),
    close_write = document.querySelector(".modal-close-write"),
    map = document.querySelector(".site-contacts-map"),
    popup_map = document.querySelector(".modal-map"),
    close_map = document.querySelector(".modal-close-map");    

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

