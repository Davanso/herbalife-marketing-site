import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./mainChart.css";

const mainChart = () => {
  const salesData = {
    labels: ["Out", "Nov", "Dez", "Jan", "Fev", "Mar"],
    datasets: [
      {
        label: "Meses x Vendas em R$",
        data: [2450, 3600, 12500, 2400, 8760, 6754],
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
      },
    ],
  };
  return (
    <>
      <h2>Histórico de Vendas</h2>
      <div className="chart-container">
        <Line data={salesData} />
      </div>
    </>
  );
};

export default mainChart;
