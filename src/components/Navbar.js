import company_logo from "../assets/company_logo.png"

const Navbar=()=>{
    return(
        <div className="navbar">
            <img src={company_logo} alt="" className="logo" />
        </div>
    )
}

export default Navbar;