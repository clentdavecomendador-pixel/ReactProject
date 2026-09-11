import { createContext, useContext, useState } from "react";
type DateContextProps = {
    day: string;
    month: string;
    setDay: (day: string) => void;
    setMonth: (month: string) => void 
}
type ProviderProps = {
    children: React.ReactNode;
}

export const DateContext = createContext<DateContextProps>({
    day:"",
    month: "", 
    setDay:() => {},
    setMonth:() => {} 
})


export const DateContextProvider = ({children}: ProviderProps) => {
    const [day, setDay] = useState("")
    const [month, setMonth] = useState("")

    return(
        <DateContext.Provider value={{ day, month, setDay, setMonth }}>
            {children}
        </DateContext.Provider>
    )
}

export const useDate = () => {
    return useContext(DateContext)
}