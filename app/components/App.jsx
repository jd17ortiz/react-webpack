'use strict';

import uuid from 'node-uuid';
import React from 'react';
import Notes from './Notes.jsx';

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
  };

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New Task'
      }])
    });
  };

  editNote = ( id, task ) => {
    const notes = this.state.notes.map( note => {
      if ( note.id === id && task ) {
        note.task = task;
      }

      return note;
    });

    this.setState({notes});
  };

  deleteNote = ( id ) => {
    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  };

  render() {
    const notes = this.state.notes;

    return (
      <div>
        <button onClick={this.addNote}> Add Task </button>
        <Notes notes={notes}
          onEdit={this.editNote}
          onDelete={this.deleteNote} />
      </div>
    );
  };

}
