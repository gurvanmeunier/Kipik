import React from "react";

const List = ({ notes, delNote }) => {

      return (
            <>
            <p>Notes:</p>
            <ul>
                  {notes.map((note, index) => (
                        <li onClick={() => { delNote(index) }} key={index} >

                              <pre>{note.description}</pre>
                        </li>
                  ))}

            </ul>
            <p>Cliquez sur une note pour la supprimer...</p>
            </>
      )
}

export default List;
