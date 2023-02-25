window.addEventListener("mousemove", (event) => {
    setTimeout(() => {
        outer_circle.setAttribute("style", `transform:translate(${event.clientX - 20}px,${event.clientY - 20}px)`);
    }, 100)
    setTimeout(() => {
        innner_dot.setAttribute("style", `transform:translate(${event.clientX - 5}px,${event.clientY - 5}px)`);
    }, 200)
})
AOS.init();