import { useCoursesStore } from "@/store/CoursesStore";

export default function ScoreIncicator() {
    const score = useCoursesStore((state) => state.score);

    return (
        <div className="font-bold text-2xl flex w-full justify-center">
            <p className="mr-2">Score :</p>
            <p>{score}/10</p>
        </div>
    );
}
