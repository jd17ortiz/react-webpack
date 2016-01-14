'use strict';

import uuid from 'node-uuid';
import React from 'react';
import Note from './Note.jsx';

export default class App extends

React.Component {

  constructor(props) {
    super(props);

    this.state = {
      notes : [
        {
          id: uuid.v4(),
          task: 'Having breakfast'
        },
        {
          id: uuid.v4(),
          task: 'Take the dog out'
        },
        {
          id: uuid.v4(),
          task: 'Take a shower'
        },
        {
          id: uuid.v4(),
          task: 'Coding for a while'
        }
      ],
    };
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New Task'
      }])
    });
  };

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button onClick={this.addNote}> Add Task </button>
        <ul>{notes.map( (note) =>
          <li key={note.id}>{note.task}</li>
        )}</ul>
      </div>
    );
  }

}
