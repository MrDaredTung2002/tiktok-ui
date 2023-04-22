import Header from "~/compoment/Layout/compoment/Header";
import Sidebar from "./Sidebar";
function DefaultLayout({ children }) {
    return ( <div>
        <Header/>
        <div>
            <Sidebar/>
            <div className="content">{children}</div>
        </div>
    </div> );
}

export default DefaultLayout;