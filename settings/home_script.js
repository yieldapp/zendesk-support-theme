const MAIN_CATEGORY_ID = 10589460627857;
const SEARCH_MODE = "sectionsByCategories" // "sectionsByCategories" | "articlesBySections" | "articlesByCategories"
const PAGE_SIZE = 100;

const fetchSections = (locale) => {
    return fetch(`/api/v2/help_center/${locale}/sections`)
        .then(data => data.json())
        .then(formattedData => formattedData.sections);
}

const fetchArticlesBySection = (section, locale) => {
    return fetch(`/api/v2/help_center/${locale}/sections/${section.id}/articles?page[size]=${PAGE_SIZE}`)
        .then(a => a.json())
        .then(formattedData => formattedData.articles);
}

const fetchCategories = (locale) => {
    return fetch(`/api/v2/help_center/${locale}/categories`)
        .then(a => a.json())
        .then(formattedData => formattedData.categories);
}

const fetchArticlesByCategory = (category, locale) => {
    return fetch(`/api/v2/help_center/${locale}/categories/${category.id}/articles?page[size]=${PAGE_SIZE}`)
        .then(a => a.json())
        .then(formattedData => formattedData.articles);
}

const fetchSectionsByCategory = (category, locale) => {
    return fetch(`/api/v2/help_center/${locale}/categories/${category.id}/sections?page[size]=${PAGE_SIZE}`)
        .then(a => a.json())
        .then(formattedData => formattedData.sections);
}

document.addEventListener('DOMContentLoaded', async () => {
    const locale = getCurrentLocale();
    const sectionsWrapperElement = document.querySelector(".help-center-articles")

    const crateLinkElement = (item) => {
        const linkElement = document.createElement("a");
        linkElement.classList.add("help-center-section-articles-item")
        linkElement.textContent = SEARCH_MODE === "sectionsByCategories" ? item.name : item.title;
        linkElement.setAttribute("href", item.html_url);
        return linkElement;
    }

    const createAccordionElement = (item) => {
        let isActive = false;
        let isLoaded = false;
        const sectionElement = document.createElement("div");
        const sectionNameElement = document.createElement("div");
        const sectionArrowElement = document.createElement("div");
        const sectionArticlesElement = document.createElement("div");
        sectionElement.classList.add("help-center-section");
        sectionNameElement.classList.add("help-center-section-name", "arrow-bg");
        sectionArrowElement.classList.add("help-center-section-arrow");
        sectionArticlesElement.classList.add("help-center-section-articles");

        sectionNameElement.textContent = item.name;

        sectionElement.append(sectionNameElement, sectionArticlesElement);

        sectionElement.addEventListener("click", async () => {
            isActive = !isActive;
            sectionElement.classList.toggle('active');
            sectionNameElement.classList.toggle('active');
            if (isLoaded) {
                return;
            }
            const fetchList =
                SEARCH_MODE === "sectionsByCategories" ? fetchSectionsByCategory :
                    SEARCH_MODE === "articlesBySections" ? fetchArticlesBySection :
                        fetchArticlesByCategory;
            const list = await fetchList(item, locale);
            const listElements = list.map(element => crateLinkElement(element))
            sectionArticlesElement.append(...listElements);
            isLoaded = true;
        });

        sectionArticlesElement.addEventListener("click", e => e.stopPropagation())

        return sectionElement;
    }

    if (SEARCH_MODE === "articlesBySections") {
        const sectionsList = await fetchSections(locale);
        sectionsList.forEach(section => {
            const isFromMainCategory = section.category_id === MAIN_CATEGORY_ID;
            if (!isFromMainCategory) return;
            const sectionElement = createAccordionElement(section);
            sectionsWrapperElement.append(sectionElement);
        })
    } else {
        const categoryList = await fetchCategories(locale);
        categoryList.forEach(article => {
            const sectionElement = createAccordionElement(article);
            sectionsWrapperElement.append(sectionElement);
        })
    }
});