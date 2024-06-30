import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

import { useCoursesStore } from "@/store/CoursesStore";
import { courseSelectorData } from "@/lib/course-selector-data";
import { Course } from "@/lib/types";

export default function CourseSelector() {
    const courseSelector = courseSelectorData;

    const selectCourse = useCoursesStore((state) => state.selectCourse);
    const generateQuestion = useCoursesStore((state) => state.generateQuestion);
    const resetProgress = useCoursesStore((state) => state.resetProgress);
    const resetScore = useCoursesStore((state) => state.resetScore);

    const handleSubmit = (type: string) => {
        generateQuestion(type);
    };

    return (
        <div className="mt-4 grid grid-cols-2 gap-4 md:w-2/4 ">
            {courseSelector.map(({ label, courses }) => (
                <DropdownMenu key={label}>
                    <DropdownMenuTrigger asChild>
                        <Button className="w-full">{label}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {courses.map(({ id, title, path, type }: Course) => (
                            <DropdownMenuItem key={id}>
                                <Link
                                    to={`/jouer/${path}`}
                                    className="w-full"
                                    onClick={() => {
                                        selectCourse(title, true, type);
                                        handleSubmit(type);
                                        resetProgress();
                                        resetScore();
                                    }}
                                >
                                    {title}
                                </Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            ))}
        </div>
    );
}
