(function () {
    // burger
    const burger = document.querySelector(".burger")
    const menu = document.querySelector(".header__nav")

    // header links
    const links = document.querySelectorAll(".anchor")


    burger.addEventListener("click", function () {
        menu.classList.toggle("active")
        this.classList.toggle("burger--active")
    })


    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault()

            const href = this.getAttribute("href").substring(1)
            const scrollTarget = document.getElementById(href)
            const topOffset = window.innerWidth < 768 ? 80 : 78
            const elementPosition = scrollTarget.getBoundingClientRect().top
            const offSetPosition = elementPosition - topOffset

            window.scrollBy({
                top: offSetPosition,
                behavior: "smooth"
            })

            if (window.innerWidth < 768) {
                menu.classList.toggle("active")
                burger.classList.toggle("burger--active")
            }
        })
    })
}())