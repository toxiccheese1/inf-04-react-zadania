
function KartaZdjecia({tytul, adres, polubienia})
{
    return(
        <div>
        {tytul === undefined ? <p>Brak tytułu</p> : <p>{tytul}</p>}
        <p>{adres}</p>
        {polubienia > 100 ? <p>Popularne</p> : <p></p>}
        </div>
    )
}
export default KartaZdjecia