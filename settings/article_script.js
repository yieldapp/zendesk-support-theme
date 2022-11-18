document.addEventListener('DOMContentLoaded', async () => {
    // const isSighed = window.isSighedUser()
    // if (!isSighed) {
    //     document.querySelector(".article-votes").classList.add("hidden")
    // }

    // Display message for article downvotes
    if (document.querySelector(".article-votes-controls")) {
        const voteButtons = document.querySelectorAll(".article-vote");
        const voteMessage = document.querySelector(".downvote-message");

        voteButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const isDownButton = button.matches(".article-vote-down");
                const isPressed = button.matches(".button-primary");

                if (isDownButton && !isPressed) {
                    voteMessage.style.display = "block";
                } else {
                    voteMessage.style.display = "none";
                }
            });
        });
    }
});