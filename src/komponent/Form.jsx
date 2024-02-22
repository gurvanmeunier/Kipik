import React, { useState } from "react";

const Form = ({ addNote }) => {

  const [text, setText] = useState("");

  return (
    <form onSubmit={(e) => { e.preventDefault(); addNote(text); setText("") }}>
      <textarea
        placeholder="Entrez votre note ici..."
        onInput={(e) => { setText(e.target.value) }}
        value={text}
        required
      />
      <br />
      <button>Ajouter</button>
    </form>
  )
}

export default Form;
