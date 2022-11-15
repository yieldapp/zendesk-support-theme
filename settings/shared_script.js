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

window.getFormattedLocale = (locale) => {
    switch (locale) {
        case "en-us": return "en"
        case "zh-cn": return "cn"
        case "zh-tw": return "tw"
        default: return locale
    }
}

const getLocales = async () => await Promise.all([
    fetch('/api/v2/locales/public'),
    fetch('/api/v2/help_center/locales'),
])
    .then(([allLocalesData, hcLocalesData]) =>
        Promise.all([allLocalesData.json(), hcLocalesData.json()])
    )
    .then(([allLocales, hcLocales]) => hcLocales.locales.map(hcL =>
            allLocales.locales.find(l => l.locale.toLowerCase() === hcL.toLowerCase())
        )
    );


document.addEventListener('DOMContentLoaded', async () => {
    const locales = await getLocales();
    const current = getCurrentLocale();
    const formattedLanguage = getFormattedLocale(current);
    const wrapperElementList = document.querySelectorAll(".async-language-selector");

    wrapperElementList.forEach(wrapperElement => {
        const name = wrapperElement.getAttribute("data-name-locale");
        wrapperElement.querySelector('.dropdown-toggle').textContent =
            name
                ? name.split(' (')[0]
                : formattedLanguage;
        wrapperElement.querySelector('.dropdown-menu').innerHTML =
            locales.reduce((html, { rtl, name, locale }) => {
                if (locale.toLowerCase()  === current.toLowerCase() ) {
                    return html;
                }
                const formattedPathname = location.pathname
                    .split('/')
                    .map(part => part.toLowerCase() === current.toLowerCase() ?
                        locale.toLowerCase() :
                        part.toLowerCase())
                    .join('/');
                const decodedUrl = encodeURIComponent(`${formattedPathname}${location.search}`);
                const url = `/hc/change_language/${locale.toLowerCase()}?return_to=${decodedUrl}`
                return html + `<a href="${url}" dir="${rtl ? "rtl" : "ltr"}" rel="nofollow" role="menuitem">${name}</a>`
            }, "")
    })
});
