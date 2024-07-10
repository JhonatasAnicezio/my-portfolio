import { FaAws } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiSpring } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { VscGithubInverted } from "react-icons/vsc";
import { FaDocker } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { RiTailwindCssFill } from "react-icons/ri";
import { MotionDiv } from "@/app/components/MotionvDiv";

export default function IconstBackground() {
    return (
        <div className="absolute w-full h-full grid grid-flow-col text-[#CCC7C9]">
            <div className="grid grid-flow-col justify-center items-center">
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <RiTailwindCssFill className="mt-80 h-full" size={70} />
                </MotionDiv>
            </div>
            <div className="w-full h-full grid grid-flow-col justify-end">
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <FaDocker className="mt-80 h-full" size={50} />
                </MotionDiv>
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <SiSpring className="mt-40" size={70} />
                </MotionDiv>
            </div>
            <div className="grid grid-flow-row justify-end items-center">
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <BiLogoTypescript size={40} />
                </MotionDiv>
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <VscGithubInverted size={50} />
                </MotionDiv>
            </div>
            <div className="grid grid-flow-row items-center justify-end">
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <SiMysql size={50} />
                </MotionDiv>
            </div>
            <div className="grid grid-flow-row justify-center">
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <FaJava className="mt-36" size={100} />
                </MotionDiv>
            </div>
            <div className="flex flex-col items-center justify-between py-24">
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <BiLogoMongodb size={70} />
                </MotionDiv>
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <FaAws size={60} />
                </MotionDiv>
            </div>
            <div className="grid grid-flow-row justify-center items-center">
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >
                    <FaNodeJs className="mt-36" size={50} />
                </MotionDiv>
                <MotionDiv
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                >    
                    <SiNextdotjs size={30}/>
                </MotionDiv>
            </div>
        </div>
    );
}