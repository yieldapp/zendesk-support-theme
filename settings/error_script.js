const ERROR_PAGE_WRAPPER_CLASS = "error-page";
const DATA_ERROR_ATTRIBUTE_NAME = "data-error";
const NOT_FOUND_ERROR_KEY = "not_found";
const HOME_PAGE_LINK = "https://support.yield.app/hc/";

document.addEventListener('DOMContentLoaded', async () => {
  const locale = getCurrentLocale();
  const errorPageWrapper = document.querySelector(`.${ERROR_PAGE_WRAPPER_CLASS}`);

  if (errorPageWrapper) {
    const errorKey = errorPageWrapper.getAttribute(DATA_ERROR_ATTRIBUTE_NAME);

    if (errorKey === NOT_FOUND_ERROR_KEY) {
      if (window.location.href.startsWith(`${HOME_PAGE_LINK}${locale}/articles/`)) {
        window.location.href = `${HOME_PAGE_LINK}${locale}/`;

        return;
      }
    }

    errorPageWrapper.classList.remove("hidden")
  }
});
