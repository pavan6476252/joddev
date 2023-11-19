
import { createSlice } from '@reduxjs/toolkit';
import { GoogleAuthProvider, User, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../config/firebase_config';
import { AuthState } from './models';


const initialState: AuthState | null = {
    authenticated: false,
    googleProvider: new GoogleAuthProvider()
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        saveUser: (state, action) => {
            console.log('save user')
            const { displayName, email, photoURL, uid } = action.payload.user;
            state.authenticated = true;
            state.displayName = displayName;
            state.email = email;
            state.photoURL = photoURL;
            state.uid = uid;

        },

        removeUser: (state, action) => {
            console.log('payload', action.payload)
            state.displayName = null
            state.photoURL = null
            state.token = null
            state.uid = null
            state.email = null
        },
        signInWithGoogle: (state) => {
            signInWithPopup(auth, state.googleProvider)
                .then((result) => {

                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential?.accessToken;

                    console.log("token ", token);
                    const user = result.user;
                    if (user) {


                        console.log('user' + user);
                    }
                })
                .catch((error) => {
                    const credential = GoogleAuthProvider.credentialFromError(error);
                    console.log(credential)
                    console.log('error while login')
                });
        },
        logout: (state) => {
            return {
              ...state,
              authenticated: false,
              displayName: null,
              photoURL: null,
              token: null,
              uid: null,
              email: null,
            };
          }

    }

})
export const { saveUser, removeUser, signInWithGoogle, logout } = authSlice.actions;

export default authSlice.reducer;
