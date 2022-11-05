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
    const wrapperElement = document.querySelector(".async-language-selector");

    wrapperElement.querySelector('.dropdown-toggle').textContent = current
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
});
