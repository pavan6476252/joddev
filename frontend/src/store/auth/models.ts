import { GoogleAuthProvider } from "firebase/auth";

export interface AuthState {
    authenticated: boolean,
    uid?: string | null;
    displayName?: string | null;
    email?: string | null;
    photoURL?: string | null;
    token?: string | null
    googleProvider :GoogleAuthProvider
}
