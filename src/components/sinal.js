import React from 'react';
import '../App.css';

class Sinal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      sinal: null,
    }
  }

  parado= () => {
    this.setState({
      sinal: 'vermelho',
    })
  }

  atencao= () => {
    this.setState({
      sinal: 'amarelo',
    })
  }

  siga= () => {
    this.setState({
      sinal: 'verde',
    })
  }

  render() {
    return (
      <div>
        <p>{this.state.sinal}</p>
        <button onClick={this.parado}>vermelho</button>
        <button onClick={this.atencao}>amarelo</button>
        <button onClick={this.siga}>verde</button>
      </div>
    )
  }
    
}

export default Sinal;
