import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

class Table extends Component {
  render() {
      const { characterData, removeCharacter } = this.props
      
      return (
        <table class="table table-sm table-hover">
            <TableHeader />
            <TableBody characterData={characterData} removeCharacter={removeCharacter} />
        </table>
        )
      }
    }

    export default Table;