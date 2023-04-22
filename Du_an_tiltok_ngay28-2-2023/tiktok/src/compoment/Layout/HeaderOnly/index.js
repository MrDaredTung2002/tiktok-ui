import Header from "~/compoment/Layout/compoment/Header";
function HeaderOnly({ children }) {
    return ( <div>
        <Header/>
        <div>
            <div className="content">{children}</div>
        </div>
    </div> );
}

export default HeaderOnly;