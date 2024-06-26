import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Playing from "./pages/Playing";
import Connexion from "./pages/Connexion";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/connexion" element={<Connexion />} />
                    <Route path="/classements" element={<Ranking />} />
                    <Route path="/jouer" element={<Playing />} />
                </Route>
            </>
        ),
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
