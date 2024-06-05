import { useMemo, useState } from "react";

const Test = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState(1);
  let count = useMemo(() => {
    let org_count = 0;
    console.log("first");
    for (let i = 1; i <= data; i++) {
      org_count += i;
    }
    return org_count;
  }, [data]);

  return (
    <div className="bg-black text-white h-screen p-10">
      <div>The value is here {value}</div>
      <button
        onClick={() => setValue(value + 1)}
        className="border-2 border-white p-2"
      >
        Click to increase count
      </button>
      <div className="pt-10">
        <input
          className="bg-transparent border-b-2 border-white pb-2 "
          placeholder="Enter number here"
          onChange={(event) => setData(event.target.value)}
        />
      </div>
      <div className="">
        The memo is done. You can view the count here {count}
      </div>
    </div>
  );
};

export default Test;
