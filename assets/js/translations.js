import navbarTranslations from "../../assets/js/navbarTranslations"
import homeTranslations from "../../assets/js/HomeTranslations"

const translations = {
    en: { ...navbarTranslations.en, ...homeTranslations.en, }, 
    ar: { ...navbarTranslations.ar, ...homeTranslations.ar, }
}
export default translations

