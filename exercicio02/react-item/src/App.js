import React,{Component} from 'react'
import Table from './Table'
import './App.css'

class App extends Component{
  state = {
    characters: [
      {
        name: "Maria",
        email: "maria@gmail.com",
        age: "29"
      },
      {
        name: "Gisele",
        email: "gisele@apple.com",
        age: "19"
      },
      {
        name: "José",
        email: "jose.silva@gmail.com",
        age: "31"
      },
      {
        name: "Mario",
        email: "mario@nintendo.com",
        age: "37"
      },
      {
        name: "Antonio",
        email: "antonio@uol.com.br",
        age: "33"
      },
      {
        name: "Pedro",
        email: "pedro@gmail.com",
        age: "22"
      },
      {
        name: "Andre",
        email: "andre@hotmail.com",
        age: "21"
      }
    ],
  } 
  removeCharacter = index => {
    const { characters } = this.state
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  } 
  
  render() {
    const { characters } = this.state
  
    return (
      <div className="container">
        <Table characterData={characters} removeCharacter={this.removeCharacter} />
      </div>
    )
  }
}

export default App;
