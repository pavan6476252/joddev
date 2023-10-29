

import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import NotFound from '../screens/NotFound404';
import App from '../App';
import DevScreen from '../screens/dev/DevScreen';
import { DevCategories } from './paths';
import CreateDevPost from '../screens/dev/CreateDevPost';
import { Button, Typography } from '@material-tailwind/react';
import { DevBlogCard } from '../screens/dev/components/DevBlogCard';
import DevLayout from '../screens/dev/utils/DevBlogLayouts';
import ProgressBar from '../lib/ProgressBar';
import AuthenticationScreen from '../screens/AuthenticationScreen';
import authStore from '../global/global';
import AccountScreen from '../screens/AccountScreen';
import MeetScreen from '../screens/meet/MeetScreen';
import MeetViewScreen from '../screens/meet/MeetViewScreen';

function AppRoutes() {
    
    const init= authStore(state=>state.init)

    return (
        <>
            <ProgressBar />
            <BrowserRouter>
                <Routes>
                    <Route path='/' >
                        <Route path='/account'
                        element={<AccountScreen/>}/>

                        <Route index element={<App />} />
                        <Route path='/authenticate' element={<AuthenticationScreen />} />
                        <Route path='/meet' element={<MeetScreen/>}/>
                        <Route path='/meet/:id' element={<MeetViewScreen/>}/>
                        <Route path="dev">

                            <Route index element={<DevScreen />} />
                            <Route path='create-post' element={<CreateDevPost />} />

                            {DevCategories.map((category, index) => (
                                <Route
                                    key={index}
                                    path={category.path.slice(5)}
                                    element={<DevLayout />}
                                />
                            ))}
                        </Route>
                    </Route>


                   
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );

}

export default AppRoutes;


