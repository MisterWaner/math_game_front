import { Progress } from "@/components/ui/progress";
import { useCoursesStore } from "@/store/CoursesStore";

export default function ProgressBar() {
    const progress = useCoursesStore((state) => state.progress);

    return (
        <div>
            <Progress value={progress} className="md:w-1/2 mx-auto mt-24" />
        </div>
    );
}
