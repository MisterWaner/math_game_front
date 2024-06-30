import { useState } from "react";

import {
    Card,
    CardTitle,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import ResultModal  from "@/components/Modals/ResultModal";
import SaveScoreModal from "@/components/Modals/SaveScoreModal";

import { useCoursesStore } from "@/store/CoursesStore";

export default function QuestionCard() {
    const [dialogTitle, setDialogTitle] = useState<string>("");
    const [dialogTitleColor, setDialogTitleColor] = useState<string>("");
    const [dialogActionColor, setDialogActionColor] = useState<string>("");

    const question = useCoursesStore((state) => state.question);
    const playerAnswer = useCoursesStore((state) => state.playerAnswer);
    const progress = useCoursesStore((state) => state.progress);
    const totalProgress = useCoursesStore((state) => state.totalProgress);
    //const type = useCoursesStore((state) => state.type);
    const incrementScore = useCoursesStore((state) => state.incrementScore);
    const resetProgress = useCoursesStore((state) => state.resetProgress);
    const resetScore = useCoursesStore((state) => state.resetScore);
    const resetQuestionCounter = useCoursesStore(
        (state) => state.resetQuestionCounter
    );

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        useCoursesStore.setState({
            playerAnswer: value,
        });
    };

    const checkPlayerAnswer = (playerAnswer: string | number) => {
        if (question) {
            if (Number(playerAnswer) === question.answer) {
                setDialogTitle("Bravo ! Bonne réponse !");
                setDialogTitleColor("text-primary");
                setDialogActionColor(
                    "bg-primary text-black hover:bg-primary/90"
                );
                incrementScore();
            } else if (Number(playerAnswer) !== question.answer) {
                setDialogTitle(
                    `Dommage ! Mauvaise réponse! La bonne réponse est ${question.answer}`
                );
                setDialogTitleColor("text-red-500");
                setDialogActionColor(
                    "bg-red-500 text-slate-50 hover:bg-red-500/90"
                );
            } else {
                setDialogTitle("");
                setDialogTitleColor("");
                setDialogActionColor("");
            }
        }

        if (progress === totalProgress) {
            setDialogTitle("Bravo ! Tu as terminé le quizz !");
            setDialogTitleColor("text-green-500");
            setDialogActionColor(
                "bg-green-500 text-slate-50 hover:bg-green-500/90"
            );
        }
    };

    const handleSubmit = () => {
        checkPlayerAnswer(playerAnswer);
        useCoursesStore.setState({
            playerAnswer: "",
        });
    };

    const handleRestart = () => {
        console.log("save score");
        resetProgress();
        resetScore();
        resetQuestionCounter;
        
    };

    
    const handleSaveScore = () => {
        // TODO: save score
        console.log("save score");
        resetProgress();
        resetQuestionCounter();
        //router.push("/jeu");
    };

    return (
        <>
            {progress === totalProgress ? (
                <Card className="md:w-1/2 mx-auto mt-24">
                    <CardHeader>
                        <CardTitle className="text-center uppercase text-green-500">
                            Fin !
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm font-bold text-green-500 uppercase">
                            Bravo ! tu as terminé le quizz !
                        </p>
                    </CardContent>
                    <CardFooter className="justify-end">
                        <SaveScoreModal
                            handleSaveScore={handleSaveScore}
                            handleRestart={handleRestart}
                        />
                    </CardFooter>
                </Card>
            ) : (
                <Card className="md:w-1/2 mx-auto mt-24">
                    <CardHeader>
                        <CardTitle>Question</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm italic">{question?.statement}</p>
                        <div className="grid grid-cols-3 items-center gap-4 mt-4">
                            <Label>Ta réponse :</Label>
                            <Input
                                className="col-span-2"
                                type="text"
                                onChange={handleInputChange}
                                value={playerAnswer}
                            />
                        </div>
                    </CardContent>
                    <CardFooter className="justify-end">
                        <ResultModal
                            dialogTitle={dialogTitle}
                            dialogTitleColor={dialogTitleColor}
                            dialogActionColor={dialogActionColor}
                            handleSubmit={handleSubmit}
                        />
                    </CardFooter>
                </Card>
            )}
        </>
    );
}
