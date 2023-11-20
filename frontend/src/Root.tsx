// import { Outlet } from 'react-router-dom'

// function Root() {
//   return (
//     <>
//       <Outlet />
//     </>
//   )
// }


// export default Root

import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import OverviewView from './components/Dashboard/Pages/OverviewView';
import MyCoursesView from './components/Dashboard/Pages/MyCoursesView';
import IntroPage from './components/intro/IntroPage';

import RoomieHomePage from './features/roomie/components/HomePage';
import Authentication from './features/auth/AuthenticationPage';
import App from './App';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from './config/firebase_config';
import { useDispatch, useSelector } from 'react-redux'
import { removeUser, saveUser } from './store/auth/authSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { AuthState } from './store/auth/models';
import RoomieProfilePage from './features/roomie/components/profile/RoomieProfilePage';
import CreateRoom from './features/roomie/components/room/CreateRoomPage';
import CreateRoomPage from './features/roomie/components/room/CreateRoomPage';
import RoomieSearchPage from './features/roomie/components/search/RoomieSearchPage';
import DevScreen from './features/dev/components/DevScreen';
const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" >
    <Route index element={<App />} />

    <Route path='/authenticate' element={<Authentication />} />

    <Route
      path="dashboard"
      element={<Dashboard />}

    >

      <Route index element={<OverviewView />} />
      <Route path='courses' element={<MyCoursesView />} />
      <Route path='channels' element={<MyCoursesView />} />
      <Route path='blogs' element={<MyCoursesView />} />
      <Route path='settings' element={<MyCoursesView />} />
    </Route>

    <Route path='/intro' element={<IntroPage />} />

    {/* // roomie  */}
    <Route path='roomie'>
      <Route index element={<RoomieHomePage />} />
      <Route path='profile' element={<RoomieProfilePage />} />
      <Route path='create-room' element={<CreateRoomPage />} />
      <Route path='search' element={<RoomieSearchPage />} />

    </Route>

    <Route path='dev'>
      <Route index element={<DevScreen />} />
    </Route>

  </Route >
))




function Root() {
  const authState = useAppSelector(state => state.auth)
  const dispatch = useAppDispatch()
  useEffect(() => {
    const listenAuth = onAuthStateChanged(auth, (user) => {
      if (user !== null) {

        user.getIdToken().then((tkn) => {
          const authstate: AuthState = {
            ...authState,
            authenticated: true,
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
            uid: user.uid,
            token: tkn,



          }
          console.log("user state change");
          dispatch(saveUser({ user: authstate }));
        });
      } else {

      }
    });

    return () => {
      listenAuth();
    };
  }, []);

  return (
    <RouterProvider router={router} />
  )
}

export default Root