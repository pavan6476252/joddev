import React from 'react'
import { DevCategories } from '../../routes/paths';
import { useNavigate } from 'react-router-dom'; 
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { GlobalNavbar } from '../../components/GlobalNavBar';


function DevScreen() {


    const navigate = useNavigate();
    const navigateTo = (url: string) => navigate(url)
    return (
        <div >
            <GlobalNavbar />
            <body className='container '>
                {/* //tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-10">
                    {DevCategories.map((dev, index) => (

                        <Card className="mt-6 w-80 hover:scale-105 transition-transform hover:z-10">
                            <CardHeader color="blue-gray" className="relative  h-56">
                                <img
                                    src={dev.image}
                                    className='object-cover h-full'
                                    alt="card-image"
                                />
                            </CardHeader>
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    {dev.title}
                                </Typography>
                                <Typography>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <Button onClick={() => navigateTo(dev.path)}>Read More</Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>



            </body>
        </div>
    )
}

export default DevScreen