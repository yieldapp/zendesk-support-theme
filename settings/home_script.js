const fetchSections = (locale = "en-us") => {
    return fetch(`/api/v2/help_center/${locale}/sections`)
        .then(data => data.json())
        .then(formattedData => formattedData.sections);
}

const fetchArticles = (section, locale = "en-us") => {
    return fetch(`/api/v2/help_center/${locale}/sections/${section.id}/articles`)
        .then(a => a.json())
        .then(formattedData => formattedData.articles);
}

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
        const articles = await fetchArticles(section);
        const articlesElements = articles.map(article => crateArticleElement(article))
        sectionArticlesElement.append(...articlesElements);
        isLoaded = true;
    });

    return sectionElement;
}

document.addEventListener('DOMContentLoaded', async () => {
    const sectionsWrapperElement = document.querySelector(".help-center-articles")
    const sectionsList = await fetchSections("en-us");

    sectionsList.forEach(section => {
        const sectionElement = createSectionElement(section);
        sectionsWrapperElement.append(sectionElement);
    })
});