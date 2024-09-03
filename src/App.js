import logo from './logo.svg';
import './App.css';
import Input from './component/Input';
import Lists from './component/Lists';
import { useState } from 'react';
import Navbar from './component/Navbar';
function App() {
  const [msg,setMsg] = useState();
  const [list, setList] =useState([]);
  const addList = (text) =>{
    if(text==''){
      alert("Please add Something")
    }
    else{
      setList([...list,text])
      setMsg(alert("Your added a Task !"))
    }
  }
  const delItem = (key) =>{
      let newList=[...list]
      newList.splice(key,1)
      setList([...newList])
  }
  return (
    <>
      <Navbar/>
    <div className="main-container">
      <div className="box-container">
            <Input addList={addList}/>
            <hr/>
           {list.map((listItem,i)=>{
            return(
              <Lists key={i} item={listItem} delete={delItem}/>
            )
           })}
      </div>
    </div>
    </>
  );
}

export default App;
