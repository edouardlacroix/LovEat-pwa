import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './languages/en'
import fr from './languages/fr'

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources: {
            // Add all languages here
            en,
            fr
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });

export default i18n

