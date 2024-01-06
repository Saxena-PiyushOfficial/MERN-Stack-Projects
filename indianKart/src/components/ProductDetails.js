import React from 'react'

export default function ProductDetails(props) {
  return (
    <div className="row">
      <div className='col-5'>
        <h1>{props.product.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="badge bg-secondary">₹{props.product.price}</span></h1>
      </div>
      <div className="col-3">
      <button type="button" class="btn btn-primary" onClick={()=>{props.decrementQuantity(props.index)}}>-</button>
<button type="button" class="btn btn-secondary">{props.product.qty}</button>
<button type="button" class="btn btn-success" onClick={()=>{props.incrementQuantity(props.index)}}>+</button>

      </div>
      <div className='col-4'>{props.product.qty*props.product.price}</div>
      <button
        className="col-2 btn btn-danger"
        onClick={() => {
          props.remove(props.index);
        }}
      >
        Remove
      </button>
    </div>
  )
}