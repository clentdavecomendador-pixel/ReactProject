import { goals } from "../../data/sdg"
import { GoalListCard } from "../GoalListCard/GoalListCard"


export const GoalList = () => {
    return (
        <>
            {goals.map((goal) => (
                <GoalListCard title={goal.title} icon={goal.icon} color={goal.color}></GoalListCard>
            ))}
        </>
    )
}