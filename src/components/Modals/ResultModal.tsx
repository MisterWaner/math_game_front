import {
    AlertDialog,
    AlertDialogTrigger,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogFooter,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useCoursesStore } from "@/store/CoursesStore";

export default function ResultModal({
    dialogTitle,
    dialogTitleColor,
    dialogActionColor,
    handleSubmit,
}: {
    dialogTitle: string;
    dialogTitleColor: string;
    dialogActionColor: string;
    handleSubmit: () => void;
}) {
    const type = useCoursesStore((state) => state.type);
    const generateQuestion = useCoursesStore((state) => state.generateQuestion);
    const questionCounter = useCoursesStore((state) => state.questionCounter);
    const incrementQuestionCounter = useCoursesStore(
        (state) => state.incrementQuestionCounter
    );
    const progress = useCoursesStore((state) => state.progress);
    const totalProgress = useCoursesStore((state) => state.totalProgress);
    const incrementProgress = useCoursesStore(
        (state) => state.incrementProgress
    );

    const handleNextQuestion: () => void = () => {
        generateQuestion(type);
        incrementQuestionCounter();
        incrementProgress();
        console.log({ progress, totalProgress, questionCounter });
    };
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button className="font-semibold w-2/6" onClick={handleSubmit}>
                    Valider
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle className={`${dialogTitleColor}`}>
                        {dialogTitle}
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction
                        className={`${dialogActionColor} font-semibold`}
                        onClick={handleNextQuestion}
                    >
                        Suivant
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
