import './App.css';
import PowitanieDnia from './zad2-6';
import KartaProduktu from './zad3-6';
import KartaFilmu from './zad2-7';
import Galeria from './zad3-7-part2';
import WyborKoloru from './zad3-8';
import FormularzLogowania from './zad3-9';
import ListaZakupow from './zad3-10';
import ListaUczestnikow from './listaUczestnikow';
import FormularzZapisu from './zad3-11';
import { useState } from 'react';
function App() {
  const [uczestnicy, setUczestnicy] = useState([]);
  function dodajUczestnika(nowyUczestnik){
    setUczestnicy((poprzedni) => [...poprzedni, nowyUczestnik]);
  }
  return (
    <div className="App">
      
      <FormularzZapisu dodajUczestnika={dodajUczestnika}/>
      <ListaUczestnikow uczestnicy={uczestnicy}/>
      <ListaZakupow/>
    </div>
  );
  
}
export default App;
