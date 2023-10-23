// import React, { useState } from 'react'

// import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

// function LoginButton() {
 

//     return (
//         <div className="flex items-center space-x-4">
//             <a href="#" className="text-white hover:underline">Blogs</a>
//             {isUserLoggedIn ? (
//                 <button className="text-white border border-white rounded-md px-3 py-1">User Profile</button>
//             ) : (
//                 <button className="text-white border border-white rounded-md px-3 py-1">Login</button>
//             )}
//         </div>
//     )
// }

// export default LoginButton


 
// function App() {
//     const provider = new GoogleAuthProvider();
//     provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
//     const auth = getAuth();

//     // Use useEffect to initialize authorizedUser from sessionStorage
//     const [authorizedUser, setAuthorizedUser] = useState<boolean>(() => {
//         const storedToken = sessionStorage.getItem("accessToken");
//         return !!storedToken;
//     });

//     function signInWithGoogle() {
//         signInWithPopup(auth, provider)
//             .then((result) => {
//                 // This gives you an Access Token. You can use it to access the Google API.
//                 const credential = GoogleAuthProvider.credentialFromResult(result);
//                 // Access token of the user
//                 console.log("creadentials", credential);
                
//                 const token = credential?.accessToken;

//                 console.log("token ", token);
//                 // The signed-in user info.
//                 const user = result.user;
//                 if (user) {
//                     user.getIdToken().then((tkn) => {
//                         console.log("token ", tkn);
//                         // Set access token in session storage
//                         sessionStorage.setItem("accessToken", tkn);
//                         setAuthorizedUser(true);
//                     });
//                 }
//                 console.log(user);
//             })
//             .catch((error) => {
//                 // Handle Errors here.
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 // The email of the user's account used.
//                 const email = error.customData.email;
//                 // The AuthCredential type that was used.
//                 const credential = GoogleAuthProvider.credentialFromError(error);

//             });
//     }

//     function logoutUser() {
//         signOut(auth).then(() => {
//             // Clear session storage
//             sessionStorage.removeItem("accessToken");
//             setAuthorizedUser(false);
//             // window.location.replace("/");
//             alert('Logged Out Successfully');
//         }).catch((error) => {
//             // An error happened.
//             alert(error);
//         });
//     }

//     return (
//         <div className="App">
//             {authorizedUser ? (
//                 <>
//                     <p>Authorized user</p>
//                     <button onClick={logoutUser}>Logout Button</button>
//                 </>
//             ) : (
//                 <>
//                     <button onClick={signInWithGoogle}>SignInWithGoogle</button>
//                 </>
//             )}
//         </div>
//     );
// }

// export default App;
