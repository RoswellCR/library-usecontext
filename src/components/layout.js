import Navbar from "./navbar";

export default function Layout({children}){
    return (
        <div>
            <Navbar/>
            <div>{children}</div>
        </div>
    )
}