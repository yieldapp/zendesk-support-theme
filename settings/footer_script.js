document.addEventListener('DOMContentLoaded', async () => {
    const locale = getCurrentLocale();

    document.querySelectorAll("a[data-location-href]").forEach(element => {
        const key = element.getAttribute("data-location-href");
        const href = element.getAttribute("href");
        const currentLocale = locale === "en-us" ? null : locale;
        if (href) {
            const newHref = href.split('/')
                .map(str => str === key ? currentLocale : str)
                .filter(item => item !== null)
                .join('/');
            element.setAttribute("href", newHref);
        }
    })

    document.querySelectorAll("a[data-location-query]").forEach(element => {
        const key = element.getAttribute("data-location-query");
        const href = element.getAttribute("href");
        const currentLocale = locale === "en-us" ? "en" : locale;
        if (href && currentLocale) {
            const { origin, pathname, search } = new URL(href);
            const searchParams = new URLSearchParams(search);
            searchParams.set(key, currentLocale);
            const newSearch = searchParams.toString();
            element.setAttribute("href", `${origin}${pathname}?${newSearch}`);
        }
    })

    document.querySelectorAll(`.locale_${locale}`).forEach(node => node.style.display = "block")
});