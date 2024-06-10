## Products Project

#### Structure (HTML)
- nav
- section.myproducts
  - div.products-center
    - div.products(data-id)
      - div.product-image
        - img.img
    - div.product-details
      - div.product-price
      - div (rating)
      - div  (category)
    - div
      - div.product-title (product title)
      - div.product-description

- create index.html
- basic structure

#### Loading and Error

- in .products-center
- div.loading
- p.error

#### API Docs

- (Facke StoreAPI API) [https://fakestoreapi.com/]

- (Products) [https://fakestoreapi.com/products/]

- Total cart 20 
### API LOOKUP

```javascript
{
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
}

```

#### Fetch Products

- select .products-center
- fetch products
- log result
- try/catch

#### Loading and Error

- add loading while fetching
- add error in catch

#### Display Products - Setup

- return data from fetchProducts
- create displayProducts(list)
- create start()
- invoke fetchProducts and displayProducts in start
- invoke start

#### Display Products - Complete

- iterate over list
- pull out all the values
- set productsDOM equal to result