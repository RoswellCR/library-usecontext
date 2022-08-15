import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext({
    items:[],
    createItem: (item)=>{},
    getItem:(id)=>{},
    updateItem:(item)=>{}
});

export default function Store({children}){
    const [items, setItems] = useState([])
    
    const createItem=(item)=>{  
        const temp  = [...item]
        temp.push(item)
        setItems(temp)
    }

    const getItem=(id)=>{
        const item= items.find((it)=>it===it.id)
        return item
    }

    const updateItem=(item)=>{
        const indexItem = items.findIndex((it)=>it.id===item.id)
        const temp=[...items]
        temp[indexItem]={...item}
    }

    return <AppContext.Provider 
            value={{
                items,
                createItem, 
                getItem,
                updateItem 
                }}>
                    {children}
            </AppContext.Provider>
}