import { Playfair_Display } from "next/font/google";

const playfair_display = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '700'],
});

export default function Title() {
    return (
        <div className="flex gap-5 text-center justify-center items-center">
            <h1 className={`${playfair_display.className} font-medium`}>Jhonatas Anicezio</h1>
            <h2 className="text-base font-semibold">SOFTWARE ENGINEER, FULL-STACK</h2>
        </div>
    )
}