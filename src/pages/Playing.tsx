import ContentSection from "@/components/ContentSection";
import CourseSelector from "@/components/CourseSelector/CourseSelector";
import InvitedUserModal from "@/components/Modals/InvitedUserModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import Cookies from "js-cookie";
import { useState, useEffect } from "react";

export default function Playing() {
    const [isUserNameVisible, setIsUserNameVisible] = useState(false);

    useEffect(() => {
        const username = Cookies.get("username");
        if (username) {
            setIsUserNameVisible(true);
        }
    }, []);

    return (
        <>
            <h2 className="text-2xl font-bold text-center mt-10">Les jeux</h2>
            {!isUserNameVisible && (
                <ContentSection>
                    <div className="my-10 ">
                        <div className="grid grid-flow-col auto-cols-fr gap-4 ">
                            <Button className="font-semibold" asChild>
                                <Link to="/connexion">Connecte toi Padawan !</Link>
                            </Button>
                            <InvitedUserModal />
                        </div>
                    </div>
                </ContentSection>
            ) } 

            
            {isUserNameVisible && (
                <ContentSection>
                    <div className="w-full md:mx-auto">
                        <h3 className="text-xl font-semibold">Salut padawan</h3>
                        <p>Choisi un thème et commence</p>
                        <CourseSelector />
                    </div>
                </ContentSection>
            )}
        </>
    );
}
