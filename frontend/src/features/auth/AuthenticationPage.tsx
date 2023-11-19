import React, { FC, useState, useEffect } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { signInWithGoogle } from '../../store/auth/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';

const Authentication: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const atuStatte = useAppSelector((state) => state.auth.authenticated);
    const location = useLocation();

    const handleGoogleSignIn = async () => {
        dispatch(signInWithGoogle());
    };

    useEffect(() => {
        if (atuStatte) {
            alert("You are authenticated. Redirecting...");
            setTimeout(() => {

                navigate(location.state?.next || '/');
            }, 5000)
        }
    }, [atuStatte, location, navigate]);

    return (
        <section className="bg-gray-50 dark:bg-gray-900 h-screen flex items-center">
            <div className='mx-auto'>
                {
                    // userName ?? "null"
                    location.pathname
                }
                <div className='p-4 bg-slate-700 flex gap-4 items-center rounded-sm text-xl font-light hover:scale-105 transition-transform ' onClick={handleGoogleSignIn}>
                    <FaGoogle className="text-blue-500" />
                    <button className='text-gray-200'>
                        Sign In with Google
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Authentication;
