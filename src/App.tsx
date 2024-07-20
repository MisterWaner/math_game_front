import {
    createBrowserRouter,
    RouterProvider,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import MainLayout from "@/layout/MainLayout";
import AlgebreLayout from "./layout/AlgebreLayout";
import UserLayout from "./layout/UserLayout";
import Home from "./pages/Home";
import Ranking from "./pages/Ranking";
import Playing from "./pages/Playing";
import Connexion from "./pages/Connexion";
import Game from "./pages/Game";
import Account from "./pages/Account";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/connexion" element={<Connexion />} />
                    <Route path="/classements" element={<Ranking />} />
                    <Route path="/jouer" element={<Playing />} />
                    <Route path="jouer/:type" element={<AlgebreLayout />}>
                        <Route index element={<Game />} />
                    </Route>
                </Route>
                <Route path="/compte/:username" element={<UserLayout />}>
                    <Route index element={<Account />} />
                    <Route path="classements" element={<Ranking />} />
                </Route>
            </>
        )
    );

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
