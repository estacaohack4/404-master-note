import React, {Component} from 'react';
import './Tarefa.css';

class Tarefa extends Component{


    render(){
        console.log(this.props);

        return (
            <div className="tarefa">
                <input type="checkbox" checked={this.props.feita} />
                <p>{this.props.nome}</p>
            </div>
        );
    }
}

export default Tarefa;