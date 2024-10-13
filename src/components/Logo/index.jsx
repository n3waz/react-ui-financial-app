import "./Logo.css"
import {LoaderPinwheel} from "lucide-react"

const Logo = () => {
  return (
    <div className="logo">
        <LoaderPinwheel size={30}
        className="primary"/>
        <h1>
          now<span className="primary">Pay</span>
        </h1>
    </div>
  )
}

export default Logo