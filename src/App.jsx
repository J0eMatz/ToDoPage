import { useState } from "react";
import Button from "./components/Button"
import Item from "./components/Item";

export default function App(){

  const [toDo, setToDo] = useState( [] )
  const [text, setText] =useState("")

  function onKeyUp(event){
    if (event.key === "Enter"){
      addtoDo();
    }
  }

  function onDelete (index){
    toDo.splice(index,1)
    setToDo([... toDo])
  }

  function onInputChange(event){
    setText(event.target.value)
  }

  function addtoDo ( ){
    if (text.trim().length >0){
    setToDo([text, ...toDo])
    setText("")
    }
  }

  return(
  <main className="bg-black min-h-screen flex justify-center p-16 text-white">
    <div className="h-full flex flex-col w-full max-w-[500px] gap-5">
      <input 
        value={text} 
        type="text" 
        className="bg-white/40 p-2 rounded text-white"
        onChange={onInputChange}
        onKeyUp={onKeyUp}  
      />

      <Button className="bg-sky-600 rounded p-2 text-white" onClick={addtoDo}>
        Agregar
      </Button>
      
      {toDo.map((element, index) => {
        return (
          <Item 
            key= {`toDo-${index}`} 
            text={element} 
            onDelete={()=>onDelete(index)}
          />
        )
      })
      }
    </div>
  </main>
  );
}