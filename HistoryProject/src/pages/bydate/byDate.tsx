import { useDate } from "../../Context/useDate"
import { byDateUrl } from "../../data/data"
import type { HistoryResponse } from "../../data/data.types"
import { useFetch } from "../../hooks/useFetch"
import { ByDateStyled } from "./byDate.styled"

export const ByDate = () => {
    const { day, month } = useDate()

    return (
        <ByDateStyled>
            
        </ByDateStyled>
    )
}

