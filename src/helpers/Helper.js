import { useEffect, useState } from "react";


export const useApi = (url) => {


    const [data, setData] = useState(null);
    const [charge, setCharge] = useState(false);

    const fetchApi = () => {
        fetch(url) /*promesa*/
            .then(r => r.json())
            .then(rJson => {
                setCharge(true);
                setData(rJson.data)

            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchApi(); 
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]) 

    return { charge, data }

}