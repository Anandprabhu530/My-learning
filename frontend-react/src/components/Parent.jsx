import { useState } from "react";
import Component_1 from "./Component_1";

const Parent = () => {
  const [data, setData] = useState(0);
  return (
    <div>
      <div>
        <Component_1 />
      </div>
    </div>
  );
};

export default Parent;
