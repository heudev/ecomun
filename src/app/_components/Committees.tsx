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
    /*  committeeGuide, */
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
                                <p className="mb-2">{openAgenda}</p>
                            </div>
                        }

                        {itemA !== "" && itemB !== "" &&
                            <div>
                                <p className="mb-2"><strong className='text-white'>Item A:</strong> {itemA}</p>
                                <p className="mb-2"><strong className='text-white'>Item B:</strong> {itemB}</p>
                            </div>
                        }


                        <p className="mb-4 text-justify">{description}</p>

                        {/* <div className="flex justify-center">
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
                        </div> */}

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
            usgName: 'Kuzey Erdoğan',
            usgOfCommittee: '',
            committeeGuide: ""
        },
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
            imageSrc: '/images/committees/unesco.jpeg',
            name: 'UNESCO',
            topic: 'Balancing Austerity Measures with Sustainable Development Goals',
            agenda1: 'Reassessing the role of foreign exchange controls in emerging and developed Economies while discussing the stability, sovereignty and systematic risks',
            agenda2: 'TBA',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "TBA",
            level: 'Beginner',
            usgImageSrc: '/images/team/eda-dora-aksular.jpg',
            usgName: 'Eda Dora Aksular',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/undpo.jpg',
            name: 'UNDPO - United Nations Department of Peace Operations',
            topic: 'Improving the Efficiency and Accountability of UN Peacekeeping Mission',
            agenda1: 'Creating Stronger Rules for Peacekeeper Misbehaviours',
            agenda2: 'Shortening the Time It Takes to Send Peacekeepers to Crisis Areas',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "UN-DPO directs and manages UN peacekeeping missions worldwide, working to maintain international peace and security. It focuses on strengthening accountability, improving operational efficiency and ensuring the rapid deployment of peacekeeping forces in crisis areas.",
            level: 'Intermediate',
            usgImageSrc: '/images/team/ozer-gurbuz.jpg',
            usgName: 'Özer Gürbüz',
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
            level: 'Intermediate',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Seda Çetindağ & Elif Çalışkan',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/iaea.jpg',
            name: 'IAEA - International Atomic Energy Agency',
            topic: 'Enhancing Compliance with Nuclear Non-Proliferation Safeguards in Emerging Nuclear States',
            agenda1: 'Ensuring Nuclear Security in Zones of Political Instability and Armed Conflict',
            agenda2: 'Finding a balance between expanding peaceful uses of nuclear technology and stopping the spread of nuclear weapons in developing countries',
            openAgenda: "",
            itemA: "",
            itemB: "",
            description: "The IAEA promotes the safe and peaceful use of nuclear technology while preventing the spread of nuclear weapons. It supports countries in maintaining nuclear security in politically unstable regions.",
            level: 'Intermediate',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: 'Eren Bice',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/unsc.jpg',
            name: 'UNSC - United Nations Security Council',
            topic: 'The Destabilizing Effects of Unrecognized State Actors and Shadow Governments',
            agenda1: 'State Capture and Economic Control by Non-Elected Entities',
            agenda2: 'The Impact of Military and Intelligence Structures on Democratic Governance',
            openAgenda: '',
            itemA: "",
            itemB: "",
            description: "The UNSC maintains international peace and security by addressing crises with binding resolutions. It investigates threats from shadow governments and unrecognized state actors.",
            level: 'Intermediate',
            usgImageSrc: '/images/team/useravatar.png',
            usgName: '',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/vienna.jpeg',
            name: 'Congress of Vienna',
            topic: '',
            openAgenda: 'Open Agenda',
            agenda1: '',
            agenda2: '',
            itemA: "",
            itemB: "",
            description: 'The Ottoman Empire stands fractured as the sons of Bayezid I getting ready to clash for the throne in a brutal civil war. Alliances shift and betrayals run deep as Anatolia and Rumelia descend into chaos. Only one can emerge as Sultan to reunite the Crescent.',
            level: 'Intermediate',
            usgImageSrc: '/images/team/jcc-usg.jpg',
            usgName: 'Kaan Cansızoğlu',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/istanbul-convention-council-of-europe.jpg',
            name: 'Istanbul Convention - Council of Europe',
            topic: 'Istanbul Convention and Women’s Rights',
            agenda1: 'Drafting a Council of Europe Convention on Preventing and Combating All Forms of Violence Against Women and Girls',
            agenda2: 'Establishing State Obligations, Monitoring Mechanisms and Enforcement Procedures for a Binding European Women’s Rights Framework',
            openAgenda: '',
            itemA: "",
            itemB: "",
            description: "The Istanbul Convention is a European human rights treaty focused on preventing violence against women. It aims to create strong enforcement mechanisms for gender equality and protection.",
            level: 'Advanced',
            usgImageSrc: '/images/team/elif-funda.jpg',
            usgName: 'Gökçe Meva Aksu',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        {
            imageSrc: '/images/committees/jcc-1.jpg',
            name: 'JCC - Shattered Crescent : Ottoman Interregnum',
            topic: 'Shattered Crescent : Ottoman Interregnum',
            openAgenda: '',
            agenda1: '',
            agenda2: '',
            itemA: "",
            itemB: "",
            description: 'The Ottoman Empire stands fractured as the sons of Bayezid I getting ready to clash for the throne in a brutal civil war. Alliances shift and betrayals run deep as Anatolia and Rumelia descend into chaos. Only one can emerge as Sultan to reunite the Crescent.',
            level: 'Advanced',
            usgImageSrc: '/images/team/jcc-usg.jpg',
            usgName: 'Yalın Menderes',
            usgOfCommittee: '',
            committeeGuide: ""
        },
        //----
        {
            imageSrc: '/images/committees/arab.jpeg',
            name: 'Arab League',
            topic: '',
            openAgenda: 'Open Agenda',
            agenda1: '',
            agenda2: '',
            itemA: "",
            itemB: "",
            description: 'The Arab League is a regional organization that promotes political, economic, cultural, and social cooperation among its member states. It works to strengthen unity in the Arab world, address regional conflicts through dialogue, and support collective efforts toward development and stability. The organization also plays a key role in representing Arab interests on the global stage and advancing peace and mutual understanding within the region.',
            level: 'Advanced',
            usgImageSrc: '/images/team/jcc-usg.jpg',
            usgName: 'Alper Özkan',
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
