import { useState } from "react"; 

 

// Wartości początkowe formularza. 

const STAN_POCZATKOWY = { 

 imieNazwisko: "", 

 email: "",
 
 numer: null, 

 temat: "React od podstaw", 

 liczbaMiejsc: 1, 

 

}; 

 

function FormularzZapisu({ dodajUczestnika }) { 

 const [dane, setDane] = useState(STAN_POCZATKOWY); 

 const [blad, setBlad] = useState(""); 

 

 // Uniwersalna obsługa zmian wszystkich pól. 

 function obsluzZmiane(zdarzenie) { 

 const { name, value } = zdarzenie.target; 

 setDane((poprzednie) => ({ 

    ...poprzednie, 
    

  [name]: value, 

 }));
 console.log(name); 

 } 

 

 // Walidacja danych według reguł z arkusza. 

 function sprawdzDane(dane) { 

 if (dane.imieNazwisko.trim() === "") { 

  return "Pole „Imię i nazwisko” nie może być puste."; 

 } 

 if (!dane.email.includes("@")) { 

  return "Adres e–mail musi zawierać znak @."; 

 } 

 const liczba = Number(dane.liczbaMiejsc); 

 if (!Number.isInteger(liczba) || liczba <= 0) { 

  return "Liczba miejsc musi być liczbą całkowitą większą od zera."; 

 } 
 if(dane.numer < 100000000 || dane.numer > 999999999)
 {
   console.log(dane.numer);
   return "Numer Kontaktowy musi mieć 9 cyfer";
   
 }
 return ""; 

 } 

 

 // Obsługa wysłania formularza. 

 function obsluzWyslanie(zdarzenie) { 

 zdarzenie.preventDefault(); 

 const komunikat = sprawdzDane(dane); 

 if (komunikat !== "") { 

  setBlad(komunikat); 

  return; 

 } 

 const nowyUczestnik = { 

  id: Date.now(), 

  imieNazwisko: dane.imieNazwisko.trim(), 

  email: dane.email.trim(), 

  numer: Number(dane.numer),

  temat: dane.temat, 

  liczbaMiejsc: Number(dane.liczbaMiejsc), 

 }; 

 dodajUczestnika(nowyUczestnik); 

 setBlad(""); 

 setDane(STAN_POCZATKOWY); 

 } 

 

 return ( 

 <form className="formularz" onSubmit={obsluzWyslanie}> 

  <div className="pole"> 

  <label htmlFor="imieNazwisko">Imię i nazwisko</label> 

  <input 

   id="imieNazwisko" 

   name="imieNazwisko" 

   type="text" 

   value={dane.imieNazwisko} 

   onChange={obsluzZmiane} 

  /> 

  </div> 

 

  <div className="pole"> 

  <label htmlFor="email">Adres e–mail</label> 

  <input 

   id="email" 

   name="email" 

   type="text" 

   value={dane.email} 

   onChange={obsluzZmiane} 

  /> 

  </div> 

 <div>
    <label htmlFor="number">Numer kontaktowy</label>
    <input id="number"
    name="numer"
    type="number"
    value={dane.numer}
    onChange={obsluzZmiane}/>
 </div>

  <div className="pole"> 

  <label htmlFor="temat">Temat warsztatu</label> 

  <select 

   id="temat" 

   name="temat" 

   value={dane.temat} 

   onChange={obsluzZmiane} 

  > 

   <option>React od podstaw</option> 

   <option>JavaScript w praktyce</option> 

   <option>TypeScript dla początkujących</option> 

  </select> 

  </div> 

 

  <div className="pole"> 

  <label htmlFor="liczbaMiejsc">Licba miejsc</label> 

  <input 

   id="liczbaMiejsc" 

   name="liczbaMiejsc" 

   type="number" 

   value={dane.liczbaMiejsc} 

   onChange={obsluzZmiane} 

  /> 

  </div> 

 

  <button type="submit" className="przycisk–zapisz"> 

  Zapisz 

  </button> 

 

  {/* Komunikat błędu wyświetlamy tylko, gdy zmienna blad nie jest pusta. */} 

  {blad !== "" && <p className="komunikat–bledu">{blad}</p>} 

 </form> 

 ); 

} 

 

export default FormularzZapisu; 