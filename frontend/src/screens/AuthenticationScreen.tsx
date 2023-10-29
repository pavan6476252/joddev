import React, { useEffect, useState } from 'react'
import { useLocation, redirect, useNavigate } from 'react-router-dom'
import authStore from '../global/global';
import { Button, Dialog, DialogBody, DialogHeader, Input, Typography } from '@material-tailwind/react';

function AuthenticationScreen() {
  const { state } = useLocation();
  const navigate = useNavigate()

  const [authMode, setauthMode] = useState<boolean>(true);
  const user = authStore(authMode => authMode.user);
  const init = authStore(state => state.init)
  const signInWithGoogle = authStore(authMode => authMode.signInWithGoogle)

  console.log(user)
  useEffect(() => {

    if (!state?.next && user) {
      navigate('/', { replace: true });
      console.log("moving to home screen after login ")
    } else if (state?.next && user) {
      navigate(state?.next, { replace: true })
      console.log(`moving to ${state?.next}after login `)
    }else{
      init()
    }
  }, [user])

  function toogle() {
    setauthMode(!authMode)
  }
  async function handlesignInWithGoogle() {
    try {

      await signInWithGoogle()

    } catch (e) {
      alert(e)
    }
  }
  return (
    <body>
      {/* <Button onClick={handleOpen} variant="gradient">
              Open Dialog
          </Button> */}
      {
        user ? <div className='w-full h-screen flex justify-center items-center 
            text-center'>
          <p className='font-body text-lg'>Redirecting..</p>
        </div>
          : <Dialog open={true} handler={() => { }} size='md'>
            <DialogHeader>{authMode ? "Login" : "Signup"}</DialogHeader>
            <DialogBody>
              <div className="grid lg:grid-cols-2 place-items-center">
                <div className='w-full'>
                  {/* mail input  */}
                  <div className="mx-1">
                    <div className="mb-2">

                      <Input label="Email Address" type="email" icon={<i className="bx bxl-gmail" />} crossOrigin />
                    </div>
                    <div className="mb-2">

                      <Input label="Password" type="password" icon={<i className="bx bx-key" />} crossOrigin />
                    </div>
                    {
                      authMode ? "" :
                        <div className="mb-2">

                          <Input label="Confirm Password" type="password" icon={<i className="bx bx-key" />} crossOrigin />
                        </div>
                    }
                    <Button variant="gradient" className="w-full" >{authMode ? "Login" : "SignUp"}</Button>
                  </div>


                  {authMode ?
                    <p className="text-right m-2">Create new Account <span className="text-red-300 underline" onClick={() => toogle()}>SignUp ?</span></p>

                    :
                    <p className="text-right m-2">Already have an account ? <span className="text-red-300 underline" onClick={() => toogle()}>login </span></p>
                  }
                  {/* firebase auth  */}



                  <Button className="px-4 py-1 flex justify-between items-center mb-2 w-full " onClick={() => handlesignInWithGoogle()}>
                    <i className="bx bxl-google text-3xl p-0 mr-4" />
                    <p>Continue with Google</p>
                  </Button>
                  <Button className="px-4 py-1 flex justify-between items-center  w-full  " >
                    <i className="bx bxl-facebook text-3xl p-0 mr-4" />
                    <p>Continue with Facebook</p>
                  </Button>



                </div>

                <div className="ml-5  hidden sm:hidden md:hidden  lg:block">
                  <img
                    src="https://thenounproject.com/api/private/icons/4598613/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"
                    alt="authentication logo"
                    className="  "
                  />
                </div>

              </div>


            </DialogBody>

          </Dialog >
      }
    </body>

  )
}

export default AuthenticationScreen