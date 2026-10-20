function KartaProduktu(){
    const nazwa = "maslo";
    const cena = 5;
    const CzyDostepny = true;
    return(
        <div id="tekst-ramka">
            <h2>Produkt: {nazwa}, {cena} złotych, {CzyDostepny == true ? "Dostępny" : "Niedostępny"}</h2>
            <p>Cena z vat {cena * 1.23}</p>
        </div>
    );
}
export default KartaProduktu