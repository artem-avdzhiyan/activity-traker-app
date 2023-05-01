import { createBrowserRouter } from "react-router-dom";
import MainScreenContainer from "./Screens/MainScreen/MainScreenContainer";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainScreenContainer />,
    },
]);
export default router;