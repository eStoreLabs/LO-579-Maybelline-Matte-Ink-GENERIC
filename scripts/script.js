(() => {
    const swiper = new Swiper('#es-rc .es-swiper', {
        loop: false,
        autoHeight: false,

        pagination: {
            el: '#es-rc .es-swiper1-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '#es-rc .es-swiper1-button-next',
            prevEl: '#es-rc .es-swiper1-button-prev',
        },
    });
})()