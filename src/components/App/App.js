import React, { Component } from 'react';
import './App.css';
import Tarefa from '../Tarefa/Tarefa';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>Master<span>note</span></h1>
        </header>

        <div className="container">
          <section className="formulario">
            <input type="text" placeholder="Digite uma tarefa..." />
          </section>
          
          <section className="lista">
            <Tarefa nome="Comprar pão" feita={true}/>
            <Tarefa nome="Lavar roupa" feita={false}/>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
