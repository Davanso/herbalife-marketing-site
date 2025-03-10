import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

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
