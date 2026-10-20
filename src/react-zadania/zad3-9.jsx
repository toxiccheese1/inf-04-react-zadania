import { useState } from "react"

function FormularzLogowania(){
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const Sprawdz = () =>{
        if(login.length === 0 || login == undefined)
        {
            alert("Musisz wpisać login");
        }
        if(password.length < 5)
        {
            alert("Hasło musi mieć co najmniej 5 znakow");
        }   
    }
    return(
        <div>
            <label for="login">Login</label>
            <input id="log_in" placeholder="Wpisz login" onChange={(e) => setLogin(e.target.value)}></input>
            <label for="pass">Hasło</label>
            <input id="haslo" onChange={(e) => setPassword(e.target.value)} placeholder="Wpisz hasło" type="password"></input>
            <button onClick={() => Sprawdz()}>Zaloguj</button>
            <p>{login}</p>
            <p>{password}</p>
        </div>
    )
}
export default FormularzLogowania