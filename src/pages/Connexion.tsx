import LoginForm from "@/components/Forms/LoginForm";
import FormCard from "@/components/Cards/FormCard";
import ContentSection from "@/components/ContentSection";

export default function Connexion() {
    return (
        <>
            <ContentSection>
                <div className="flex flex-col justify-center items-center">
                    <FormCard title="Connexion">
                        <LoginForm />
                    </FormCard>
                </div>
            </ContentSection>
        </>
    );
}
