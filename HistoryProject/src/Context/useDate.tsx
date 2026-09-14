import { createContext, useContext, useState } from "react";
type DateContextProps = {
    day: string;
    month: string;
    year: string;
    setDay: (day: string) => void;
    setMonth: (month: string) => void;
    setYear: (year: string) => void;
}
type ProviderProps = {
    children: React.ReactNode;
}

export const DateContext = createContext<DateContextProps>({
    day:"",
    month: "",
    year: "",
    setDay:() => {},
    setMonth:() => {},
    setYear:() => {}
})


export const DateContextProvider = ({children}: ProviderProps) => {
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")
    const [year, setYear] = useState("")

    return(
        <DateContext.Provider value={{ day, month, year, setDay, setMonth, setYear }}>
            {children}
        </DateContext.Provider>
    )
}

export const useDate = () => {
    return useContext(DateContext)
}