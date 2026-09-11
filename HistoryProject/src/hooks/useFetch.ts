import { useEffect, useState } from "react"

export const useFetch = <T, >(url: string) => {
    const [apiData, setApiData] = useState<T | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!url) {
            setApiData(null)
            setIsLoading(false)
            return
        }
        setIsLoading(true)
        setError(null)


        fetch(url)
        .then(response =>
            response.ok
             ? response.json()
             : Promise.reject("Something went wrong"))
        .then(data => setApiData(data))
        .catch(error => setError(error))
        .finally(() => setIsLoading(false))
    }, [url])

    return { apiData, isLoading, error}
}