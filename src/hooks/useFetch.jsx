import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPanding, setIsPanding] = useState(true)
    useEffect(() => {
        const getData = async (link) => {
            try {
                const req = await fetch(link)
                if (!req.ok) {
                    throw new Error(req.statusText)
                }
                const data = await req.json()
                setData(data)
                setIsPanding(false)
            } catch (error) {
                console.log(error.message);
                setIsPanding(false)
            }
        }
        getData(url)
    }, [url])
    return { data, error, isPanding }
}
export { useFetch }