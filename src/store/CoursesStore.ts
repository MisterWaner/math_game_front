import { create } from "zustand";

type CourseState = {
    title: string;
    isSelected: boolean;
    type: string;
    question: {
        statement: string | null;
        answer: number | string | null;
    } | null;
    score: number;
    dailyScore: number;
    weeklyScore: number;
    monthlyScore: number;
    player: {
        registered: boolean;
        username: string;
        age: number;
        level: string;
        life: number;
    } | null;
    dailyPercentage: number;
    weeklyPercentage: number;
    monthlyPercentage: number;
    playerAnswer: number | string;
    questionCounter: number;
    totalQuestions: number;
    progress: number;
    totalProgress: number;
    globalTotalQuestions: number;
};

type Action = {
    selectCourse: (
        title: CourseState["title"],
        isSelected: CourseState["isSelected"],
        type: CourseState["type"]
    ) => void;
    generateQuestion: (type: string) => void;
    incrementScore: () => void;
    incrementDailyScore: () => void;
    incrementWeeklyScore: () => void;
    incrementMonthlyScore: () => void;
    incrementQuestionCounter: () => void;
    resetQuestionCounter: () => void;
    resetScore: () => void;
    setPlayer: (
        registered: boolean,
        username: string,
        age: number,
        level: string,
        life: number
    ) => void;
    setGlobalTotalQuestions: () => void;
    incrementProgress: () => void;
    resetProgress: () => void;
    setDailyPercentage: () => void;
    setWeeklyPercentage: () => void;
    setMonthlyPercentage: () => void;
};

export const useCoursesStore = create<CourseState & Action>()((set, get) => ({
    type: "",
    title: "",
    isSelected: false,
    question: null,
    score: 0,
    dailyScore: 0,
    weeklyScore: 0,
    monthlyScore: 0,
    player: null,
    dailyPercentage: 0,
    weeklyPercentage: 0,
    monthlyPercentage: 0,
    playerAnswer: "",
    questionCounter: 0,
    totalQuestions: 10,
    progress: 0,
    totalProgress: 100,
    globalTotalQuestions: 0,
    /****** Action *******/

    // Select course
    selectCourse(title, isSelected, type) {
        set({ title, isSelected, type });
        console.log({ title, isSelected, type });
    },
    // Set the player details
    setPlayer: (registered, username, age, level, life) => {
        set({ player: { registered, username, age, level, life } });
    },
    // Increment the score
    incrementScore: () => {
        set((state) => ({ score: state.score + 1 }));
    },
    // Reset the score
    resetScore: () => {
        set((state) => ({ score: (state.score = 0) }));
    },
    // Increment the question counter
    incrementQuestionCounter: () => {
        const { questionCounter, totalQuestions } = get();
        for (let i = 0; i < totalQuestions; i++) {
            set({ questionCounter: questionCounter + 1 });
        }
    },
    // Reset the question counter
    resetQuestionCounter: () => {
        set({ questionCounter: 0 });
    },
    incrementProgress: () => {
        const { progress, totalProgress } = get();
        for (let i = 0; i < totalProgress; i++) {
            set({ progress: progress + 10 });
        }
    },
    resetProgress: () => {
        set({ progress: 0 });
    },
    setGlobalTotalQuestions: () => {
        const { globalTotalQuestions } = get();
        set({ globalTotalQuestions: globalTotalQuestions + 1 });
    },
    setDailyPercentage: () => {
        const { dailyScore, totalQuestions } = get();
        set({
            dailyPercentage: Math.round((dailyScore / totalQuestions) * 100),
        });
    },
    setWeeklyPercentage: () => {
        const { weeklyScore, totalQuestions } = get();
        set({
            weeklyPercentage: Math.round((weeklyScore / totalQuestions) * 100),
        });
    },
    setMonthlyPercentage: () => {
        const { monthlyScore, totalQuestions } = get();
        set({
            monthlyPercentage: Math.round(
                (monthlyScore / totalQuestions) * 100
            ),
        });
    },
    generateQuestion: (type) => {
        let question;
        if (type === "addition") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 100);
            question = {
                statement: `Quelle est la somme de ${number1} + ${number2} ?`,
                answer: number1 + number2,
            };
        } else if (type === "soustraction") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 100);
            if (number1 < number2) {
                question = {
                    statement: `Quelle est la différence de ${number2} - ${number1} ?`,
                    answer: number2 - number1,
                };
            } else {
                question = {
                    statement: `Quelle est la déduction de ${number1} - ${number2} ?`,
                    answer: number1 - number2,
                };
            }
        } else if (type === "multiplication") {
            const number1 = Math.floor(Math.random() * 10);
            const number2 = Math.floor(Math.random() * 10);
            question = {
                statement: `Quelle est le produit de ${number1} x ${number2} ?`,
                answer: number1 * number2,
            };
        } else if (type === "division") {
            const number1 = Math.floor(Math.random() * 100);
            const number2 = Math.floor(Math.random() * 10);
            question = {
                statement: `Quelle est la quotient de ${number1} / ${number2} ?`,
                answer: number1 / number2,
            };
        } else {
            question = null;
        }
        set({ question, type });
    },
    incrementDailyScore: () => {
        const { dailyScore, score } = get();
        set({ dailyScore: dailyScore + score });
    },
    incrementWeeklyScore: () => {
        const { weeklyScore, dailyScore } = get();
        set({ weeklyScore: weeklyScore + dailyScore });
    },
    incrementMonthlyScore: () => {
        const { monthlyScore, weeklyScore } = get();
        set({ monthlyScore: monthlyScore + weeklyScore });
    },
}));
