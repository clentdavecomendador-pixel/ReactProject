import type { HistoryResponse } from "../../data/data.types"
import { useFetch } from "../../hooks/useFetch"
import { TodayStyled } from "./today.styled"

export const Today = () => {
    const { apiData, isLoading, error } = useFetch<HistoryResponse>("https://history.muffinlabs.com/date")



    return(
        <TodayStyled>
            { isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ): (
               <>
                <h2>{apiData && apiData.date}</h2>

                 <div>
                {apiData && apiData.data.Events.map((event) => {
                    return(
                        <article key={`${event.year}-${event.text}`}>
                            <strong>{event.year}</strong>
                            <p>{event.text}</p>
                        </article>
                    )
                })}
                </div>
                </>
            )}

        </TodayStyled>
    )
}