const panels = document.querySelectorAll(".panel");
const music = document.querySelector("#music");

panels.forEach(element => {
    element.addEventListener("click", (e) => {

        if (!e.target.classList.contains("active")) {
            music.currentTime = 0;
            music.play();
        }
        deleteClassList();
        e.target.classList.add("active")
    })
});

function deleteClassList() {
    panels.forEach(element => {
        element.classList.remove("active");
    })
}