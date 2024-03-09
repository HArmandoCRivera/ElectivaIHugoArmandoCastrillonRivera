import { useState } from "react"
import "./GifProcessor.css"


export const GifProcessor = ({ setProcessValue }) => {

    const [ search, setSearch] = useState('');
    const [ warnings, setWarnings ] = useState(false);

    const verify = a => {
        a.preventDefault();
        if (search===""){
            setWarnings(true);
            return;
        }
        else {
          setWarnings(false);
          setProcessValue({search});
          console.log({search});
        }
    }
    
  const handleSearchChange = (e) =>{setSearch(e.target.value)}

  return (
    <>
      <h2 className="colorTypo">Inserta la categoría que quieres buscar</h2>
        <form onSubmit={ verify }>
            <input className="search" type='text' placeholder='Buscar...' value={search}
                onChange={handleSearchChange}
            />
            <button className="Button" type="submit">Consultar</button>
        </form>
        { warnings ? <p className='warnings'>Ingresa algún dato</p> :""}
    </>
  );
}


