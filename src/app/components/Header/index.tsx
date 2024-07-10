'use client'
import { useState } from "react";
import Title from "./components/Title";

const listSections = ['about', 'history', 'projects', 'contact']

export default function Header() {
    const [section, setSection] = useState('');

    return (
        <header className="fixed flex items-center justify-center w-full text-[#131313] z-20 backdrop-blur-sm">
            <div className="flex justify-between w-[97%] py-[22px] border-b-[0.5px] border-b-[#131313]">
                <Title />
                <nav className="borde border-black">
                    <ul className="flex gap-1">
                        {
                            listSections.map((e, index) => (
                                <li
                                    key={index}
                                    onClick={() => setSection(e)}
                                >
                                    <a
                                        className={`text-base font-semibold hover:border-b-2 border-[#131313]`}
                                        href={`#${e.split(',')[0]}`}
                                    >
                                        {listSections[listSections.length - 1] === e ? `${e}` : `${e},`}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}