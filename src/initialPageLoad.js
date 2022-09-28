import './style.css';
import renderHomeContent from './home';


function createNav() {
    let navArray = ['Home', 'Menu', 'Contact'];

    let nav = document.createElement('nav');
    let navList = document.createElement('ul');
    console.log(nav)
    navArray.forEach((element, index) => {
        let navItem = document.createElement('button');
        navItem.textContent = element;
        navItem.classList.add('nav-item');
        navItem.setAttribute('data-key', index);

        navList.appendChild(navItem);
        
    });
    nav.appendChild(navList);
    return nav;
};



function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('h1');
    title.classList.add('restaurant-name');
    title.textContent = 'Alfalfas Pizza and Deli'
    

    header.appendChild(title);
    header.appendChild(createNav());
    return header;

};


function createMainContent() {
    let main = document.createElement('main');
    main.classList.add('main-content');
    main.setAttribute('id', 'main-content')
    return main;
}



function initializeWebSite() {
    let content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMainContent());
    renderHomeContent();


    
};

export default initializeWebSite;

