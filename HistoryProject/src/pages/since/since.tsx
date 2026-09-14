import { useMemo } from "react"
import { useDate } from "../../Context/useDate"
import { useFetch } from "../../hooks/useFetch"
import type { HistoryResponse } from "../../data/data.types"
import { SinceStyled } from "./since.styled"

export const Since = () => {
    const { year } = useDate()
    const hasYear = Boolean(year)
    const { apiData, isLoading, error } = useFetch<HistoryResponse>(
        hasYear ? "https://history.muffinlabs.com/date" : ""
    )

    const filteredEvents = useMemo(() => {
        if (!apiData || !year) {
            return []
        }

        const selectedYear = Number(year)

        return apiData.data.Events.filter((event) => {
            const eventYear = Number(event.year)
            return Number.isFinite(eventYear) && eventYear >= selectedYear
        })
    }, [apiData, year])

    return (
        <SinceStyled>
            {!hasYear && <p>Choose a year</p>}
            {isLoading && hasYear ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : apiData ? (
                <>
                    <h2>{apiData.date}</h2>
                    <p>Events since {year}</p>
                    <div>
                        {filteredEvents.length === 0 ? (
                            <p>No events found for this year.</p>
                        ) : (
                            filteredEvents.map((event) => (
                                <article key={`${event.year}-${event.text}`}>
                                    <strong>{event.year}</strong>
                                    <p>{event.text}</p>
                                </article>
                            ))
                        )}
                    </div>
                </>
            ) : null}
        </SinceStyled>
    )
}