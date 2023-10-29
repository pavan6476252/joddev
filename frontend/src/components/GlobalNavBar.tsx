import React, { } from "react";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
    Card,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import { useNavigate, useParams, useLocation, Link } from "react-router-dom";
import { PopUpLogin } from "./PopUpLogin";
import authStore from "../global/global";

export function GlobalNavbar() {

    const [openNav, setOpenNav] = React.useState(false);
    const user = authStore(state => state.user)
    const logout = authStore(state => state.logout)
    const signInWithGoogle = authStore(state => state.signInWithGoogle)
    const init = authStore(state => state.init);
    const location = useLocation();

    React.useEffect(() => {
        init()
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    React
    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">



            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className={location.pathname.includes('/dev') ? "p-1 font-normal underline underline-offset-2" : "p-1 font-normal"}
            >
                <a href="/dev" className="flex items-center">
                    Dev
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal hover:underline-offset-4 hover:underline"
            >
                <a href="#" className="flex items-center">
                    R/D maps
                </a>
            </Typography>
            {
                location.pathname.includes('/dev/') &&
                    !location.pathname.includes('/dev/create-post') && user ?

                    <Button
                        size="sm"
                    >
                        <a href="/dev/create-post" className="flex items-center">
                            Create Post
                        </a>
                    </Button> : <></>

            }
        </ul>
    );
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);


    function ProfileMenu() {
        return (
            <Menu animate={{
                mount: { y: 0 },
                unmount: { y: 25 },
            }}

                placement="bottom-start">
                <MenuHandler >
                    <div className="w-10 h-10 rounded-full">
                        <img className="rounded-full" src={user?.picture} alt="Profile" />
                    </div>
                </MenuHandler>
                <MenuList>
                    <MenuItem><p>{user?.name}</p></MenuItem>
                    <MenuItem><p>{user?.email}</p></MenuItem>
                    <Link to={'/account'}>
                        <MenuItem>Account</MenuItem>
                    </Link>
                    <MenuItem><p onClick={logout}>Logout</p></MenuItem>
                </MenuList>

            </Menu>)

    }

    return (
        <div className="">
            <PopUpLogin open={open} handleOpen={handleOpen} />
            <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-3">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Typography
                        as="p"
                        // href="/"
                        className="mr-4 cursor-pointer py-1.5 font-medium"
                    >
                      <a href="">
                        
                          Jod Dev
                        </a>
                    </Typography>
                    
                    <div className="flex items-center gap-4">
                        <div className="mr-4 hidden lg:block">{navList}</div>

                        {user ? <ProfileMenu /> :
                            <div className="flex items-center gap-x-1">
                                {/* <Button
                                    onClick={handleOpen}
                                    variant="text"
                                    size="sm"
                                    className="hidden lg:inline-block"
                                >
                                    <span>Log In</span>
                                </Button> */}
                                <Button
                                    onClick={handleOpen}
                                    variant="gradient"
                                    size="sm"
                                    className="hidden lg:inline-block "
                                >
                                    <span className="text-white ">Authenticate</span>
                                </Button>
                            </div>
                        }

                        <IconButton
                            variant="text"
                            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <MobileNav open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">
                        {user ?
                            <ProfileMenu />
                            :
                            <>
                                {/* <Button
                                    onClick={handleOpen}
                                    variant="text"
                                    size="sm"
                                    className="lg:inline-block"
                                >
                                    <span>Log In</span>
                                </Button> */}
                                <Button
                                    onClick={handleOpen}
                                    variant="gradient"
                                    size="sm"
                                    className="lg:inline-block"
                                >
                                    <span>Authenticate</span>
                                </Button>
                            </>
                        }
                    </div>
                </MobileNav>
            </Navbar>

        </div>

    )
}

