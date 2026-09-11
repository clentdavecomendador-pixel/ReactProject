export type PlateContext = {
    label: string;
    value?: string;
    description: string;
}

export const  onTodayContext: PlateContext = {
    label: "ON THIS DAY",
    description: "What happened on this day - historical events, deaths and births thoughout time"
}

export const byDateContext: PlateContext = {
    label: "On:",
    value: "22/08",
    description: "What happened on this day - Here you can enter a specific date to only get events that happened on this date"
}

export const sinceContext: PlateContext = {
    label: "Since:",
    value: "1947",
    description: "What happened on this day - Here you can enter a specific year to get all the events that happened on this day, since that year."
}