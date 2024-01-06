import React from 'react'
import ProductDetails from './ProductDetails'
export default function ProductList(props) {
  console.log(props)
  return (
    props.productList.length>0 ?
      props.productList.map((product,i)=>{
        return <ProductDetails product={product} key={i} incrementQuantity={props.incrementQuantity} decrementQuantity={props.decrementQuantity} remove={props.remove} index={i}></ProductDetails> 
      }):"No Data Available"
  

  )
}
