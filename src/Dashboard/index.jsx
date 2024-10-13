import "./Dashboard.css"
import Sidebar from "../components/Sidebar"
import Navbar from "../components/Navbar"
import VisaCard from "../components/VisaCard"
import SendMoney from "../components/SendMoney"
import QuickTransfer from "../components/QuickTransfer"
import CashFlow from "../components/CashFlow"
import StatisticGrid from "../components/StatisticGrid"
import Transactions from "../components/Transactions"
import { useState } from "react"

const Dashboard = () => {
    const [open, setOpen] = useState(false);
    return (
        <>
        <Sidebar open={open}/>
        <main>
            <Navbar onMenuClick={()=>setOpen(!open)}/>
            <section className="container">
                <div className="column">
                    <VisaCard/>
                    <SendMoney/>
                    <QuickTransfer/>
                </div>
                <div className="column">
                    <CashFlow/>
                    <StatisticGrid/>
                    <Transactions />
                </div>
            </section>
        </main>
        </>    
    )
}

export default Dashboard
