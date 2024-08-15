let user = document.getElementById("user")
user.innerText = localStorage.getItem("username")
let fetchData = async () => {
    let data = await fetch("https://fakestoreapi.com/products")
    let finalData = await data.json()
    let container = document.getElementById("card_container")
    finalData.forEach((ele) => {
        container.innerHTML += `
        <main class="card">
        <img src=${ele.image}> 
        <h1>${ele.title}</h1>
        <p>${ele.description.slice(0,100)}</p>
        <b>Rs: ${ele.price}</b>
        <button onClick="addToCart('${ele.title}',${ele.price})">ADD TO CART</button>
        </main>
        `
    })
}
fetchData()

let cart_value =document.getElementById("cart_value")

let count =0;
let addToCart = (productsDescription,price)=>{
    count++;
console.log(count)
console.log(productsDescription);
cart_value.innerText=count;

}