import React from 'react'
import { useTranslation } from 'react-i18next';
import './styles.css'

// Add the new name in here to see it appears in the component
const currentAvailableLanguages = [
    'fr',
    'en'
]

const LanguagesSelector = () => {
    const { t, i18n } = useTranslation();

    // Here we generate the button based on the languages available (NOTE: if the language is not available, english is the default one)
    const displayLanguages = () => {
        const localArray = []
        // Mapping through the list and create <a> anchor for each one
        currentAvailableLanguages.map(item => {
            localArray.push(<a onClick={() => i18n.changeLanguage(item)} className={i18n.language == item ? 'selected' : ''}>{item.toUpperCase()}</a>)
        }
        )
        return localArray
    }

    return (
        <div className={'languagesSelector-wrapper'}>
            {displayLanguages()}
        </div >
    )
}

export default LanguagesSelector