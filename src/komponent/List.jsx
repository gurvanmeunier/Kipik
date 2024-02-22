import React from "react";

const List = ({ notes, delNote }) => {

      return (
            <>
            <p>Notes:</p>
                  {notes.map((note, index) => (
                        

                        <pre onClick={() => { delNote(index) }} key={index} >{note.description}</pre>
                        
                  ))}
            <p>Cliquez sur une note pour la supprimer...</p>
            </>
      )
}

export default List;
