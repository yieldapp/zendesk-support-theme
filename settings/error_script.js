const ERROR_PAGE_WRAPPER_CLASS = "error-page";
const DATA_ERROR_ATTRIBUTE_NAME = "data-error";
const NOT_FOUND_ERROR_KEY = "not_found";
const HOME_PAGE_LINK = "https://support.yield.app/hc/";

const isCurrentLinkFromList = list => list.some(link => window.location.href.startsWith(link))

document.addEventListener('DOMContentLoaded', async () => {
  const locale = getCurrentLocale();
  const errorPageWrapper = document.querySelector(`.${ERROR_PAGE_WRAPPER_CLASS}`);
  const links = [
    `${HOME_PAGE_LINK}${locale}/articles/`,
    `${HOME_PAGE_LINK}${locale}/categories/`,
    `${HOME_PAGE_LINK}${locale}/sections/`
  ]

  if (errorPageWrapper) {
    const errorKey = errorPageWrapper.getAttribute(DATA_ERROR_ATTRIBUTE_NAME);

    if (errorKey === NOT_FOUND_ERROR_KEY) {
      if (isCurrentLinkFromList(links)) {
        window.location.href = `${HOME_PAGE_LINK}${locale}/`;

        return;
      }
    }

    errorPageWrapper.classList.remove("hidden")
  }
});
