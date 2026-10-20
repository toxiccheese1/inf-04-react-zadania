import { useState } from "react"
function WyborKoloru()
{
    const Pokaz = () =>{
        {kolor === "red" && <p>Czerwony</p>}
        {kolor === "white" && <p>Biały</p>}
        {kolor === "blue" && <p>Niebieski</p>}
        {kolor === "green" && <p>Zielony</p>}
    }
    const[kolor, setKolor] = useState("white");
    return(
        <div id="kolory">
            <button onClick={() => setKolor("red")}>Czerwony</button>
            <button onClick={() => setKolor("blue")}>Niebieski</button>
            <button onClick={() => setKolor("green")}>Zielony</button>
            <button onClick={() => Pokaz}>Pokaż nazwę koloru</button>
            <section className={kolor}></section>
            
        </div>
    )
}
export default WyborKoloru