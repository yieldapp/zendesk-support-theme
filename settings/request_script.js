document.addEventListener('DOMContentLoaded', async () => {
    const searchSelectWrapper = document.querySelector(".new_request_search_template");
    const searchBlock = document.querySelector(".form-field.request_subject");
    const searchSelect = searchSelectWrapper.innerHTML
    searchSelectWrapper.innerHTML = "";

    searchBlock.insertAdjacentHTML( 'beforebegin', searchSelect);
});
