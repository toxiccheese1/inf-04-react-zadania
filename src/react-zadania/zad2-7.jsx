function KartaFilmu({tytul, rezyser, ocena, CzyPolecany})
{
    return(
        <>
            <h2>{tytul}</h2>
            <p>reżyser: {rezyser}, Ocena: {ocena}/10 {CzyPolecany == true ? "Polecany" :"Nie polecany"}</p>
        </>
        
    )
}
export default KartaFilmu