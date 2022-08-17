import { useAppContext } from "../store/Store"
import Layout from "../components/layout";
import Book from "../components/book";

export default function Index(){
    const store = useAppContext();

    return (
    <Layout>
        {store.items.map((item) =>
            <Book key={item.id} item={item}/>
        )}
    </Layout>)
}