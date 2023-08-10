var ls = gsap.timeline();


ls.from('.loader img', {
    scale: 0,
    duration: 2,
    opacity: 0
})
    .to('.loader', {
        top: -1000,
        duration: 3,
        opacity: 10
    })
    .from('.nav', {
        top: -100,
        duration: .5,
    }, "-=1s")
    .from('.box-1', {
        left: -1000,
        duration: 1.5,
    })
    .from('.box-2', {
        x: 10000,
        duration: 2,
        delay: -1
    })
    .from('.prImg', {
        x: 1000,
        duration: 2,
        rotate: 365
    });