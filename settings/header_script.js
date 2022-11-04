const getLocales = async () => await Promise.all([
    fetch('/api/v2/locales/public'),
    fetch('/api/v2/help_center/locales'),
    fetch('/api/v2/locales/current/') // TODO: API did not work
])
    .then(([allLocalesData, hcLocalesData, currentLocaleData]) =>
        Promise.all([allLocalesData.json(), hcLocalesData.json(), currentLocaleData.json()])
    )
    .then(([allLocales, hcLocales, current]) =>
        ({
            locales: hcLocales.locales.map(hcL =>
                allLocales.locales.find(l => l.locale.toLowerCase() === hcL.toLowerCase())
            ),
            current: current.locale
        })
    );


document.addEventListener('DOMContentLoaded', async () => {
    const { current, locales } = await getLocales();
    const wrapperElement = document.querySelector(".async-language-selector");

    wrapperElement.querySelector('.dropdown-toggle').textContent = current.locale
    wrapperElement.querySelector('.dropdown-menu').innerHTML =
        locales.reduce((html, { rtl, name, locale }) => {
            const formattedPathname = location.pathname
                .split('/')
                .map(part => part.toLowerCase() === current.locale.toLowerCase() ?
                    locale.toLowerCase() :
                    part.toLowerCase())
                .join('/');
            const decodedUrl = encodeURIComponent(`${formattedPathname}${location.search}`);
            const url = `/hc/change_language/${locale.toLowerCase()}?return_to=${decodedUrl}`
            return html + `<a href="${url}" dir="${rtl ? "rtl" : "ltr"}" rel="nofollow" role="menuitem">${name}</a>`
        }, "")
});
