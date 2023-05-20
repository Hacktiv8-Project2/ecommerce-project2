import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { useLocation, Navigate } from 'react-router';
import { userLogin } from "../features/auth/authSlice";
import Button from "../components/button/Button";

function LoginPages() {
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const auth = useSelector((state) => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(userLogin({username, password}));
  }

  if (auth.token === "admin@bukapedia.com") {
    return <Navigate to="/admin" />
  }

  if (auth.isAuthenticated) {
    return <Navigate to={from} />
  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-slate-100 -mt-6">
      <form
        className="w-11/12 px-6 sm:w-[380px] bg-white sm:px-8 py-12 rounded-md shadow-md -mt-10"
        onSubmit={handleOnSubmit}>
        <h1 className="text-3xl text-center font-semibold">Selamat Datang Kembali!</h1>
        <p className="text-sm text-center text-slate-500 mt-2">Silahkan masuk untuk mengelola akun anda</p>

        <div className="mb-5 mt-12">
          <label
            className="block text-gray-700 font-medium mb-1 text-sm"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="border-b border-slate-300 w-full py-2 text-gray-700 leading-tight focus:outline-none focus:border-b-2 focus:border-sky-500 focus:transition focus:duration-120 text-sm"
            id="username"
            type="text"
            placeholder="Masukkan username"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="off"
          />
        </div>
        <div className="mb-5">
          <label
            className="block text-gray-700 font-bold mb-1 text-sm font-medium"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="text-sm border-b border-slate-300 w-full py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:border-b-2 focus:border-sky-500 focus:transition focus:duration-120"
            id="password"
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="off"
          />
        </div>
        <Button
          className="w-full bg-sky-500 hover:bg-sky-600 active:bg-sky-500 text-white font-medium py-2 px-4 rounded-full focus:outline-none"
          type="submit"
        >
          Masuk
        </Button>
        {auth.errorMessage &&
          <p className="mt-5 text-red-500 text-sm -mb-2">{auth.errorMessage}</p>
        }
      </form>
    </div>
  );
}

export default LoginPages