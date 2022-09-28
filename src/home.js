
function homeTab() {
    let homeDiv = document.createElement('div');
    homeDiv.classList.add('home');
    
    let p1 = document.createElement('p');
    p1.textContent = 'Best pizza and Sandwhiches in Stockton!'
    homeDiv.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = 'Servicing Downtown Stockton and Surrounding Areas'
    homeDiv.appendChild(p2);

    let p3 = document.createElement('p');
    p3.textContent = "Stop by and grab a slice or order a whole pizza, and check out our Deli for more options!"
    homeDiv.appendChild(p3);
    return homeDiv;

}

function renderHomeContent() {
    let main = document.getElementById("main-content");
    main.textContent = "";

    main.appendChild(homeTab());
}

export default renderHomeContent;