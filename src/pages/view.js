import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { useAppContext } from "../store/Store";

export default function View(){
    const [item, setItem] = useState({});
    const params = useParams();
    
    const store = useAppContext();
    
    useEffect( ()=> {
        const book = store.getItem(params.bookId);
        setItem(book);
        
    }, []);
        
    if(!item){
        return(
            <Layout><h1>Item not found</h1></Layout>
        )
    }
        
        return(
            <Layout>
                <h1>{item?.title}</h1>
                <div>{item?.cover ? <img src={item?.cover} width="400" alt='cover'/> : '' }</div>
                <div>{item?.author}</div>
                <div>{item?.intro}</div>
                <div>{item?.completed ? 'Leido' : 'Por Terminar'}</div>
                <div>{item?.review}</div>
            </Layout>
        ) 
    
}