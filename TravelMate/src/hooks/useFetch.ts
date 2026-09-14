import { useEffect, useState } from "react"

export const useFetch = <T, >(url: string) => {
    const [apiData, setApiData] = useState< T | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        url
            ? (
                setIsLoading(true),
                setError(null),

                fetch(url)
                    .then(response => {
                        return response.ok
                        ? response.json()
                        : Promise.reject(new Error("Something went error"))
                    })
                    .then(data => setApiData(data))
                    .catch(error => setError(error.message))
                    .finally(() => setIsLoading(false))
            )
            : (
                setApiData(null),
                setIsLoading(false)
            )
    }, [url])

    return {
        apiData,
        isLoading,
        error
    }
}