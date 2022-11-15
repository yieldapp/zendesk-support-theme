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

    // <!-- TrustBox script -->
    const widgetWrapper = document.querySelectorAll(".trustpilot-wrapper");
    widgetWrapper.forEach(node => {
        node.innerHTML = `
            <div
                class="trustpilot-widget"
                data-locale="${locale}"
                data-template-id="53aa8807dec7e10d38f59f32"
                data-businessunit-id="613fa057350776001de32082"
                data-style-height="120px"
                data-style-width="200px"
                data-theme="light"
            >
                <a href="https://www.trustpilot.com/review/yield.app" target="_blank" rel="noopener">Trustpilot</a>
            </div>
        `
    });

    const script = document.createElement("script");
    script.setAttribute("src", "//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js");
    script.setAttribute("async", "");
    script.setAttribute("type", "text/javascript");
    document.querySelector("head").appendChild(script)
    // <!-- End TrustBox script -->

    document.querySelectorAll(`.locale_${locale}`).forEach(node => node.style.display = "block")
});