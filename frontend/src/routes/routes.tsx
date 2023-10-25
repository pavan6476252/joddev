

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../screens/NotFound404';
import RoomsScreen from '../screens/rooms/RoomScr';
import JoinRoomsScr from '../screens/rooms/JoinRoomsScr';
import CreateRoomScr from '../screens/rooms/CreateRoomScr';
import ViewRoomScr from '../screens/rooms/ViewRoomScr';
import App from '../App';
import BlogHomeScreen from '../screens/blog/BlogHomeScreen';
import EditBlogScreen from '../screens/blog/EditBlogScreen';
import PostBlogScreen from '../screens/blog/PostBlogScreen';
import SearchBlogsScreen from '../screens/blog/SearchBlogsScreen';
import ViewBlogScreen from '../screens/blog/ViewBlogScreen';

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


                <Route path='/blog/*'>
                    <Route index element={<BlogHomeScreen />} />
                    <Route path="post" element={<PostBlogScreen />} />
                    <Route path="edit/:id" element={<EditBlogScreen />} />
                    <Route path="search" element={<SearchBlogsScreen />} />
                    <Route path="view/:id" element={<ViewBlogScreen />} />
                </Route>


                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );

}

export default AppRoutes