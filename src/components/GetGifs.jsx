import React from "react";
import { Graphic } from "./Graphic";
import { useApi } from "../helpers/Helper";
import "./GifProcessor.css"


export const GetGifs = ({ process }) => {
    console.log({process});
    const url = ` https://api.giphy.com/v1/gifs/search?api_key=LNGFcy3Zt3CewpzfnHuKsFUwn4eVWNND&q=${process.search}&limit=12 `;
    const { charge,data } = useApi( url );
    return (
        <>
        <h2 className="colorTypo">Gifs Consultados</h2>
        <div className="container-gifs"> 
            {
                charge ?
                    data.map( img => (
                        <Graphic key = {img.id} title = {img.title} url = {img.images.downsized_medium.url} />
                    ))
                :''
            }
        </div>
        </>
    );
}
