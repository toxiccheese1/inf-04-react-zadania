import { children } from "react"
import KartaZdjecia from "./zad3-7"
function Galeria()
{
    return(
        <div>
            <h2>Zakopane</h2>
            <img src="zakopane.jpeg" width="300"/>
            <KartaZdjecia adres="Zakopane" polubienia="105"/>
            <h2>Władysławowo</h2>
            <img src="wladek.webp" width="300"/>
            <KartaZdjecia tytul="Morze" adres="Władysławowo" polubienia="83"/>
        </div>
    )
}
export default Galeria