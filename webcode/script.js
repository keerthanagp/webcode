let signupid=document.querySelector('.signup');

document.querySelector('#loginbtn').onclick = () =>{
    signupid.classList.toggle('active');
}

async function fetchdata(){
    try{
        const response=await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?")
        const data= await response.json();
        console.log(data)
        if(data.message){
            document.body.innerHTML+=` <h1> ${data.message}</h1>`
          
        }
    
        data.forEach(element=>{
            const createMakeupProducts={
                ...element,
                brand: element.brand,
                name: element.name,
                price: element.price,
                image: element.image_link,
                product:element.product_link,
                Description:element.description
            }
            createMakeup(createMakeupProducts);
        })
    }catch(error){
        console.log(error)
    }
}
function createMakeup(elements){
    document.body.innerHTML+=`<div class='container'>
    <img src="${elements.image}" class="image">
<div class="info">
    
    <h2 class="name"> ${elements.name}</h2>
    <p class="brand"><span class=bn>Brand Name:</span> ${elements.brand}</p>
    <p><span class="pr">price:</span> ${elements.price}$</p>
    <p><span class="des">Description: </span> ${elements.Description}</p>
    <a><span class="link">Product link: </span>${elements.product}</a>
    <button class="addbtn">Buy the Product </button>
    </div> 
    </div>
    `
}
fetchdata()


    