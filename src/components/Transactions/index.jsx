import "./Transactions.css"
import profile from "../../assets/profile.jpg"
import paystack from "../../assets/paystack.png"
import paypal from "../../assets/paypal.png"
import flutterwave from "../../assets/flutterwave.jpg"

const transactions = [
    {
        status: 1,
        name: "Emmanuel Eze",
        image: profile,
        email: "emmy@gmail.com",
        date: new Date().toLocaleDateString(),
        amount: "$230",
    },
    {
        status: 1,
        name: "Emmanuel Eze",
        image: profile,
        email: "emmy@gmail.com",
        date: new Date().toLocaleDateString(),
        amount: "$230",
    },
    {
        status: 2,
        name: "James",
        image: paystack,
        email: "james@gmail.com",
        date: new Date().toLocaleDateString(),
        amount: "$50",
    },
    {
        status: 1,
        name: "Oluoma Patience",
        image: paypal,
        email: "oluoma@gmail.com",
        date: new Date().toLocaleDateString(),
        amount: "$100",
    },
    {
        status: 0,
        name: "Daniel Kasinskin",
        image: flutterwave,
        email: "danielk@gmail.com",
        date: new Date().toLocaleDateString(),
        amount: "$10",
    },
    
]

const Transactions = () => {
    const shortenTextFormatter = (text, maxLenght) => text.lenght > maxLenght ? "..." + text.slice(-maxLenght): text;

  return (
    <div className="transactions">
        <h2 className="title">Recent Transactions</h2>
        <table>
            <tbody>
                {transactions.map((data, index)=>{
                    let status = data.status === 1 ? "Sucess" : data.status === 0 ? "Failed" : "Processing"
                    return(
                        <tr key={index}>
                            <td className="minimize">
                                <div className="profile">
                                    <img src={data.image} alt="" />
                                </div>
                            </td>
                            <td title={data.name} className="minimize">
                                {data.name}
                            </td>
                            <td className="minimize">{data.date}</td>
                            <td title={data.email}>{shortenTextFormatter(data.email, 11)}</td>
                            <td title={data.amount}>{data.amount}</td>
                            <td>
                                <div className={status}>{status}</div>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Transactions