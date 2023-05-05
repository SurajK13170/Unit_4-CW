let userlogo = document.getElementById("userlogo");
console.log(userlogo)
let userName = JSON.parse(localStorage.getItem('user'))

userlogo.addEventListener("click", () => {
  location = "./Login.html";
});

let user = document.getElementById("user");
user.innerText = userName

let prod = document.getElementsByClassName("eff");

for (let i = 0; i < prod.length; i++) {
  prod[i].addEventListener("click", () => {
    location = "./product.html";
  });
}


let cartDiv = document.getElementById('cart')
let close = document.getElementById('close')
let cartBtn = document.getElementById('cartbtn')


cartBtn.addEventListener('click', ()=>{
  cartDiv.style.display='block'

})

close.addEventListener('click', ()=>{
  cartDiv.style.display='none'
  
})


let token = JSON.parse(localStorage.getItem('token'));
// cart
let cart = document.getElementById('cart');

function fetchData() {
  fetch('http://localhost:8080/cart/', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(data => displayData(data))
  .catch(error => console.error(error));
}

fetchData();

function displayData(data) {
  cart.innerHTML = '';
  data.forEach(e => {
    let div = document.createElement('div');
    // div.classList.add('mainDiv')
    let imdiv = document.createElement('div');
    let img = document.createElement('img');
    let title = document.createElement('p');
    let price = document.createElement('p');
    let btn = document.createElement('button');

    img.src = e.img;
    title.innerText = e.title;
    price.innerText = 'Rs. ' + e.price;
    btn.innerText = 'Delete';
    btn.addEventListener('click', () => {
      deleteCartItem(e.id);
    });

    imdiv.appendChild(img);
    div.appendChild(imdiv);
    div.appendChild(title);
    div.appendChild(price);
    div.appendChild(btn);
    cart.appendChild(div);
  });
}

function deleteCartItem(id) {
  fetch(`http://localhost:8080/cart/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'authorization': `Bearer ${token}`
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log('Item deleted successfully.');
    fetchData();
  })
  .catch(error => console.error(error));
}