/* eslint-disable react/no-unescaped-entities */
import Portfolio from "./portfolio";
import { Tab } from "@headlessui/react";
import { ReactNode, useState } from "react";
import Image from 'next/image';
import profilePic from '../../public/me.png';
import { TypeAnimation } from 'react-type-animation'

interface MenuProps {
    children?: ReactNode
}

export default function Page({ children } : MenuProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [isButtonVisible, setIsButtonVisible] = useState(false);
    const [isDone, setIsDone] = useState(false);

    return (
        <>
            <h1 className="text-3xl font-medium">Rebecca Tian</h1>
                {
                    isDone ?
                        <TypeAnimation
                            sequence={[
                                300,
                                'Fullstack Developer',
                                1000,
                                'UI Engineer',
                                1000,
                                'Mobile Developer',
                                1000,
                                'Software Engineer'
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1rem', display: 'inline-block', color: 'lightgreen'}}
                            repeat={0}
                        />
                    : <span className="text-base inline-block text-green-300">Software Engineer</span>
                }
            <Tab.Group vertical selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <div className="flex justify-between relative h-[90%]">
                    <Tab.List className="flex flex-col mt-12">
                        <Tab className="text-left w-fit hover:cursor-pointer ui-selected:text-green-200">Home</Tab>
                        <Tab className="text-left w-fit hover:cursor-pointer ui-selected:text-green-200">Projects</Tab>
                        <Tab className="text-left w-fit hover:cursor-pointer ui-selected:text-green-200">Info</Tab>
                    </Tab.List>
                    <Tab.Panels className="md:mt-0 mt-12 w-[80%] md:w-3/5">
                        <Tab.Panel className="text-left text-xs md:text-sm flex flex-col w-full h-full overflow-auto">
                            <div className="h-screen flex flex-col">
                                <div className="mb-3 self-end w-3/4 sm:w-1/3">
                                    <Image src={profilePic} alt="picture of me"/>
                                </div>
                                <div className="border border-green-600 p-3 w-full">
                                    <TypeAnimation
                                        sequence={[
                                            'Beep bop, welcome to my portfolio. I am a lover of exciting technology, creative designs, and honestly just learning anything new! ' +
                                            'Currently, I am working at MillerKnoll as an associate software engineer where my focus is to integrate cross-platform technology solutions.',
                                            () => {
                                                setIsButtonVisible(true);
                                            }
                                        ]}
                                        wrapper="span"
                                        speed={85}
                                        style={{ fontSize: '12px', display: 'inline-block', color: 'rgb(2, 180, 11)'}}
                                        repeat={0}
                                        cursor={false}
                                    />
                                </div>
                                <div className="self-end">
                                    {
                                        isButtonVisible && 
                                        <button className="border border-green-600 hover:bg-green-900 mt-5 p-3"
                                            onClick={() => {setSelectedIndex(1)}}
                                        >
                                        <TypeAnimation
                                            sequence={[
                                                'See my works',
                                                () => {
                                                    setIsDone(true);
                                                }
                                            ]}
                                            wrapper="span"
                                            speed={50}
                                            style={{ fontSize: '12px', display: 'inline-block', color: 'rgb(2, 180, 11)'}}
                                            repeat={0}
                                            cursor={false}
                                        />
                                        </button>
                                    }
                                </div>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel className="text-left md:ml-32 lg:ml-24">
                            <Portfolio/>
                        </Tab.Panel>
                        <Tab.Panel className="text-left space-y-4 ml-8">
                            <p className="text-xl">Social Links</p>
                            <div className="space-x-4">
                                <a href="https://github.com/rebeccatian">Github</a>
                                <a href="https://linkedin.com/in/rebeccatianr">LinkedIn</a>
                                <a href="mailto: rebeccatianr@gmail.com">Email</a>
                            </div>
                            <p className="text-xl">Resume</p>
                            <iframe></iframe>
                        </Tab.Panel>
                    </Tab.Panels>
                </div>
        </Tab.Group>
    </>
    )
}