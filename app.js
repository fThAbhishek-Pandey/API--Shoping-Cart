console.log('products starter');
const product = document.querySelector(".products-center");
product.innerHTML = '<img class ="loading" src="./swatikaAnimated.gif" alt="" />';
function displayProduct (theData){
        console.log("I am going to dispaly the photos");
        console.log(theData);
        let photos = theData.map((photo)=>{
           console.log("Photo : ",photo.price);
            return `
 <article class="product" data-id="${photo.id}">
    <div class="product-image">
      <img class ="img" src="${photo.image}"/>
    </div>
    <div  class="product-details" >
        <div class="product-price">₹ ${photo.price}</div>
        <div>&#x2b50 ${photo.rating.rate} </div>
        <div>${photo.category}</div>
    </div>
    <div>
      <div class="product-title">${photo.title}</div>
      <p class="product-description">${photo.description}</p>
    </div>
     
  </article>
`;
        }).join(' ');

        product.innerHTML= photos;
}
 let data ={};
 const  fetchData = async () =>{
    try{
        const response = await fetch('https://fakestoreapi.com/products/');
        console.log(response);  // Logs the response object
        data = await response.json();
        console.log(data);  // Logs the JSON data
    return data;
    }
    catch(error){
        throw new Error (`Please check :  ${error}`);
    }
    
  } 
  console.log("typeof fetchData" ,typeof fetchData);
  console.log(fetchData);
  console.log("data",data);
  const mydata = async ()=>{
        const theData = await fetchData();
        console.log("theData : ",theData);
        console.log("type of theData : ",typeof theData);
        displayProduct (theData);
        return ;
  };
mydata();
