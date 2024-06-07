import { useRecoilValue } from "recoil";
import { singleselector } from "../store/atoms/count";

const Component_3 = () => {
  const count = useRecoilValue(singleselector);
  return (
    <div>
      <div>This is the third compoennt {count}</div>
    </div>
  );
};

export default Component_3;
