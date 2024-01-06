import React, { Component } from 'react'

export default class ProductForm extends Component {
  constructor(props)
  {
    super(props)
    this.state={
      productName:"",
      productPrice:0
    }
  }
  render() {
    return (
      <div> <form className='row' onSubmit={(e)=>{
        e.preventDefault()
        this.props.addItem(this.state.productName,parseInt(this.state.productPrice))
      }}>
      <div className="mb-3 col-6">
        <label htmlFor="inputName" className="form-label">Product Name</label>
        <input type="text" className="form-control" id="inputName" aria-describedby="name" name="productName" onChange={(e)=>{
          this.setState({productName:e.currentTarget.value})
        }}value={this.state.productName} />
         
      </div>
      <div className="mb-3 col-6">
        <label htmlFor="inputPrice" className="form-label">Product Price</label>
        <input type="number" className="form-control" id="price" name="productPrice" onChange={(e)=>{
          this.setState({productPrice:parseInt(e.currentTarget.value)})
        }} value={this.state.productPrice}/>
       
      </div>
      
      <button type="submit" className="btn btn-primary col-12"  >Add</button>
    </form></div>
    )
  }
}
