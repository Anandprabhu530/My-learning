import { useRecoilState, useRecoilValue } from "recoil";
import Component_2 from "./Component_2";
import { Singlecount } from "../store/atoms/count";

const Component_1 = () => {
  const count = useRecoilValue(Singlecount);
  return (
    <div>
      <div>{count}</div>
      Current Count
      <Component_2 />
    </div>
  );
};

export default Component_1;
