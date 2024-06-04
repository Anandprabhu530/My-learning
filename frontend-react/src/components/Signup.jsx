import { useState } from "react";

const SignUp = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    const res = await fetch("http://localhost:3000/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    if (res.ok) {
      const response = await res.json();
      localStorage.setItem("authorization", response.authorization);
    }
  };
  const handleChange = (event) => {
    event.preventDefault();
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  return (
    <div className="bg-black h-screen w-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="text-white p-4 border-2 border-white rounded-xl"
      >
        <div className="flex gap-4 w-full justify-center text-xl">Sign Up</div>
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

export default SignUp;
