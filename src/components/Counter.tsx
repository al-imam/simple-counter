import { useState } from "react";
import classes from "./counter.module.css";

function Counter({ add, sub }: { add: number; sub: number }) {
  const [count, setCount] = useState<number>(0);

  const addHandler = (): void => {
    setCount((c) => c + add);
  };

  const subHandler = (): void => {
    setCount((c) => c - sub);
  };

  return (
    <div className={classes.div}>
      <span className={classes.span}>{count}</span>
      <p className={classes.p}>
        Add by - "{add}", and Subtract by - "{sub}".
      </p>
      <button className={classes.button} onClick={addHandler}>
        +
      </button>
      <button className={classes.button} onClick={subHandler}>
        -
      </button>
    </div>
  );
}

export default Counter;
