import {useState} from "react";

export function Home(){
    const[hora]= useState(new Date().getHours())
    const saudacao = (hora>=0 && hora<=12) ? 'BOM DIA' : (hora>12 && hora<=18) ? 'BOA TARDE' : 'BOA NOITE';
    return(
        <div>
            <h1>{saudacao}</h1>
            <p>Aprendendo React</p>
            <ul>Exercicios feitos:
                <li>
                    <a href="http://localhost:5173/Contador">Contador</a>
                </li>
                <li>
                    <a href="http://localhost:5173/ListaTarefa">Lista de Tarefas</a>
                </li>   
            </ul>
        </div>
    );
}
export default Home;