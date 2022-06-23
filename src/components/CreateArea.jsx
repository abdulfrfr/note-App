import React, { useState } from "react";

function CreateArea(props) {
  const [input, setInput] = useState({
    title: "",
    content: ""
  });

  function handleInputChange(event){
    const {name, value} = event.target;

    setInput((prevInput)=>{
      return{
        ...prevInput,
        [name]: value
      }
    });
  }
  


  return (
    <div>
      <form>
        <input onChange={handleInputChange} name="title" placeholder="Title" value={input.title} />
        <textarea onChange={handleInputChange}  name="content" placeholder="Take a note..." rows="3" value={input.content}  />
        <button onClick={(event)=>{
            props.addItems(input);
            event.preventDefault();
            setInput({
              title:"",
              content: ""
            });
        }}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
