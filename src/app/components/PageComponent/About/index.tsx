import Image from "next/image";
import lap from '../../../../../public/coffee-cake-typing-laptop-black-and-white-clean-sketch-style-clean-style-light-gray-watercolo-268563229.png';
import { MotionDiv } from "../../MotionvDiv";
import IconstBackground from "./IconsBackground";

export default function About() {
    return (
        <div
            className="h-screen w-full relative flex items-center justify-center text-[#131313]"
            id="about"
        > 
            <IconstBackground />
            <div className="flex flex-col w-1/2 z-[1]">
                <MotionDiv
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl font-bold uppercase">Olá, meu</h1>
                    <h1 className="text-6xl font-bold uppercase">nome é Jhonatas</h1>
                    <p className="text-lg w-3/4">
                    Sou um desenvolvedor full-stack que atua em um projeto voluntário.
                    Desenvolvo sistemas pessoais a fim de digitalizar negócios. Trabalho no setor de infraestrutura em meu emprego atual.
                    Sou apaixonado por confeitaria
                    Estudante de engenharia de software. Me considero uma pessoa extremamente criativa e adoro criar
                    e participar de projetos e ideias novas. (ou que sejam novas para mim rsrs)
                    </p>
                    <button className="border border-black rounded-2xl mt-5 px-5 py-1 transition-all duration-500 hover:text-white hover:bg-black">
                        Baixar CV
                    </button>
                </MotionDiv>
            </div>
            <MotionDiv
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
            >    
                <Image
                    src={lap}
                    width={550}
                    height={550}
                    alt="coffe laptop, view cake"
                />
            </MotionDiv>
        </div>
    )
}