import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Mobile from './Mobile';
import MobileNote from './MobileNote';

function App() {
  const [items, setItems] = useState([]);
  const [isDone, setIsDone] = useState(false);



  function addItems (input){
    setItems((prevItems)=>{
      return [
        ...prevItems,
        input
      ];
    });
  }

  function deleteItem(id){

setItems((prevItems)=>{
return prevItems.filter((eachItem, index)=>{
  
return index !== id

})
})
  }

  function handleIsDone(){
    setIsDone(true);
  }


  return (
    <div>
    <div>
      <Header />
      <CreateArea addItems={addItems} />
     {items.map((eachItem, index)=>{
      return <Note deleteItem={deleteItem} key={index} id={index} title={eachItem.title} content={eachItem.content} />
     })}
     {items.map((eachItem, index)=>{
      return <Mobile hancleIsDone={handleIsDone} key={index} id={index} title={eachItem.title} content={eachItem.content} />
     })}

     
       
      
    </div>
    
    </div>
  );
}

export default App;
