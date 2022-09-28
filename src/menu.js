






function menuTab() {
    let sizes = [' ','Personal', 'Small', 'Medium', 'Large', 'X-Large', 'Jumbo'];
    let pizzas = [
        
        {
            type: 'Cheese (sauce, cheese)',
            personal: '8in $6.99', 
            small: '10in $9.99',
            medium: '12in $13.99',
            large: '14in $16.99',
            xlarge: '16in $18.99',
            jumbo: '18in $20.99'
        }, 
        {
            type: 'Pepperoni or Sausage (Sauce, cheese, choice of Pepperoni or Sausage',
            personal: '8in $6.99', 
            small: '10in $10.99',
            medium: '12in $15.99',
            large: '14in $18.99',
            xlarge: '16in $21.99',
            jumbo: '18in $24.99'

        },
        {
            type: 'Hawaiin (Sauce, cheese, ham, pineapple)',
            personal: '8in $7.99', 
            small: '10in $11.99',
            medium: '12in $16.99',
            large: '14in $20.99',
            xlarge: '16in $23.99',
            jumbo: '18in $27.99'

        },
        {
            type: 'Combination (Sauce, cheese, Salami, Pepperoni, Ham, Mushrooms, Olives, Bell Peppers & Italian Sausage, Onion',
            personal: '8in $8.99', 
            small: '10in $13.99',
            medium: '12in $18.99',
            large: '14in $22.99',
            xlarge: '16in $25.99',
            jumbo: '18in $29.99'

        },

]

    // creating menu container
    let menuDiv = document.createElement('div');

    // creating table container
    let tableDiv = document.createElement('table');

    //creating top row of headings
    let sizeRow = document.createElement('tr');

    sizes.forEach(size => {
        let tableHeadings = document.createElement('th');
        tableHeadings.textContent = size;
        sizeRow.appendChild(tableHeadings);
        
    })
    tableDiv.appendChild(sizeRow);
    


    
    // creating pizza names on left
    for (let i = 0; i < pizzas.length; i++) {
        let tableRows = document.createElement('tr');
        let pizzaNamesArray = Object.values(pizzas[i]); // returns an array of each pizza objects values
        // console.log(pizzaNamesArray)
        
        let rowHeadingReference = pizzaNamesArray[0];
        // console.log(rowHeadingReference)
        let rowHeadingData = document.createElement('th')
        rowHeadingData.textContent = rowHeadingReference
        tableRows.appendChild(rowHeadingData);
        tableDiv.appendChild(tableRows)
        

        for (let x = 1; x < 7; x++ ) {
            let pizza_column_values = pizzaNamesArray[x];
            let pizza_values_data = document.createElement('td');
            pizza_values_data.textContent = pizza_column_values
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