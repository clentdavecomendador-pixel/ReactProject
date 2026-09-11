import { useDate } from "../../Context/useDate"
import { byDateUrl } from "../../data/data"
import type { HistoryResponse } from "../../data/data.types"
import { useFetch } from "../../hooks/useFetch"
import { ByDateStyled } from "./byDate.styled"

export const ByDate = () => {
    const { day, month } = useDate()
    const hasDate = Boolean(day && month)
    const { apiData, isLoading, error } = useFetch<HistoryResponse>(
        hasDate ? byDateUrl(Number(month), Number(day)) : ""
    )

    return (
        <ByDateStyled>
            {!hasDate && <p>Choose a month and day</p>}
            {isLoading && hasDate ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : apiData ? (
                <>
                    <h2>{apiData.date}</h2>
                    <div>
                        {apiData.data.Events.map((event) => (
                            <article key={`${event.year}-${event.text}`}>
                                <strong>{event.year}</strong>
                                <p>{event.text}</p>
                            </article>
                        ))}
                    </div>
                </>
            ) : null}
        </ByDateStyled>
    )
}

