import {useEffect,useState} from 'react'

export const useFatch = (url) => {
   const [Load, setLoad] = useState(false)
    const [useUrl, setUseUrl] = useState([])
    const fetchapi=async()=>{
        const res=await fetch("https://api.imgflip.com/get_memes")
        const data= await res.json()
        const dataUrl= data.data.memes;
        setUseUrl(dataUrl)
        setLoad(false)
    }
    
    useEffect(() => {
        setLoad(true)
        fetchapi();
    }, [url])
    return {Load,useUrl,setLoad,setUseUrl,fetchapi}
}
