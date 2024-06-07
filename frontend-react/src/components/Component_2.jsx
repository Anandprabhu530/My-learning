import { useRecoilState, useSetRecoilState } from "recoil";
import { Singlecount } from "../store/atoms/count";
import Component_3 from "./Component_3";

const Component_2 = () => {
  const setter = useSetRecoilState(Singlecount);
  const [count, setcount] = useRecoilState(Singlecount);

  // const count = useRecoilState(Singlecount);
  return (
    <div>
      <div className="flex gap-10 pt-10">
        <button
          className="p-2 border-2 boredr-black"
          onClick={() => setcount((count) => count + 1)}
        >
          Increase
        </button>
        <button
          className="p-2 border-2 boredr-black"
          onClick={() => setcount((count) => count - 1)}
        >
          Decrease
        </button>
      </div>
      <div>
        <Component_3 />
      </div>
    </div>
  );
};

export default Component_2;
