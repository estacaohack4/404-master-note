import React, { Component } from 'react';
import './App.css';
import Tarefa from '../Tarefa/Tarefa';

class App extends Component {
  componentWillMount(){
    this.setState({tarefas: []});
  }

  atualizarTarefa = (event) => {
    if(event.keyCode == 13){
      let tarefas = this.state.tarefas;
      tarefas.push(event.target.value);
      
      this.setState({tarefas: tarefas});
    }
  }

  render = () => {
    let htmlTarefas = [];

    for(let tarefa of this.state.tarefas){
      htmlTarefas.push(<Tarefa nome={tarefa}/>);
    }

    return (
      <div>
        <header>
          <h1>Master<span>note</span></h1>
        </header>

        <div className="container">
          <section className="formulario">
            <input type="text" placeholder="Digite uma tarefa..." onKeyDown={this.atualizarTarefa} />
          </section>
          
          <section className="lista">
            {htmlTarefas}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
