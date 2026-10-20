import { useState } from "react";

function ListaUczestnikow({ uczestnicy }) { 

 // Gdy lista jest pusta, wyświetlamy informację zamiast pustego miejsca. 

 if (uczestnicy.length === 0) { 

 return <p>Brak zapisanych uczestników.</p>; 

 } 

 return ( 

 <div className="lista"> 

  {/* Nad listą pokazujemy liczbę zapisanych osób. */} 

  <p className="licznik">Liczba zapisanych: {uczestnicy.length}</p> 

 

  <ul> 

  {uczestnicy.map((osoba) => ( 

   // Atrybut key musi być unikalny — używamy identyfikatora osoby. 

   <li key={osoba.id}> 

   <strong>{osoba.imieNazwisko}</strong> — {osoba.temat}, 

   liczba miejsc: {osoba.liczbaMiejsc} 
   Numer kontaktowy {osoba.numer}
    <button onClick={()=> osoba.filter((us) =>  us !== osoba.id)}>Usuń</button>
   </li> 

  ))} 

  </ul> 

 </div> 

 ); 

} 

 

export default ListaUczestnikow; 