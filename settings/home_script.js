const MAIN_CATEGORY_ID = 10589460627857;

const fetchSections = (locale) => {
    return fetch(`/api/v2/help_center/${locale}/sections`)
        .then(data => data.json())
        .then(formattedData => formattedData.sections);
}

const fetchArticles = (section, locale) => {
    return fetch(`/api/v2/help_center/${locale}/sections/${section.id}/articles`)
        .then(a => a.json())
        .then(formattedData => formattedData.articles);
}

document.addEventListener('DOMContentLoaded', async () => {
    const locale = getCurrentLocale();
    const sectionsWrapperElement = document.querySelector(".help-center-articles")

    const crateArticleElement = (article) => {
        const articleElement = document.createElement("a");
        articleElement.classList.add("help-center-section-articles-item")
        articleElement.textContent = article.title;
        articleElement.setAttribute("href", article.html_url);
        return articleElement;
    }

    const createSectionElement = (section) => {
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

        sectionNameElement.textContent = section.name;

        sectionElement.append(sectionNameElement, sectionArticlesElement);

        sectionElement.addEventListener("click", async () => {
            isActive = !isActive;
            sectionElement.classList.toggle('active');
            sectionNameElement.classList.toggle('active');
            if (isLoaded) {
                return;
            }
            const articles = await fetchArticles(section, locale);
            const articlesElements = articles.map(article => crateArticleElement(article))
            sectionArticlesElement.append(...articlesElements);
            isLoaded = true;
        });

        sectionArticlesElement.addEventListener("click", e => e.stopPropagation())

        return sectionElement;
    }

    const sectionsList = await fetchSections(locale);
    sectionsList.forEach(section => {
        const isFromMainCategory = section.category_id === MAIN_CATEGORY_ID;
        if (!isFromMainCategory) return;
        const sectionElement = createSectionElement(section);
        sectionsWrapperElement.append(sectionElement);
    })
});