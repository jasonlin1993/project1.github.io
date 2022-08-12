// 輪轉圖片按鈕

// 取得標籤物件,建立一個【常數】名為buttons,選取【物件】名為data-carousel-button
// querySelectorAll method returns all elements that matches a CSS selector(s).
const buttons = document.querySelectorAll("[data-carousel-button]")
// 
buttons.forEach(button => {
    // 
    button.addEventListener("click", () => {

        // 
        const offset = button.dataset.carouselButton === "next" ? 1 : -1

        const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

        const activeSlide = slides.querySelector("[data-active]")

        let newIndex = [...slides.children].indexOf(activeSlide) + offset

        if (newIndex < 0) newIndex = slides.children.length - 1

        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true

        delete activeSlide.dataset.active
    })
})
