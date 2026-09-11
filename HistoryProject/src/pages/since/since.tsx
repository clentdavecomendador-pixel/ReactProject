import { useDate } from "../../Context/useDate"
import { SinceStyled } from "./since.styled"

export const Since = () => {
    const { day, month } = useDate()

    return(
        <SinceStyled>
            <p>Selected date: {month && day ? `${month}/${day}` : "Choose a month and day"}</p>
        </SinceStyled>
    )
}