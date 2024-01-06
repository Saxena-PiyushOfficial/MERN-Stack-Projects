import React from 'react'
import AccountTable from './AccountTable'
export default function AccountList(props) {
  return (
   
    props.accountList.map((account,i)=>{
      return <AccountTable account={account} key={i}  index={i}></AccountTable> 
    })

  )
}
