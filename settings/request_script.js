document.addEventListener('DOMContentLoaded', async () => {
    const searchSelectWrapper = document.querySelector(".new_request_search_template");
    const searchBlock = document.querySelector(".form-field.request_subject");
    const searchInput = document.querySelector("input#request_subject");
    const searchSelect = searchSelectWrapper.innerHTML
    searchSelectWrapper.innerHTML = "";
    searchInput.remove();

    searchBlock.insertAdjacentHTML( 'beforeend', searchSelect);
});
