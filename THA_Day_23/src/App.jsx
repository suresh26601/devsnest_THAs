import React from 'react'
import {Meme} from './components/Meme'
import {useFatch} from './components/useFatch'
import './App.css'
const Url="https://api.imgflip.com/get_memes";
export const App = () => {
    const {Load,useUrl,setUseUrl}=useFatch(Url)
    if(Load){
        return <h1>loading...</h1>
    }
    return (
        <main>
            <section>
                <h1 style={{color:'whitesmoke'}}>Meme Generator</h1>
            {
                useUrl.map((urlIs)=>{
                   return <Meme key={urlIs.id} urlIs={urlIs} setUseUrl={setUseUrl}/>
                })
            }
            </section>
        </main>
    )
}
