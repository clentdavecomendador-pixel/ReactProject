import { Link } from "react-router-dom"
import { SERVER_URL } from "../../../config/api"
import { useCountries } from "../../../hooks/useCountries"
import { useLanguage } from "../../../context/LanguageContext"

export const CountryList = ({ mode = 'all' }: { mode: string }) => {
    const { countries, isLoading, error } = useCountries()
    const { language } = useLanguage()

    if (error) return <p role="alert">{error}</p>

    if(isLoading) return <p>Loading...</p>

    let finalList = countries

    if (mode === "popular") {
        countries.sort(() => Math.random() - 0.5)
        finalList = countries.slice(0,4)
    }

    return (
        <ul>
            {finalList.map(country => {
                const info = country.infos.find(
                    info => info.language.code === language
                )

                if (!info) return null

                return (
                    <li key={country.id}>
                        <Link to={`/countries/${country.id}`}>
                            <img
                                src={new URL(country.image, SERVER_URL).href}
                                alt={info.name}
                                width={300}
                            />
                            <h2>{info.name}</h2>
                            <p>{info.description}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}