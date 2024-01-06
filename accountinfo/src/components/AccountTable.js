import React from 'react'
import './AccountTable.css'
export default function AccountTable({account}) {
  return (
    <div><table class="table1 ml-5">
    <thead>
      <tr>
        <th scope="col">Account ID</th>
        <th scope="col">Account Name</th>
        <th scope="col">Account Type</th>
        <th scope="col">Balance</th>
        <th scope="col">Creation Date</th>
      </tr>
    </thead>
    <tbody><tr>
              <td>{account.id}</td>
              <td>{account.name}</td>
              <td>{account.type}</td>
              <td>{account.balance}</td>
              <td>{account.creationDate}</td>
              </tr>
    </tbody>
  </table></div>
  )
}
