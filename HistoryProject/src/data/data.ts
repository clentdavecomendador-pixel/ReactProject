import { historyUrl } from "./data.types";

export const todayUrl = () => `${historyUrl}/date`
export const byDateUrl = (month: number, day: number) => `${historyUrl}/date/${month}/${day}`