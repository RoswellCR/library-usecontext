import { useAppContext } from "../store/Store"
import { Link } from "react-router-dom"

export default function Index(){
    const store = useAppContext();

    return (
    <div>
        <Link to='/create'> Create </Link>
        {store.items.map((item) =>
            <div key={item.id}> {item.title} </div>
        )}
    </div>)
}