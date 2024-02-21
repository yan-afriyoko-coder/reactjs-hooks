import { useEffect, useState } from "react";

const BasicUseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);
  return <div>Render {count} time !</div>;
};

export default BasicUseEffect;
