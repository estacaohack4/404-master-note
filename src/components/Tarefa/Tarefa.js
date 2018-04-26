import React, {Component} from 'react';
import './Tarefa.css';

class Tarefa extends Component{
    componentWillMount(){
        this.setState({feita: false});
    }

    clicar = () => {
        if(this.state.feita === true){
            this.setState({feita: false});
        }
        else{
            this.setState({feita: true});
        }
    }

    render(){
        console.log(this.props);
        return (
            <div className="tarefa">
                <input type="checkbox" checked={this.state.feita} onClick={this.clicar} />
                <p>{this.props.nome}</p>
            </div>
        );
    }
}

export default Tarefa;