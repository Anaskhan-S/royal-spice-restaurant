console.log("Welcome to Royal Spice Restaurant!");

const links = document.querySelectorAll(".links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation:", link.textContent);
    });
});