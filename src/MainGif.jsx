import { useState } from "react"
import { GifProcessor } from "./components/GifProcessor"
import { GetGifs } from "./components/GetGifs";
import "./MainGif.css"


export const MainGif = () => {
    const [process,setProcessValue] = useState(" "); /*estado que guarda el imput del form*/
  
  return (
    <>
    <div>
        <div className="containerMain">
            <h1 className="colorTypo"> Buscador de Gif's </h1>
            <GifProcessor setProcessValue={setProcessValue}/>
            <GetGifs process={process}/>
        </div>
      </div>
    </>
  )
}

