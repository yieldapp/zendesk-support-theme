document.addEventListener('DOMContentLoaded', async () => {
    document.querySelectorAll("a[data-location-href]").forEach(element => {
        const key = element.getAttribute("data-location-href");
        const href = element.getAttribute("href");
        const rawCurrentLocale = getCurrentLocale();
        const currentLocale = rawCurrentLocale === "en-us" ? "en" : rawCurrentLocale;
        if (href && currentLocale) {
            const newHref = href.split('/').map(str => str === key ? currentLocale : str).join('/');
            element.setAttribute("href", newHref);
        }
    })
});