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
            imageSrc: '/images/committees/unido.jpg',
            name: 'UNIDO - United Nations Industrial Development Organization',
            topic: 'Promoting Sustainable Industrialization through Green Innovation and Sustainable Energy',
            agenda1: 'Promoting renewable energy into developing global industries',
            agenda2: '',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "UNIDO is a specialized agency of the United Nations that promotes inclusive and sustainable industrial development. It helps countries transition to greener economies through innovation and renewable energy initiatives, with a focus on supporting developing nations.",
            level: 'Beginner',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Lamia Zeyno Çelebi',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/ocha.jpg',
            name: 'OCHA - Office for the Coordination of Humanitarian Affairs',
            topic: 'Coordinating International Humanitarian Response in Earthquake-Affected Areas',
            agenda1: 'Developing National and International Strategies for Earthquake Preparedness and Humanitarian Response',
            agenda2: 'Addressing the Regional Humanitarian Impact of the February 6 Earthquakes in Türkiye and Neighboring Countries',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "OCHA coordinates international humanitarian responses in emergencies, fostering cooperation between governments, NGOs and other partners. It plays a key role in disaster preparedness and delivering aid effectively during crises such as earthquakes.",
            level: 'Beginner',
            usgImageSrc: '/images/team/asil-ozulgullu.jpg',
            usgName: 'Asil Özülgülü',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/ilo.jpg',
            name: 'ILO - International Labour Organization',
            topic: 'Creating International Job Opportunities for Young People Around the World',
            agenda1: 'Promoting comprehensive labor protections, universal social security coverage and the enforcement of international standards for decent work among youth across all employment sectors.',
            agenda2: 'Formulating and implementing context-specific employment policies aimed at increasing youth labor market participation in post-conflict settings, climate-affected areas and economically underdeveloped regions.',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "The ILO promotes labour rights and decent work opportunities globally. It helps governments design employment policies, ensuring youth have access to fair labor protections, especially in post-conflict and climate-affected regions.",
            level: 'Beginner',
            usgImageSrc: '/images/team/kuzey-erdogan.jpg',
            usgName: 'Kuzey Erdoğan',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/imf.jpg',
            name: 'IMF - International Monetary Fund',
            topic: 'Balancing Austerity Measures with Sustainable Development Goals',
            agenda1: 'Reassessing the role of foreign exchange controls in emerging and developed Economies while discussing the stability, sovereignty and systematic risks',
            agenda2: 'Mitigating global debt distress and assessing the IMF’s role in debt restructuring and relief',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "The IMF works to promote global economic stability and sustainable growth. It provides financial support and policy advice to countries facing economic challenges while balancing austerity with development goals.",
            level: 'Beginner',
            usgImageSrc: '/images/team/eda-dora-aksular.jpg',
            usgName: 'Eda Dora Aksular',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/disec.jpg',
            name: 'DISEC - Disarmament and International Security Committee',
            topic: 'The Role of Arms Trade Transparency in Global Peace and Security',
            agenda1: 'Harnessing Technology to Improve Transparency in Arms Tracking and Record-Keepin',
            agenda2: 'Preventing Arms Flows to Conflict Zones through Transparency and Enforcement of Embargoes',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "DISEC focuses on addressing global security threats and advancing disarmament initiatives. It aims to promote transparency in arms trade and prevent weapons from reaching conflict zones.",
            level: 'Beginner',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Işıl Geçgel',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/who.jpg',
            name: 'WHO - World Health Organization',
            topic: 'Promoting Universal Health Coverage (UHC) in Developing Countries',
            agenda1: 'Ensuring Equality in Health Coverage for Women and Equable Access to The Treatment of Gynaecological Diseases in Developing Countries',
            agenda2: 'Second UN High-Level Meeting for Political Declaration on Universal Health Coverage (UHC): Identifying Gaps and Solutions for Healthcare Problems in Developing Countries to Accelerate the Road to Implementation',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "WHO leads international efforts to improve public health, set health standards and respond to global health emergencies. It focuses on ensuring universal health coverage, particularly in underserved regions.",
            level: 'Beginner',
            usgImageSrc: '/images/team/duru-kilic.jpg',
            usgName: 'Duru Kılıç',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/echr.jpg',
            name: 'ECHR - European Court of Human Rights ',
            topic: 'European Human Rights Violations (Open Case)',
            agenda1: '',
            agenda2: '',
            openAgenda: 'Cases will be given at the start of the Conference',
            itemA: "",
            itemB: "",
            description: 'The ECHR ensures compliance with the European Convention on Human Rights by adjudicating cases of violations across member states. It serves as Europe’s leading human rights court.',
            level: 'Trainee',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Seda Çetindağ & Elif Çalışkan',
            usgOfCommittee: '',
            committeeGuide: ""
        }
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
