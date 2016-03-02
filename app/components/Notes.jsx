'use strict';

import React from 'react';
import Note from './Note.jsx';

export default ( {notes, onEdit, onDelete} ) => {

  return (
    <ul className="Notes">
      {notes.map( (note) =>
        <li className="Note" key={note.id}>
          <Note task={note.task} onEdit={onEdit.bind(null, note.id)} onDelete={onDelete.bind(null, note.id)} />
        </li>
      )}
    </ul>
  );
}
