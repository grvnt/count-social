import { useState } from "react";
import Warning from "./Warning";

export default function Textarea({ text, setText }) {
  const [warningText, setWarningText] = useState("");

  const handleChange = (e) => {
    let newText = e.target.value;

    //Basic client side validation
    if (/[<>@#]/.test(newText)) {
      setWarningText("No special characters allowed!");
      newText = newText.replace(/[<>@#]/g, "");
    } else {
      setWarningText("");
    }

    setText(newText);
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Don't just sit there, type something!"
      />
      {warningText ? <Warning warningText={warningText} /> : null}
    </div>
  );
}
