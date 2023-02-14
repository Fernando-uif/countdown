import { Timer } from "./components/Timer";
import text from "./sass/base/text.module.scss";
import background from "./sass/themes/background.module.scss";
import instagram from "./assets/images/icon-instagram.svg";
import facebook from "./assets/images/icon-facebook.svg";
import pinterest from "./assets/images/icon-pinterest.svg";

function App() {
  return (
    <>
      <section className={`${background.background} ${background.start}`}>
        <h1 className={text.title}>we're launching soon</h1>

        <Timer />
      </section>
      <footer className={`${background.mountains}`}>
        <section className={`${background.containSocial}`}>
          <img src={facebook} className={background.icon} alt="" />
          <img src={pinterest} className={background.icon} alt="" />
          <img src={instagram} className={background.icon} alt="" />
        </section>
      </footer>
    </>
  );
}

export default App;
