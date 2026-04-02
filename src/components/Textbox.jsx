import { useContext } from "react";
import classes from "./Textbox.module.css";
import { CharacterCountContext } from "../context/CharacterCount";

export default function Textbox() {
  const { text, setText } = useContext(CharacterCountContext);

  return (
    <textarea
      className={classes.textbox}
      spellCheck="false"
      value={text}
      onChange={(e) => setText(e.target.value)}
    ></textarea>
  );
}
