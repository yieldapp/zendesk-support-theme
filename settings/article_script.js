document.addEventListener('DOMContentLoaded', async () => {
    const isSighed = window.isSighedUser()
    if (!isSighed) {
        document.querySelector(".article-votes").classList.add("hidden")
    }
});