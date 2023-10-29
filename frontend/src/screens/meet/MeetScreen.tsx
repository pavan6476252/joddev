import React, { useEffect, useState } from 'react'
import authStore from '../../global/global'
import { Button, Checkbox, Dialog, DialogBody, Input, Card, Typography, Spinner } from '@material-tailwind/react';
import { useLocation, useNavigate } from 'react-router-dom';

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
            <Dialog open={showDialogue} handler={() => toggleDialogue()}>
                <DialogBody>
                    {/* <Card color="transparent" shadow={false}> */}
                    <Typography variant="h4" color="blue-gray">
                        Fill details
                    </Typography>
                    <Typography color="gray" className="mt-1 font-normal">
                        Nice to meet you! Enter your details to continue.
                    </Typography>
                    <form className="mt-8 mb-2   ">
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
                        <Button onClick={() => setLoading(s => !s)} className="mt-6 flex justify-center items-center normal-case " fullWidth>
                            {loading ? <>
                                <Spinner className='h-5 mr-4 text-lg' /> <p>Creating room...</p>
                            </>
                                : " create now"}
                        </Button>

                    </form>
                    {/* </Card> */}
                </DialogBody>
            </Dialog>
            {

                user ? <div className=' container w-full h-screen flex items-center justify-center flex-col'>


                    <Button onClick={toggleDialogue}>Create Meet a Now</Button>

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