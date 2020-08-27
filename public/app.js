axios.get('/api/drinks')
    .then(({ data }) => {

        data.forEach(drink => {


            let drinkElem = document.createElement('ul')
            drinkElem.innerHTML = `
            <li> Drink Name: ${drink.name} </li>
            <li> Bean: ${drink.bean.name} </li>
            <li> Syrup: ${drink.syrup.name} </li>
            <li> Topping: ${drink.topping.name} </li>
        `
        document.getElementById('drinks').append(drinkElem)
        })
    })
    .catch(err => console.log(err))