import './App.css';
import Header from './components/Header'
import AccountList from './components/AccountList';
function App() {
  const accountList = [
    { id: 1, name: 'Lalan', type:'Saving',balance:5600 ,creationDate:'2021-02-02'},
    {id: 2, name: 'Lalan', type:'Saving',balance:5600 ,creationDate:'2021-02-02'},
    {id: 3, name: 'Lalan', type:'Saving',balance:5600 ,creationDate:'2021-02-02'},
    { id: 4, name: 'Lalan', type:'Saving',balance:5600 ,creationDate:'2021-02-02'},
  ];


  return (
    <div className="App ">
      <Header></Header>
      <AccountList accountList={accountList}></AccountList>
    </div>
  );
}

export default App;
