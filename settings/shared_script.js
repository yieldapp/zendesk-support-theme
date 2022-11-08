/* Syntetic data action click */
document.addEventListener("click", (event) => {
    const element = event.target
    const currentLanguage = getCurrentLocale();
    const checkElement = (node) => {
        if (!node || node.tagName.toLowerCase() === "html") {
            return;
        }
        if (node.matches("[data-action=request]")) {
            location.href = `/hc/${currentLanguage}/requests/new`
        } else {
            checkElement(node.parentNode)
        }
    }
    checkElement(element)
})

window.getCurrentLocale = () => {
    const linkParts = location.pathname.split("/");
    return linkParts[2] || "en-us";
}