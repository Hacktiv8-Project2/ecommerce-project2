import { useSelector, useDispatch } from "react-redux";
import { useState } from 'react';
import { useLocation, Navigate } from 'react-router';
import { userLogin } from "../features/authSlice";

function LoginPages() {
  const dispatch = useDispatch();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const auth = useSelector((state) => state.auth);
  console.log(auth);

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

  if (auth.isAuthenticated) {
    return <Navigate to={from} />
  }
  
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md">
        <form 
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" 
          onSubmit={handleOnSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="input username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="input password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
          <div className="message">
            {auth.isLoading &&
              <p className="mt-5 text-red-500">loading...</p>
            }
            {auth.errorMessage &&
              <p className="mt-5 text-red-500">{auth.errorMessage}</p>
            }
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPages