import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch("http://localhost:3000/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        body: JSON.stringify(data),
        authorization: localStorage.getItem("authorization"),
      },
    });
    console.log(res);
    if (res.ok) {
      console.log("Successfull");
      navigate("/signup");
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  useEffect(() => {
    if (localStorage.getItem("authorization")) {
      const res = async () => {
        console.log("Inside");
        const response = await fetch("http://localhost:3000/sign-in", {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            authorization: localStorage.getItem("authorization"),
          },
        });
        if (response.ok) {
          console.log("Successfull");
          navigate("/signup");
        }
      };
      res();
    }
  }, []);

  return (
    <div className="bg-black h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="text-white p-4 border-2 border-white rounded-xl"
      >
        <div className="flex gap-4 w-full justify-center text-xl">Login</div>
        <div className="pt-6">
          <div className="pb-2">Email Id</div>
          <input
            name="email"
            onChange={handleChange}
            className="p-2 outline-none bg-transparent border border-white rounded-md"
          />
        </div>
        <div className="py-6">
          <div className="pb-2">Password</div>
          <input
            name="password"
            onChange={handleChange}
            className="p-2 outline-none bg-transparent border border-white rounded-md"
          />
        </div>
        <button className="px-2 py-2 rounded-md bg-blue-600 w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
