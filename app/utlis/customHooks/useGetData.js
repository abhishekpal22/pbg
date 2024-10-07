import axios from "axios"
import { useEffect, useState } from "react"


const useGetData = (urlEndpoint,header)=>{
    const [getData, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
        const fetchData = async()=>{
            setIsLoading(true)
            try {
                const response = await axios.get(urlEndpoint,header? header : null)
                setData(response.data)
            } catch (error) {
                setError(error)
            } finally{
                setIsLoading(false)
            }
        }
        fetchData()
    },[])

    return {getData, isLoading , error }
}

export default useGetData