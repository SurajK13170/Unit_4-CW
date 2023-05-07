let userlogo = document.getElementById("userlogo");
// console.log(userlogo);
let userName = JSON.parse(localStorage.getItem("user"));
if(userName){
userlogo.style.display = 'none'
}

userlogo.addEventListener("click", () => {
  location = "./Login.html";
});

let user = document.getElementById("user");
user.innerText = userName;

let prod = document.getElementsByClassName("eff");

for (let i = 0; i < prod.length; i++) {
  prod[i].addEventListener("click", () => {
    location = "./product.html";
  });
}

let cartBtn = document.getElementById("cartbtn");

cartBtn.addEventListener("click", () => {
  location = './product.html'
});



