import { createContext, useContext, useState } from "react";

const AppContext = createContext({
    items:[],
    createItem: (item)=>{},
    getItem:(id)=>{},
    updateItem:(item)=>{}
});

export default function Store({children}){
    const [items, setItems] = useState([])
    
    const createItem=(item)=>{  
        //console.log(item)
        const temp  = [...items];
        temp.push(item);
        setItems(temp);
    }

    const getItem=(id)=>{
      console.log('id  ' + id)  
      const item = items.find((it)=>it.id===id);
        return item
    }

    const updateItem=(item)=>{
        const indexItem = items.findIndex((it)=>it.id===item.id)
        const temp=[...items]
        temp[indexItem]={...item}
        //revisar si falta el setItem()
    }

    return (
      <AppContext.Provider
        value={{
          items,
          createItem,
          getItem,
          updateItem,
        }}
      >
        {children}
      </AppContext.Provider>
    );
}

export function useAppContext(){
    return useContext(AppContext);
}