
function homeTab() {
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    console.log(homeDiv)

}

function renderHomeContent() {
    let main = document.getElementById("main-content");
    main.textContent = "";

    main.appendChild(homeTab());
}

export default renderHomeContent;