import { useEffect, useState } from "react";

const useFetch = (url, category = null) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPanding, setIsPanding] = useState(true)

    const fetchApi = async (link) => {
        try {
            const req = await fetch(link)
            if (!req.ok) {
                throw new Error(req.statusText)
            }
            const data = await req.json()
            if (category) {
                filterData(category, data.menu)
            } else {
                setData(data.menu)
            }
            setIsPanding(false)
        } catch (error) {
            setIsPanding(false)
        }
    }
    function filterData(category, items) {
        const newData = items.filter((item) => {
            return item.category === category
        })
        setData(newData)
    }
    useEffect(() => {
        fetchApi(url)
    }, [url])


    return { data, error, isPanding }
}
export { useFetch }