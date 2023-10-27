import React, { useEffect, useState } from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    IconButton,
    Input,
} from "@material-tailwind/react";
import authStore from "../global/global";

interface Props {
    handleOpen: () => void;
    open: boolean;

}
export function PopUpLogin({ open, handleOpen }: Props) {
    const signInWithGoogle = authStore(state=>state.signInWithGoogle)

    const [state, setState] = useState<boolean>(true);
    function toogle() {
        setState(!state)
    }
    async function handlesignInWithGoogle(){
        try{

            await signInWithGoogle()
            handleOpen()
        }catch(e){
            alert(e)
        }
    }
    return (
        <>
            {/* <Button onClick={handleOpen} variant="gradient">
                Open Dialog
            </Button> */}
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>{state ? "Login" : "Signup"}</DialogHeader>
                <DialogBody>
                    <div className="grid lg:grid-cols-2 ">
                        <div>
                            {/* mail input  */}
                            <div className="mx-1">
                                <div className="mb-2">

                                    <Input label="Email Address" type="email" icon={<i className="bx bxl-gmail" />} crossOrigin />
                                </div>
                                <div className="mb-2">

                                    <Input label="Password" type="password" icon={<i className="bx bx-key" />} crossOrigin />
                                </div>
                                {
                                    state ? "" :
                                        <div className="mb-2">

                                            <Input label="Confirm Password" type="password" icon={<i className="bx bx-key" />} crossOrigin />
                                        </div>
                                }
                                <Button variant="gradient" className="w-full" >{state ? "Login" : "SignUp"}</Button>
                            </div>


                            {state ?
                                <p className="text-right m-2">Create new Account <span className="text-red-300 underline" onClick={() => toogle()}>SignUp ?</span></p>

                                :
                                <p className="text-right m-2">Already have an account ? <span className="text-red-300 underline" onClick={() => toogle()}>login </span></p>
                            }
                            {/* firebase auth  */}



                            <Button className="px-4 py-1 flex justify-between items-center mb-2 w-full " onClick={()=>handlesignInWithGoogle()}>
                                <i className="bx bxl-google text-3xl p-0 mr-4" />
                                <p>Continue with Google</p>
                            </Button>
                            <Button className="px-4 py-1 flex justify-between items-center  w-full  " >
                                <i className="bx bxl-facebook text-3xl p-0 mr-4" />
                                <p>Continue with Facebook</p>
                            </Button>



                        </div>

                        <div className=" mx-2 " >
                            <img src="https://thenounproject.com/api/private/icons/4598613/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0"  alt="" className="w-full h-full rounded-lg object-fill" />
                        </div>


                    </div>


                </DialogBody>
                {/* <DialogFooter>
                    <Button
                        variant=""
                        color="red"
                        onClick={handleOpen}
                        className="mr-1" text
                    >

                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter> */}
            </Dialog>
        </>
    );
}