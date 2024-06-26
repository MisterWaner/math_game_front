import ContentSection from "@/components/ContentSection";
import CourseSelector from "@/components/CourseSelector/CourseSelector";
import InvitedUserModal from "@/components/Modals/InvitedUserModal";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Playing() {
    return (
        <>
            <h2 className="text-2xl font-bold text-center mt-10">Les jeux</h2>
            <ContentSection>
            <div className="my-10 ">
                    <div className="grid grid-flow-col auto-cols-fr gap-4 ">
                        <Button className="font-semibold" asChild>
                            <Link to="/connexion">
                                Joue en tant que Padawan
                            </Link>
                        </Button>
                        <InvitedUserModal />
                    </div>
                </div>
            </ContentSection>
            <ContentSection>
                <div className="w-full md:mx-auto">
                    <h3 className="text-xl font-semibold">Salut padawan</h3>
                    <p>Choisi un thème et commence</p>
                    <CourseSelector />
                </div>
            </ContentSection>
        </>
    );
}
