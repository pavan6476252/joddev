import { LoaderFunctionArgs, createBrowserRouter } from "react-router-dom";
import App from "../App";
import RoomsScr from "../screens/RoomsScr";
import axios from "axios";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        //   loader: ,
        children: [

        ],

    },
    {
        path: '/rooms',
        element: <RoomsScr />,
        loader: async ({ request, params }) => {
            const myRoomsURL = `http://localhost:3000/api/room/findall/${'ssVpUrffmCYR2xB8gsVf9JaqyBm2'}`;
            const allRoomsURL = `http://localhost:3000/api/room/findall/`;
            const myRooms = await axios.get(myRoomsURL);
            const allRooms = await axios.get(allRoomsURL);
            // console.log(data)

            return { myRooms: myRooms.data, allRooms: allRooms.data };
        },
    }

]);

export default router;