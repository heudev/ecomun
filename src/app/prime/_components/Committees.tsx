"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

function Committee({
    imageSrc,
    name,
    onClick,
}: {
    imageSrc: string;
    name: string;
    description: string;
    onClick: () => void;
}) {
    return (
        <a
            onClick={onClick}
            className="stack transition-transform transform hover:scale-105 group cursor-pointer max-w-96"
        >
            <div className="card relative md:w-96 h-48 shadow-xl overflow-hidden rounded-lg">
                <Image
                    src={imageSrc}
                    alt={name}
                    width={1920}
                    height={1080}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-0" />
                <div className="card-body flex flex-col justify-center items-center h-full relative z-10 text-center text-white">
                    <h2 className="card-title text-white text-xl font-semibold transition-opacity duration-300">
                        {name}
                    </h2>
                </div>
            </div>
        </a>
    );
}

function Modal({
    imageSrc,
    name,
    description,
    topic,
    agenda1,
    agenda2,
    openAgenda,
    itemA,
    itemB,
    level,
    usgImageSrc,
    usgName,
    usgOfCommittee,
    committeeGuide,
    rulesOfProcedure,
    onClose,
}: {
    imageSrc: string;
    name: string;
    description: string;
    topic: string;
    agenda1: string;
    agenda2: string;
    openAgenda: string;
    itemA: string;
    itemB: string;
    level: string;
    usgImageSrc: string;
    usgName: string;
    usgOfCommittee: string;
    committeeGuide: string;
    rulesOfProcedure?: string;
    onClose: () => void;
}) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-2xl w-11/12 md:w-3/4 lg:w-1/2 overflow-hidden transform transition-all duration-300 ease-in-out max-h-full">
                <div className="relative">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition-colors duration-300"
                    >
                        ✕
                    </button>
                </div>
                <div className="overflow-y-auto max-h-[calc(100vh-8rem)] bg-[rgba(66,38,112,1)] text-gray-200">
                    <Image
                        src={imageSrc}
                        alt={name}
                        width={1920}
                        height={1080}
                        className="w-full h-64 object-cover"
                    />
                    <div className='p-6 space-y-8'>
                        <h2 className="text-2xl text-center font-bold mb-4">{name}</h2>
                        {topic !== "" && <p className="mb-2"><strong className='text-white'>Topic:</strong> {topic}</p>}

                        {agenda1 !== "" && agenda2 !== "" &&
                            <div>
                                <p className="mb-2"><strong className='text-white'>Agenda 1:</strong> {agenda1}</p>
                                <p className="mb-2"><strong className='text-white'>Agenda 2:</strong> {agenda2}</p>
                            </div>
                        }

                        {openAgenda !== "" &&
                            <div>
                                <p className="mb-2"><strong className='text-white'>Open Agenda:</strong> {openAgenda}</p>
                            </div>
                        }

                        {itemA !== "" && itemB !== "" &&
                            <div>
                                <p className="mb-2"><strong className='text-white'>Item A:</strong> {itemA}</p>
                                <p className="mb-2"><strong className='text-white'>Item B:</strong> {itemB}</p>
                            </div>
                        }


                        <p className="mb-4 text-justify">{description}</p>

                        <div className="flex justify-center">
                            <a
                                href={committeeGuide}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-purple-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                </svg>
                                Study Guide
                            </a>
                        </div>

                        {rulesOfProcedure && (
                            <div className="flex justify-center mt-4">
                                <a
                                    href={rulesOfProcedure}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-white text-purple-800 px-6 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center gap-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                    </svg>
                                    Rules of Procedure
                                </a>
                            </div>
                        )}

                        <div className='flex justify-between items-center'>
                            <div className="flex items-center">
                                <Image
                                    src={usgImageSrc}
                                    alt={usgName}
                                    width={50}
                                    height={50}
                                    className="rounded-full mr-4"
                                />
                                <div>
                                    <p className="text-white"><strong>{usgName}</strong></p>
                                    <p className="text-white">{usgOfCommittee}</p>
                                </div>
                            </div>

                            <p className="mb-4"><strong className='text-white'>Level:</strong> {level}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Committees() {
    const [selectedCommittee, setSelectedCommittee] = useState<{
        usgName: string;
        usgOfCommittee: string;
        imageSrc: string;
        name: string;
        description: string;
        topic: string;
        agenda1: string;
        agenda2: string;
        openAgenda: string;
        itemA: string;
        itemB: string;
        level: string;
        usgImageSrc: string;
        committeeGuide: string;
        rulesOfProcedure?: string;
    } | null>(null);
    const committees = [
        {
            imageSrc: '/images/backgrounds/campus.jpg',
            name: 'UNDPO',
            topic: 'Improving the Efficiency and Accountability of UN Peacekeeping Mission.',
            agenda1: '',
            agenda2: '',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "",
            level: 'Intermediate',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Özer Gürbüz',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/backgrounds/campus.jpg',
            name: 'IAEA',
            topic: 'Enhancing Compliance with Nuclear Non-Proliferation Safeguards in Emerging Nuclear States',
            agenda1: '',
            agenda2: '',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "",
            level: 'Intermediate',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Eren Bice',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/backgrounds/campus.jpg',
            name: 'NATO',
            topic: 'The Future of the Alliance in a Multipolar World: Responding to Russian Expansionism and Redefining Influence in the Emerging Power Struggles in the Middle East',
            agenda1: '',
            agenda2: '',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "",
            level: 'Advanced',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Gökalp Elmas',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/backgrounds/campus.jpg',
            name: 'UNSC',
            topic: 'The Destabilizing Effects of Unrecognized State Actors and Shadow Governments',
            agenda1: '',
            agenda2: '',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "",
            level: 'Advanced',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Tuna Bayoğlu',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/backgrounds/campus.jpg',
            name: 'WTO',
            topic: 'Reassessing Trade Liberalization in the Era of Economic Nationalism',
            agenda1: '',
            agenda2: '',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "",
            level: 'Advanced',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Gökçe Meva Aksu',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/backgrounds/campus.jpg',
            name: 'Istanbul Convention - Council of Europe',
            topic: 'Istanbul Convention and Womens Rights',
            agenda1: '',
            agenda2: '',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "",
            level: 'Advanced',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Elis Funda',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/backgrounds/campus.jpg',
            name: 'House of Representatives',
            topic: 'Evaluating the 2025 "Liberation Day Tariff Act" and Its Implications on Domestic and Foreign Trade',
            agenda1: '',
            agenda2: '',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "",
            level: 'Advanced',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Ali Ütük',
            usgOfCommittee: '',
            committeeGuide: ""
        },
    ];

    return (
        <div id="committees" className="py-10 mx-auto max-w-[850px] bg-transparent">
            <div className="text-3xl lg:text-5xl font-bold lg:mb-6 text-center text-white">
                Committees
            </div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4 p-5 md:p-0">
                    {committees.map((committee, index) => (
                        <Committee
                            key={index}
                            imageSrc={committee.imageSrc}
                            name={committee.name}
                            description={committee.description}
                            onClick={() => setSelectedCommittee(committee)}
                        />
                    ))}
                </div>
            </div>

            {selectedCommittee && (
                <Modal
                    imageSrc={selectedCommittee.imageSrc}
                    name={selectedCommittee.name}
                    description={selectedCommittee.description}
                    topic={selectedCommittee.topic}
                    agenda1={selectedCommittee.agenda1}
                    agenda2={selectedCommittee.agenda2}
                    openAgenda={selectedCommittee.openAgenda}
                    itemA={selectedCommittee.itemA}
                    itemB={selectedCommittee.itemB}
                    level={selectedCommittee.level}
                    usgImageSrc={selectedCommittee.usgImageSrc}
                    usgName={selectedCommittee.usgName}
                    usgOfCommittee={selectedCommittee.usgOfCommittee}
                    committeeGuide={selectedCommittee.committeeGuide}
                    rulesOfProcedure={selectedCommittee.rulesOfProcedure}
                    onClose={() => setSelectedCommittee(null)}
                />
            )}
        </div>
    );
}
