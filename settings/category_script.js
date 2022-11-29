document.addEventListener('DOMContentLoaded', async () => {
    const sections = document.querySelectorAll(".collapsed-section");
    sections.forEach(section => {
        let isActive = false;
        const trigger = section.querySelector(".collapsed-trigger");

        trigger.addEventListener("click", () => {
            if (isActive) {
                section.classList.remove("active")
                trigger.classList.remove("active")
            } else {
                section.classList.add("active")
                trigger.classList.add("active")
            }
            isActive = !isActive;
        })
    })
});