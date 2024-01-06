import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList'
import Footer from './components/Footer'
import { useState } from 'react';
import ProductForm from './components/ProductForm';
function App() {
  const productList=[
    {id:1,name:"Laptop",price:2000,qty:0},
    {id:2,name:"iPhone10S",price:56000,qty:0},
    {id:3,name:"Macbook Pro",price:7899,qty:0},
    { id:4,name:"Blackberry",price:9000,qty:0}

  ]
  const [prodList,setProductList]=useState(productList);
  const [totalAmount,setTotalAmount]=useState(0);


  const incrementQuantity=(index)=>{
    var newProductList=[...prodList]
    var newTotalAmount=totalAmount;
    newProductList[index].qty++;
    newTotalAmount+=newProductList[index].price
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }
  const decrementQuantity=(index)=>{
    var newProductList=[...prodList];
    var newTotalAmount=totalAmount
   if(newProductList[index].qty >0){
    newProductList[index].qty--;
    newTotalAmount-=newProductList[index].price
   }

    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }
  const reset=()=>{
    var newProductList=[...prodList];
     newProductList.map((products)=>{
      products.qty=0;
      setTotalAmount(0);
     
    })
    setProductList(newProductList);
  }
  const remove=(index)=>{
    var newProductList=[...prodList];
    var newTotalAmount=totalAmount;
    newTotalAmount-=newProductList[index].qty*newProductList[index].price;
    newProductList.splice(index,1)
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
    
  }
  const addItem=(name,price)=>{
    var newProductList=[...prodList];
    newProductList.push({
      name:name,
      price:price,
      qty:0
    })
    setProductList(newProductList);
  }
  return (
    <div className="App">
     <Navbar></Navbar>
     <ProductForm addItem={addItem}></ProductForm>
     <main className="container mt-5" >
     <ProductList productList={prodList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} remove={remove} ></ProductList>
     </main >
     <Footer totalAmount={totalAmount} reset={reset}></Footer>

    </div>
  );
}

export default App;
