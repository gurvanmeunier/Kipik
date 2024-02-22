import React, { useState } from "react";

const Form = ({ addNote }) => {

  const [text, setText] = useState("");

  return (
    <form onSubmit={(e) => { e.preventDefault(); addNote(text); setText("") }}>
      <input type="textarea"
        placeholder="Ajouter une note"
        onInput={(e) => { setText(e.target.value) }}
        value={text}
        cols="100"
        raws="100"
        required
      />
      <br />
      <button>Ajouter</button>
    </form>
  )
}

export default Form;
