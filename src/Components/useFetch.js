import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState()
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        })
            .then((response) => {
                if (!response.ok) {
                    throw Error("Could not fetch the data.")
                }
                return response.json()
            }).then((data) => {
                setData(data)
                setIsLoading(false)
            }).catch((error) => {
                setError(error.message)
                setIsLoading(false)
            })

    }, [url])

    return { data, isLoading, error }
}

export default useFetch;