import React, { useEffect, useState } from 'react'
import authStore from '../../global/global'
import { Button, Checkbox, Dialog, DialogBody, Input, Card, Typography, Spinner, Alert } from '@material-tailwind/react';
import { useLocation, useNavigate } from 'react-router-dom';
import CustomButton from '../../components/CustomButton';
import CaptureConfig from './captureConfig';
import { GlobalNavbar } from '../../components/GlobalNavBar';

function MeetScreen() {
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        init()
    }, [])

    useEffect(() => {
        if (!user) {
            setTimeout(() => navigate('/authenticate', { state: { next: location.pathname } }), 5000)
        }
    }, [])
    const { signInWithGoogle, init, user, logout } = authStore();

    const handleGoogleLogin = () => {
        signInWithGoogle();
    };
    const [showDialogue, setDialogue] = useState(false)
    const [loading, setLoading] = useState(false);

    function toggleDialogue() {
        setDialogue(s => !s)
    }
    return (
        <body>
            <GlobalNavbar/>
            <Dialog open={showDialogue} handler={() => toggleDialogue()}>
                <DialogBody>
                    {/* <Card color="transparent" shadow={false}> */}
                    <Typography variant="h4" color="blue-gray">
                        Fill details
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to continue.
                    </Typography>
                    <div className="mt-8 mb-2   ">
                        <div className="mb-1 flex flex-col gap-6">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Meet title
                            </Typography>
                            <Input crossOrigin={''}
                                size="lg"
                                placeholder="Enter title here.."
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />

                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Pin
                            </Typography>
                            <Input crossOrigin={''}
                                type="password"
                                size="lg"
                                placeholder="********"
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                                labelProps={{
                                    className: "before:content-none after:content-none",
                                }}
                            />
                        </div>
                        <Checkbox crossOrigin={''}
                            label={
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    I agree the
                                    <a
                                        href="#"
                                        className="font-medium transition-colors hover:text-gray-900"
                                    >
                                        &nbsp;Terms and Conditions
                                    </a>
                                </Typography>
                            }
                            containerProps={{ className: "-ml-2.5" }}
                        />

                        <CustomButton
                            onClick={() => setLoading(s => !s)} className="
                     bg-black w-full
                     mt-6 flex justify-center items-center normal-case " >
                            {loading ? <>
                                <Spinner className='h-5 mr-4 text-lg' /> <p>Creating room...</p>
                            </>
                                : " create now"}
                        </CustomButton>

                    </div>
                    {/* </Card> */}
                </DialogBody>
            </Dialog>
            {

                user ? <div className=' container w-full
                content-center place-items-center
                grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    <div className='w-full'>
                     <CaptureConfig/>
                    </div>
                    <div className='flex flex-col md:flex-row md:mt-4 '>

                        <CustomButton
                            className='bg-black ' onClick={toggleDialogue}>Create Meet a Now</CustomButton>
                        <CustomButton
                            className='mt-3 ' onClick={() => prompt("Enter meeting id")}>
                            <p className='text-black'>
                                Join Meet a Now
                            </p>
                        </CustomButton>

                    </div>
                </div> : <div className='h-screen w-full flex justify-center items-center text-center'>
                    <Typography className='font-semibold text-2xl'>
                        Redirecting to authentication screen...
                    </Typography>
                </div>
            }
        </body>
    )
}




export default MeetScreen