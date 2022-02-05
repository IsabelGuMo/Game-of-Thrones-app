import React, { useContext } from "react";
import { Context } from "../Wrapper/Wrapper";
import "./Languages.scss"

const Languages = () => {
  const context = useContext(Context);

  /* function changeLanguage() {
        this.value={context.locale}
    } */
  /*  const changeLanguage = () =>{
        value={}
        context.selectLanguage()
    } */
  return (
    <div className="div-btn">
      <button className="div-btn__esp" value={"es"} onClick={context.selectLanguage}>
        <img className="div-btn__esp--img" src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644052447/Game%20of%20thrones/esp_gabkim.svg" alt="Spain flag"/>
      </button>
      <button className="div-btn__uk" value={"en"} onClick={context.selectLanguage}>
        <img className="div-btn__uk--img" src="https://res.cloudinary.com/ddbvk5mrr/image/upload/v1644052451/Game%20of%20thrones/eng_lskoqp.svg" alt="UK flag"/>
      </button>
    </div>
  );
};

export default Languages;
