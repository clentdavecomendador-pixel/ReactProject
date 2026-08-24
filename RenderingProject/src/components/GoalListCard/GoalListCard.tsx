import { GoalListCardStyled } from "./GoalListCard.styled"
import type { GoalProps } from "./GoalListCard.types"
import parse from 'html-react-parser'

export const GoalListCard = ({title, icon, color}: GoalProps) => {
  return (
    <GoalListCardStyled color={color}>
        <p>{parse(icon)}</p>
        <p>{title}</p>
    </GoalListCardStyled>
  )
}
