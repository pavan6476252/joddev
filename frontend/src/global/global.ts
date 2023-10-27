import { create } from 'zustand';
import {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signOut,
    User,
    Auth,
} from 'firebase/auth';
import secure from '../global/secure';
import api from './api';

import firebaseApp from '../config/firebase_config';

interface JodUser {
    uid: string;
    name: string;
    email: string;
    picture: string;
}

interface AuthState {
    provider: GoogleAuthProvider;
    auth: Auth;
    user: JodUser | null;
    init: () => Promise<void>;
    signInWithGoogle: () => Promise<void>;
    logout: () => Promise<void>;
}

const authStore = create<AuthState>((set) => ({
    provider: new GoogleAuthProvider(),
    auth: getAuth(firebaseApp),
    user: null,
    init: async () => {
        const user = await secure.getItem('user');
        console.log("init ", user)
        if (user) {
            console.log("this")
            set({ user: user });

        } else {
            // try {
            //     const tkn = await authStore.getState().auth.currentUser?.getIdToken();
            //     console.log("hello ",tkn)


            //     if (tkn !== undefined) {
            //         const { data } = await api.get('/users/profile', {
            //             headers: { 'Authorization': 'Bearer ' + tkn },
            //         });
            //         // console.log('init profile', data);
            //         set({ user: data });

            //     }
            // } catch (e) {
            //     console.error('Auth init error:', e);
            // }
            console.log("init :", 'no user data found')
        }
    },
    signInWithGoogle: async () => {
        try {
            const result = await signInWithPopup(getAuth(), authStore.getState().provider);
            const user: User = result.user;

            if (user) {
                const { token } = await user.getIdTokenResult(true);
                const jodUser: JodUser = {
                    uid: user.uid || '',
                    name: user.displayName || '',
                    email: user.email || '',
                    picture: user.photoURL || '',
                };
                secure.setItem(`user`, jodUser);
                secure.setItem(`token`, token);
                set({ user: jodUser });
            }
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    },
    logout: async () => {
        try {

            secure.removeItem(`user`);
            secure.removeItem(`token`);

            await signOut(authStore.getState().auth);
            set({ user: null });
            console.log('Signout done ✅');
        } catch (error) {
            console.error('Error while signing out:', error);
        }
    },
}));


export default authStore