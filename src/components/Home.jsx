import Body from "../components/Body/Body";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div className="main-content">
      <div className="header-content">
        <Header />
      </div>
      <div className="body-content">
        <Body />
      </div>
      <div className="footer-content">
        <Footer />
      </div>
    </div>
  );
}
