import { ChartColumnStacked, TrendingUp } from "lucide-react"
import { Chart } from "chart.js/auto"
import { Line } from "react-chartjs-2"
import "./CashFlow.css"

const CashFlow = () => {
    const getGradient = (ctx, chartArea) => {
        let gradient = ctx.createLinearGradient(
            0,
            chartArea.bottom,
            0,
            chartArea.top
        );
        gradient.addColorStop(0.9, "rgba(21, 123, 248, 0.2)");
        gradient.addColorStop(0, "transparent");
        return gradient;
    }
    const config = {
        data:{
            labels: ["Mar", "April", "Jun", "Jul", "Jul", "Aug", "Sep", "Oct"],
            datasets: [
                {
                    data: [3,2,5,4,19,12,20,17,15,21],
                    borderWidth:2,
                    borderColor: "#157bf8",
                    lineTension: 0.8,
                    fill: true,
                    backgroundColor: (context) => {
                        const chart = context.chart;
                        const {ctx, chartArea} = chart;
                        if (!chartArea) return;
                        return getGradient (ctx, chartArea);
                    }
                }
            ]
        },
        options:{
            scales: {
                y: {beginAtZero: true},
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
        }
    }
    return (
        <div className='cash-flow'>
            <div className="cash-flow-header">
                <h2 className="title">Cash Flow</h2>
                <div className="row round-btns">
                    <div className="rounded-icon-btn">
                        <TrendingUp className="icon"/>
                    </div>
                    <div className="rounded-icon-btn btn-primary">
                        <ChartColumnStacked className="icon"/>
                    </div>
                </div>
            </div>
            <div className="row trend-report">
                <div className="rounded-icon-btn">
                    <TrendingUp className="icon"/>
                </div>
                <h3>Savings</h3>
                <TrendingUp className="icon primary"/>
                <p className="sucess">+2.03%</p>
            </div>
            <Line data={config.data} options={config.options} />
        </div>
    )
}

export default CashFlow