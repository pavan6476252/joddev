import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import authStore from '../global/global'
import { Dialog, DialogBody, Tab, TabPanel, Tabs, TabsBody, tabsBody, TabsHeader, Button, Input, Textarea, Typography, IconButton, List, ListItemSuffix, Switch, ListItem, Alert } from '@material-tailwind/react';
import { GlobalNavbar } from '../components/GlobalNavBar';
import Footer from '../components/Footer'

function AccountScreen() {

    return (
        <div>
            <LoginScreen />
        </div>
    )
}

function LoginScreen() {
    const { signInWithGoogle, init, user, logout } = authStore();

    const location = useLocation()
    const navigate = useNavigate()

    useEffect(() => {

        if (user === null) {
            console.log("hello")
            navigate('/authenticate', { state: { next: location.pathname } })
        }
    }, [])


    const handleGoogleLogin = () => {
        signInWithGoogle();
    };

    // console.log("user ", user)
    const tabData = [
        {
            label: "Posts",
            value: "posts",
            element: <Posts />
        },
        {
            label: "Profile",
            value: "profile",
            element: <Profile />
        }
        , {
            label: "Other",
            value: "Other",
            element: <Other />
        }
    ]
    return (
        <div>
            {
                user ? <body className=''>
                    <GlobalNavbar />
                    <div className="container mt-4">

                        <Typography className='font-bold  text-2xl '>
                            Settings
                        </Typography>
                        <Typography className='font-thin text-gray-500  text-md '>
                            Manage your account settings
                        </Typography>
                        <div className="border border-b-2 border-b-gray-500 my-4"></div>

                        {/* // tabs  */}
                        <Tabs value='profile'
                            className="max-w-[40rem]">
                            <TabsHeader
                                className="bg-transparent"
                                indicatorProps={{
                                    className: "bg-gray-900/10 shadow-none !text-gray-900",
                                }}
                            >
                                {tabData.map(({ label, value }) => (
                                    <Tab key={value} value={value}>
                                        {label}
                                    </Tab>
                                ))}
                            </TabsHeader>
                            <TabsBody>
                                {tabData.map(({ value, element }) => (
                                    <TabPanel key={value} value={value}>
                                        {element}
                                    </TabPanel>
                                ))}
                            </TabsBody>
                        </Tabs>
                    </div>

                </body> :
                    <Dialog open handler={() => { }}>
                        <DialogBody>
                            <p>Login to continue</p>
                        </DialogBody>
                    </Dialog>
            }
        </div>

    );
}



export default AccountScreen


function Posts(){
    return <div>
        <div className="container ">
            <Alert>
                <p>no posts to display</p>
            </Alert>
        </div>
    </div>
}

function Other() {
    const data = [
        {
            title: "   Communication emails", subtitle: "Receive emails about your account activity."
        }
        , {
            title: "Marketing emails",
            subtitle: "Receive emails about new products, features, and more."

        },
        {
            title: "   Communication emails", subtitle: "Receive emails about your account activity."
        }
        , {
            title: "Marketing emails",
            subtitle: "  Software Engineer @ Material Tailwind."

        },


    ]
    return (
        <div>

            <List >
                {
                    data.map(data =>
                        <ListItem className="my-2 px-4 border border-gray-300">
                            <div>
                                <Typography variant="h6" color="blue-gray">
                                    {data.title}
                                </Typography>
                                <Typography variant="small" color="gray" className="font-normal">
                                    {data.subtitle}
                                </Typography>
                            </div>
                            <ListItemSuffix>
                                <Switch crossOrigin={""} />
                            </ListItemSuffix>
                        </ListItem>)}
            </List>
            <Button className='my-4'>Update notifications</Button>
            <Footer />
        </div>
    )
}
function Profile() {
    const [url, setUrl] = useState('');
    const [urls, setUrls] = useState(["https://joddev.com"]);

    function updateUrlList(newUrl: string) {
        if (!urls.find((ele) => ele === newUrl)) {
            setUrls([...urls, newUrl]);
            setUrl('');
        }
    }

    function removeUrl(idx: number) {
        setUrls(urls.filter((_, index) => index !== idx));
    }

    function updateUrl(idx: number, value: string) {
        setUrls((prevUrls) => {
            const updatedUrls = [...prevUrls];
            updatedUrls[idx] = value;
            return updatedUrls;
        });
    }
    return (
        <div>

            <div>
                <Typography className='text-lg font-semibold  text-black'>
                    Profile
                </Typography>
                <Typography>
                    This is how others will see you on the site.
                </Typography>
                <div className="border  border-b-gray-200 my-4"></div>
                {/* // user name input */}
                <div className='my-5'>
                    <Typography className='text-black mb-2'>
                        Username
                    </Typography>
                    <Input crossOrigin={""} value={"pavan"} type='text' variant='outlined' label={undefined} />
                    <Typography className='text-sm mt-2'>
                        This is your public display name. It can be your real name or a pseudonym. You can only change this once every 30 days.
                    </Typography>
                </div>
                {/* // email name input */}
                <div className='my-5'>
                    <Typography
                        className='text-black mb-2'>
                        Email
                    </Typography>
                    <Input crossOrigin={""} type='email'
                        disabled
                        variant='outlined' label={undefined} />
                    <Typography className='text-sm mt-2'>
                        You can manage verified email addresses in your email settings.
                    </Typography>
                </div>
                {/* // Bio name input */}
                <div className='my-5'>
                    <Typography
                        className='text-black mb-2'>
                        Bio
                    </Typography>
                    <Textarea
                        variant='outlined'
                        placeholder='Write your bio here' />
                    <Typography className='text-sm mt-2'>
                        You can @mention other users and organizations to link to them.
                    </Typography>
                </div>
                {/* // URLS name input */}
                <div className='my-5'>
                    <Typography
                        className='text-black mb-2'>
                        URLs
                    </Typography>

                    <Typography className='text-sm mt-2 text-gray-600'>
                        Add links to your website, blog, or social media profiles.
                    </Typography>

                    {
                        urls.map((url, idx) =>

                            <div className="my-2">

                                <InputFieldWithButton
                                    buttonClick={() => removeUrl(idx)}
                                    inputValue={url}
                                    setInputValue={(val) => updateUrl(
                                        idx,
                                        val)}
                                    buttonValue={'Remove'}
                                />

                            </div>

                        )
                    }
                    <InputFieldWithButton inputValue={url}
                        setInputValue={setUrl}
                        buttonClick={() => updateUrlList(url)}
                        buttonValue={"Add"}
                    />

                </div>



                {/* update profile button  */}
                <Button >Update profile</Button>
            </div>
        </div>
    )
}


function InputFieldWithButton({ inputValue, setInputValue, buttonClick, buttonValue }: { inputValue: string, setInputValue: (value: string) => void, buttonClick: () => void, buttonValue: any }) {
    return <div className="my-2 relative flex h-10 w-full min-w-[200px] ">
        <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            type="email"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-black  focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            required
        />
        <button

            onClick={() => buttonClick()}
            className="!absolute right-1 top-1 z-10 select-none rounded bg-black py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-black-500/20 transition-all hover:shadow-lg hover:black-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            type="button"
            data-ripple-light="true"
        >
            {buttonValue}
        </button>

    </div>
}