import "./Navbar.css"
import Logo from "../Logo"
import { BellRing, Menu, Search } from "lucide-react"
import profile from "../../assets/profile.jpg"

const Navbar = ({onMenuClick}) => {
  return (
    <nav className="navbar">
        <Logo/>
        <div className="search-bar">
            <input type="text" placeholder="Search history"/>
            <div className="icon-wrapper">
                <Search/>
            </div>
        </div>
        <div className="user">
            <div className="icon-wrapper">
                <BellRing/>
            </div>
            <div className="profile">
                <img src={profile} alt="" />
            </div>
            <div className="rounded-icon-btn menu-btn" onClick={onMenuClick}>
                <Menu/>
            </div>
        </div>
    </nav>
  )
}

export default Navbar