import "./Footer.css";

export default function Footer() {
  // LOGO IMG
  const herbalife_logo = "/assets/herbalife_logo.png";

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img src={herbalife_logo} alt="Logo" />
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3 className="footer-heading">Nossos Produtos</h3>
            <ul>
              <li>
                <a href="#">Peso saudável</a>
              </li>
              <li>
                <a href="#">Fitness e Performance</a>
              </li>
              <li>
                <a href="#">Nutrição e saúde diárias</a>
              </li>
              <li>
                <a href="#">Cuidados com a pele e o corpo</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Sobre a Herbalife</h3>
            <ul>
              <li>
                <a href="#">Nossa Liderança</a>
              </li>
              <li>
                <a href="#">Relações com Investidores</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Precisa de Ajuda?</h3>
            <ul>
              <li>
                <a href="#">Entre em contato conosco</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading">Para Distribuidores</h3>
            <ul>
              <li>
                <a href="#">Login do Distribuidor</a>
              </li>
              <li>
                <a href="#">Oportunidade de Negócio</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copy">
          © 2024 Herbalife International do Brasil LTDA. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
