import './style.css';
import renderHomeContent from './home';
import renderMenu from './menu';


function createNav() {
    let navArray = ['Home', 'Menu', 'Contact'];

    let nav = document.createElement('nav');
    let navList = document.createElement('ul');
    console.log(nav)
    navArray.forEach((element, index) => {
        let navItem = document.createElement('button');
        navItem.textContent = element;
        navItem.classList.add(`${index}`);
        navItem.setAttribute('id', index);

        navItem.addEventListener('click', (e) => {
            console.log(e.target.id);
            if (e.target.id == 0){
                renderHomeContent();
            }
            else if (e.target.id == 1) {
                renderMenu();
            }
            
        })

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
    



    
};

export default initializeWebSite;

