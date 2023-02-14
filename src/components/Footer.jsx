import background from "../sass/themes/background.module.scss";
import instagram from "../assets/images/icon-instagram.svg";
import facebook from "../assets/images/icon-facebook.svg";
import pinterest from "../assets/images/icon-pinterest.svg";


export const Footer = () => {
  return (
    <footer className={`${background.mountains}`}>
        <section className={`${background.containSocial}`}>
          <img src={facebook} className={background.icon} alt="" />
          <img src={pinterest} className={background.icon} alt="" />
          <img src={instagram} className={background.icon} alt="" />
        </section>
      </footer>
  )
}
