import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import Spanish from "../../lang/es.json";
import English from "../../lang/en.json";

export const Context = React.createContext();

const local = navigator.language;

var lang;
if (local === "es-ES") {
  lang = Spanish;
} else {
    lang = English;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);
  function selectLanguage(e) {
    const newLocale = e.currentTarget.value;
    setLocale(newLocale);
    if (newLocale === "es") {
      setMessages(Spanish);
    } else {
        setMessages(English);
    }
  }
  return (
    <Context.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};
export default Wrapper;