const items = Array.from(document.querySelectorAll(".item"));

items.forEach(item => {
    item.addEventListener("click", function () {
        items.forEach(item => {
            item.classList.remove("active");
        })
        this.classList.add("active");
    })
})