new Splide('.splide', {
    type: 'loop',
    drag: 'free',
    focus: 'center',
    perPage: 4,
    arrows: false,
    autoScroll: {
        speed: 2,
    },
}).mount(window.splide.Extensions);