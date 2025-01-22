import navbarTranslations from "./navbarTranslations.js";
import homeTranslations from "./HomeTranslations.js";

const translations = {
    en: { ...navbarTranslations.en, ...homeTranslations.en, }, 
    ar: { ...navbarTranslations.ar, ...homeTranslations.ar, }
}
export default translations

