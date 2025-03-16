/* ========================== toggle style switcher =========================== */
const styleSwitcherToggle = document.querySelector(".stylecolor-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".stylecolor").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".stylecolor").classList.contains("open"))
    {
        document.querySelector(".stylecolor").classList.remove("open");
    }
})
