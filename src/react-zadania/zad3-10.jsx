import { useState } from "react";
function ListaZakupow()
{
    const [id, setId] = useState(1); 
    const [nazwa, setNazwa] = useState(); 
    const [tablica, setTablica] = useState([]); 
    function Zmien()
    {
        setTablica((cokolwiek) => [...cokolwiek, {id:id, nazwa:nazwa}]);
        setId(id+1);
    }
    function Usuwaj(idUsun)
    {
        setTablica(tablica.filter((cos)=> cos.id !== idUsun));
    }
    return(
        <div>
            <input type="text" value={nazwa} onChange={(event) => setNazwa(event.target.value)} placeholder="Wpisz coś"></input>
            <button onClick={()=>Zmien()}>Ciskaj</button><br/>
            {nazwa}
            <ul>
            {tablica.map((index) =>(
                <li key={index.id}>{index.nazwa}
                <button onClick={()=>Usuwaj(index.id)}>Usuń</button>
                </li>
                
            ))}
            </ul>
        </div>
    );
}
export default ListaZakupow