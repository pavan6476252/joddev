// import NavBar from "./config/components/NavBar";

import { useEffect } from "react";
import authStore from "./global/global";
import { GoogleAuthProvider } from "@firebase/auth";

export default function App() {

  return (
    <header>
      {/* <NavBar /> */}
      <LoginScreen />
    </header>
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

  return (
    <div>

      {
        user ? <div>
          <h1>logout</h1>
          <button onClick={logout}>logout</button>
          <div>
            {JSON.stringify(user.email)}
            BEARER {localStorage.getItem('token')}
          </div>
        </div>
          : <div>
            <h1>Login</h1>
            <button onClick={handleGoogleLogin}>Sign in with Google</button>
          </div>

      }
    </div>

  );
}

