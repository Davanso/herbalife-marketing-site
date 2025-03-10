import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainChart from "../Chart/mainChart";
import "chart.js/auto";
import "./Body.css";

export default function Home() {
  const navigate = useNavigate();
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [balance, setBalance] = useState(6754); // Estado para o saldo atual
  const [error, setError] = useState("");

  // Função para realizar o saque
  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount); // Converte o valor para número

    // Validações
    if (isNaN(amount)) {
      setError("Por favor, insira um valor válido.");
      return;
    }
    if (amount <= 0) {
      setError("O valor do saque deve ser maior que 0.");
      return;
    }
    if (amount > balance) {
      setError("Saldo insuficiente para realizar o saque.");
      return;
    }

    // Atualiza o saldo
    setBalance((prevBalance) => prevBalance - amount);
    setWithdrawAmount(""); // Limpa o campo de saque
    setError(""); // Limpa a mensagem de erro
  };

  // Ações dos botões da barra lateral
  const buttonActions = {
    "Sugestões e Bate Papo": () => {},
    "Catálogo Interativo": () => navigate("/product-list"),
    HerbaMarathona: () => {},
    QuizHerbalifers: () => {},
    "Dashboard de Metas": () => {},
    "Fale Conosco": () => {},
  };

  // Formata a data atual
  const currentDate = new Date();
  const formattedDate = `${currentDate
    .toLocaleString("pt-BR", { month: "long" })
    .toUpperCase()}/${currentDate.getFullYear()}`;

  return (
    <>
      <div className="background">
        <main className="home-container">
          {/* Painel esquerdo (barra lateral de navegação) */}
          <div className="left-panel">
            {Object.entries(buttonActions).map(([label, action], index) => (
              <button key={index} className="grid-button" onClick={action}>
                {label}
              </button>
            ))}
          </div>

          {/* Painel central (conteúdo principal) */}
          <div className="center-panel">
            <div className="link-container">
              <div className="link-box">
                <h4>Seu link de divulgação</h4>
                <h2>https://herbalife.com.br/link/1703</h2>
              </div>
            </div>
            {/* GRAFICO */}
            <MainChart />
          </div>

          {/* Painel direito (carteira do usuário) */}
          <div className="right-panel">
            <h2>Minha Carteira</h2>
            <div className="wallet-container">
              {/* Exibe o saldo atual */}
              <div className="balance-box">Saldo: R$ {balance.toFixed(2)}</div>

              {/* Campo para inserir o valor de saque */}
              <div className="withdraw-box">
                <input
                  type="number"
                  placeholder="Valor para saque"
                  value={withdrawAmount}
                  onChange={(e) => setWithdrawAmount(e.target.value)}
                />
              </div>

              {/* Exibe mensagens de erro */}
              {error && (
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
              )}

              {/* Botões da carteira */}
              <div className="wallet-buttons">
                <button>Extrato</button>
                <button onClick={handleWithdraw}>Saque</button>
              </div>
            </div>
            <div className="date-display">{formattedDate}</div>
          </div>
        </main>
      </div>
    </>
  );
}
