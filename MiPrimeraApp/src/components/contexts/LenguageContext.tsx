import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18n } from "i18n-js";
import { createContext, ReactPortal, useContext, useEffect, useState } from "react";

//1.Tipado de objeto principal del contexto
type Language = 'es' | 'en' | '';

type LanguageContextType = {
    language: Language;
    changeLanguage: (Ing: Language) => void;
    clearLanguage: ()=> void;

}
//Definicion de diccionario para idiomas
const translations = {
    en: {singIn: 'Sign In', goToSettings: 'Go To Settings', welcome:'Welcome Home!'},
    es: {singIn: 'Iniciar Sesion', goToSettings: 'Ir a User Settings', welcome:'Bienvenido a Home!'},
};
//crear instancia de i18n con diccionario cargado
const i18n = new I18n(translations);

//definir propiedades como idioma por defecto, habilitar fallback
i18n.defaultLocale = 'en';
i18n.enableFallback = true;

//2.Creacion del contexto
const LanguageContext = createContext<LanguageContextType| null>(null);
//4.Exposicion de contexto en forma de hook personalizado
export const useLanguage = () =>{
    const context = useContext(LanguageContext);
    if (!context) throw new Error ("useLanguage debe usarse dentro de LanguageProvider");
    return context;
}
//3.Crear el provider: por medio por el cual se maneja el estado global 
export const LanguageProvider = ({children}: {children: React.ReactNode}) => {
    const[language, setLanguage] = useState<Language>("");

    useEffect(()=>{
        const loadLanguage = async () =>{
            const storedLanguage = await AsyncStorage.getItem("Language");
            if (storedLanguage){
                setLanguage(storedLanguage as Language);
                i18n.locale = storedLanguage;
            }else{
        i18n.locale = i18n.defaultLocale;
            }
        };
    }, []);
    

    const changeLanguage = async (Ing: Language) =>{
        setLanguage(Ing);
        i18n.locale = Ing;
        await AsyncStorage.setItem("language", Ing);
    };

    const clearLanguage = async () => {
        await AsyncStorage.removeItem("language");
    }

    return(
        <LanguageContext.Provider value={{language, changeLanguage, clearLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export {i18n};