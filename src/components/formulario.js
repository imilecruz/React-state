import React from 'react';
import '../App.css';

class Formulario extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: 'Cicero',
      idade: null,
      signo: '',
    }
  }

  trocanome= (ev) => {
    this.setState({
      nome: ev.target.value,
    });
  }

  trocaidade= (ev) => {
    this.setState({
      idade: ev.target.value,
    });
  }

  troca= (ev) => {
    this.setState({
      nome: ev.target.value,
    });
  }

  render() {
    return(
      <form>
        <label>nome:
          <input type="text" onChange={this.trocanome}/>
        </label>
        <p>{this.state.nome}</p>
        <label>idade:
          <input type="number" onChange={this.trocaidade}/>
        </label>
        <p>{this.state.idade}</p>
        <label>signo:
          <input type="text" onChange={this.signo}/>
        </label>
        <p>{this.state.signo}</p>
      </form>
    )
  }
}

export default Formulario;