
let productList=document.getElementById("product-list")
let productEl=""
let filteredProducts=""
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(products=>{

              console.log(products)
            
        


for(let product of products){
   productEl+=`<div class="col-3">
            <div class="card">
                <img src=${product.image} />
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <h6 class="card-subtitle mb-2 text-body-secondary">${product.price}</h6>
                  <p class="card-text">${product.description}</p>
                  <a href="#" class="btn btn-warning">View Product</a>
                  <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
                </div>
              </div>`
              
           
}


            let forms=document.getElementById("btn")
            forms.addEventListener("submit",(event)=>{handleSearch(event)})

            function handleSearch(e){
              e.preventDefault()
              let searchedValue=document.getElementById("searchedValue").value.toLowerCase()
             console.log(searchedValue)
            
            let newList=products.filter((prod)=>{
              //console.log(prod.title)
              let result = prod.title.toLowerCase().includes(searchedValue)
              console.log(result)
              if(result==true){
                
                console.log(prod.title)//titles which match the searched value
                return(prod)
              }
            }
          )
          console.log(newList)
          for(let newprod of newList){
            
            filteredProducts+=`<div class="col-3">
                <div class="card">
                <img src=${newprod.image} />
                <div class="card-body">
                <h5 class="card-title">${newprod.title}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${newprod.price}</h6>
                <p class="card-text">${newprod.description}</p>
                <a href="#" class="btn btn-warning">View Product</a>
                <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
                </div>
                </div>`
                productList.innerHTML=filteredProducts
          }
                
                
                
                
         filteredProducts=""     
              
          }
          productList.innerHTML=productEl
      
         
          
        }) 
