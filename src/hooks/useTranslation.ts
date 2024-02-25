import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '~hooks/useStore'
import { setLanguage } from '~store/metadata'

/** Translations */
import English from '../translations/en.json'
import Greek from '../translations/gr.json'

export const useTranslation = () => {
    const dispatch = useAppDispatch()
    const language = useAppSelector((state) => state.metadataSlice.language)

    const translations: any = language === 'en' ? English : Greek
    const localLanguage = localStorage.getItem('language')

    useEffect(() => {
        if (
            localLanguage &&
            (localLanguage === 'en' || localLanguage === 'gr')
        ) {
            dispatch(setLanguage(localLanguage))
        }
    }, [dispatch, localLanguage])

    const translate = (key: string): string => {
        const translation = translations[key]

        if (!translation) {
            return key
        }

        return translation
    }

    return translate
}
