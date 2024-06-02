const Login = () => {
  return (
    <div className="bg-black h-screen w-full flex items-center justify-center">
      <div className="text-white p-4 border-2 border-white rounded-xl">
        <div className="flex gap-4 w-full justify-center text-xl">Login</div>
        <div className="pt-6">
          <div className="pb-2">Email Id</div>
          <input className="p-2 outline-none bg-transparent border border-white rounded-md" />
        </div>
        <div className="pt-6">
          <div className="pb-2">Password</div>
          <input className="p-2 outline-none bg-transparent border border-white rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default Login;
