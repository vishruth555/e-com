let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list1 = document.querySelector('.list1');
let list2 = document.querySelector('.list2');
let list3 = document.querySelector('.list3');
let listCard = document.querySelector('.listCard');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let body = document.querySelector('body');

openShopping.addEventListener('click',()=>{
    body.classList.add("active");
});
closeShopping.addEventListener('click',()=>{
    body.classList.remove("active");
});


const products = [
    {
        id: 1,
        name: 'Nikon NX21',
        image: 'camera.jpg',
        price: 36000
    },
    {
        id: 2,
        name: 'Sony LDS',
        image: 'camera2.jpg',
        price: 32000
    },
    {
        id: 3,
        name: 'Cannon EDS70D',
        image: 'camera3.jpg',
        price: 29000
    },
    {
        id: 4,
        name: 'Lumix2',
        image: 'camera4.jpg',
        price: 33000
    },
    {
        id: 5,
        name: 'Y&K',
        image: 'watch.jpg',
        price: 3000
    },
    {
        id: 6,
        name: 'Casio G-Shock',
        image: 'watch2.jpg',
        price: 6000
    },
    {
        id: 7,
        name: 'Omega',
        image: 'watch3.jpg',
        price: 2000
    },
    {
        id: 8,
        name: 'Diesel 3bar',
        image: 'watch4.jpg',
        price: 3300
    },
    {
        id: 9,
        name: 'Tommy Hilfiger',
        image: 'shirt.jpg',
        price: 3600
    },
    {
        id: 10,
        name: 'U.S. Polo',
        image: 'shirt2.jpg',
        price: 970
    },
    {
        id: 11,
        name: 'Allen Solly',
        image: 'shirt3.jpg',
        price: 2900
    },
    {
        id: 12,
        name: 'UCB',
        image: 'shirt4.jpg',
        price: 960
    },

]

function initApp(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.innerHTML = `
        <div class="col-md-3 col-sm-6">
                    <div class="thumbnail">
                        <img src="../img/${value.image}">
                        <div class="caption">
                            <h3>${value.name}</h3>
                            <p>Rs.${value.price}.00</p>
                            <button onclick="addToCard(${key})" >Add to Cart</button>
                        </div>
                    </div>
                    </div>
        `
        if(value.id<5){
            list1.appendChild(newDiv);
        }
        else if(value.id<9){
            list2.appendChild(newDiv);
        }
        else{
            list3.appendChild(newDiv);
        }
        
    })

}
initApp();
let listCards = [];
function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = products[key];
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) =>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement("li");
            newDiv.innerHTML = `
                <div><img src="../img/${value.image}"></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>${value.quantity}</div>
                <div>
                    <button onclick="changeQuantity(${key},${value.quantity-1},'-')">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key},${value.quantity+1},'+')">+</button>
                    </div>
             `
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity, type) {
    if(quantity == 0){
        delete listCards[key];
    }
    else{
        listCards[key].quantity = quantity;
        let a = products[key].price;
        listCards[key].price = quantity * a;   

    }
    reloadCard();
}