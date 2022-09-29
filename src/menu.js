






function menuTab() {
    let sizes = ['','Personal <br>(8in)   ', 'Small  <br>(10in)', 'Medium  <br>(12in)', 'Large  <br>(14in)', 'X-Large  <br>16in)', 'Jumbo  <br>(18in)'];
    let pizzas = [
        
        {
            type: 'Cheese <br><span>(sauce, cheese)</span>',
            personal: '$6.99', 
            small: '$9.99',
            medium: '$13.99',
            large: '$16.99',
            xlarge: '$18.99',
            jumbo: '$20.99'
        }, 
        {
            type: 'Pepperoni or Sausage <br><span>(Sauce, cheese, choice of Pepperoni or Sausage</span>',
            personal: '$6.99', 
            small: '$10.99',
            medium: '$15.99',
            large: '$18.99',
            xlarge: '$21.99',
            jumbo: '$24.99'

        },
        {
            type: 'Hawaiin <br><span>(Sauce, cheese, ham, pineapple)</span>',
            personal: '$7.99', 
            small: '$11.99',
            medium: '$16.99',
            large: '$20.99',
            xlarge: '$23.99',
            jumbo: '$27.99'

        },
        {
            type: 'Combination <br><span>(Sauce, cheese, Salami, Pepperoni, Ham, Mushrooms, Olives, Bell Peppers & Italian Sausage, Onion</span>',
            personal: '$8.99', 
            small: '$13.99',
            medium: '$18.99',
            large: '$22.99',
            xlarge: '$25.99',
            jumbo: '$29.99'

        },

]

    // creating menu container
    let menuDiv = document.createElement('div');
    menuDiv.classList.add('menu-div')

    // creating table container
    let tableDiv = document.createElement('table');
    let tableHead = document.createElement('thead');

    //creating top row of headings
    let sizeRow = document.createElement('tr');
    sizeRow.setAttribute('id', 'top-data')

    sizes.forEach(size => {
        let tableHeadings = document.createElement('th');
        tableHeadings.innerHTML = size;
        sizeRow.appendChild(tableHeadings);
        
        
    })
    tableHead.appendChild(sizeRow)
    tableDiv.appendChild(tableHead);
    


    
    // creating pizza names on left
    for (let i = 0; i < pizzas.length; i++) {
        let tableRows = document.createElement('tr');
        let pizzaNamesArray = Object.values(pizzas[i]); // returns an array of each pizza objects values
        // console.log(pizzaNamesArray)
        
        let rowHeadingReference = pizzaNamesArray[0];
        // console.log(rowHeadingReference)
        let rowHeadingData = document.createElement('th')
        rowHeadingData.innerHTML = rowHeadingReference
        tableRows.appendChild(rowHeadingData);
        tableDiv.appendChild(tableRows)
        

        for (let x = 1; x < 7; x++ ) {
            let pizzaObjectValues = pizzaNamesArray[x];
            let pizza_values_data = document.createElement('td');
            pizza_values_data.textContent = pizzaObjectValues
            tableRows.appendChild(pizza_values_data)
            tableDiv.appendChild(tableRows)
        }                
    }
    
    
    menuDiv.appendChild(tableDiv)

    return menuDiv;
}


function renderMenu() {
    let main = document.getElementById("main-content");

    main.textContent = ""
    main.appendChild(menuTab());
}

export default renderMenu;