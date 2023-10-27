// import NavBar from "./config/components/NavBar";

import { useEffect } from "react";
import authStore from "./global/global";
import { GoogleAuthProvider } from "@firebase/auth";
import React from "react";
import { GlobalNavbar } from "./components/GlobalNavBar";

export default function App() {

  return (
    <body className="w-screen">
      {/* <NavBar /> */}
      <GlobalNavbar />
      <LoginScreen />
    </body>
  )
}


function LoginScreen() {
  useEffect(() => {
    init()
  }, [])

  const { signInWithGoogle, user, logout, init } = authStore();

  const handleGoogleLogin = () => {
    signInWithGoogle();
  };

  console.log("user ", user)
  return (
    <div className="w-full">

      {
        user ? <div>
          <h1>logout</h1>
          <button onClick={logout}>logout</button>
          <p className="overflow-clip">
            {JSON.stringify(user.email)}
            BEARER {localStorage.getItem('token')}
          </p>
        </div>
          : <div>
            <h1>Login</h1>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
          </div>

      }
    </div>

  );
}

