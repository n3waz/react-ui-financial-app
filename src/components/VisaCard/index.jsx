import "./VisaCard.css"
import world from "../../assets/world.svg"
import chip from "../../assets/chip.png"
import visa from "../../assets/visa.png"
import partern from "../../assets/partern.jpg"

const VisaCard = () => {
  return (
    <div className="visa-card">
        <div className="visa-card-inner">
            <div className="front">
                <img src={world} className="map-img" alt="" />
                <div className="row">
                    <img src={chip} alt="" className="icon" />
                    <img src={visa} alt="" className="icon" />
                </div>
                <div className="row card-no">
                    <p>1111</p>
                    <p>2222</p>
                    <p>3333</p>
                    <p>4444</p>
                </div>
                <div className="row card-holder">
                    <p>CARD HOLDER</p>
                    <p>VALIT TILL</p>
                </div>
                <div className="row name">
                    <p>EMMANUEL EZE</p>
                    <p>12/27</p>
                </div>
            </div>

            <div className="back">
                <img src={world} alt="" className="map-img" />
                <div className="bar"></div>
                <div className="row card-cvv">
                    <div>
                        <img src={partern} alt="" />
                    </div>
                    <p>567</p>
                </div>
                <div className="row card-text">
                    <p>
                        Nowpay's virtual card enables secure, instant payment,
                        giving you acess to funds available and 
                        seamless financial management.
                    </p>
                </div>
                <div className="row signature">
                    <p>CUSTOMER SIGNATURE</p>
                    <img src={visa} className="icon" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default VisaCard