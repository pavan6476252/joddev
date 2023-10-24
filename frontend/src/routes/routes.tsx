

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../screens/NotFound404';
import RoomsScreen from '../screens/rooms/RoomScr';
import JoinRoomsScr from '../screens/rooms/JoinRoomsScr';
import CreateRoomScr from '../screens/rooms/CreateRoomScr';
import ViewRoomScr from '../screens/rooms/ViewRoomScr';
import App from '../App';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path="/rooms/*">
                    <Route index element={<RoomsScreen />} />
                    <Route path="join" element={<JoinRoomsScr />} />
                    <Route path="create" element={<CreateRoomScr />} />
                    <Route path="view/:id" element={<ViewRoomScr />} />

                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );

}

export default AppRoutes