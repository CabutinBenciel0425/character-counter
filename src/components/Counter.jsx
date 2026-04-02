import { useContext } from "react";
import classes from "./Counter.module.css";
import { CharacterCountContext } from "../context/CharacterCount";

export default function Counter() {
  const { text } = useContext(CharacterCountContext);

  const count = text.length;
  return (
    <div className={classes.charCountContainer}>
      <p>
        Character count: <span className={classes.charCount}>{count}</span>
      </p>
    </div>
  );
}
