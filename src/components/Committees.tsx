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
    itemA,
    itemB,
    level,
    usgImageSrc,
    usgName,
    usgOfCommittee,
    onClose,
}: {
    imageSrc: string;
    name: string;
    description: string;
    topic: string;
    agenda1: string;
    agenda2: string;
    itemA: string;
    itemB: string;
    level: string;
    usgImageSrc: string;
    usgName: string;
    usgOfCommittee: string;
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
                        {itemA !== "" && itemB !== "" &&
                            <div>
                                <p className="mb-2"><strong className='text-white'>Item A:</strong> {itemA}</p>
                                <p className="mb-2"><strong className='text-white'>Item B:</strong> {itemB}</p>
                            </div>
                        }


                        <p className="mb-4 text-justify">{description}</p>
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
        imageSrc: string;
        name: string;
        description: string;
        topic: string;
        agenda1: string;
        agenda2: string;
        itemA: string;
        itemB: string;
        level: string;
        usgImageSrc: string;
        usgName: string;
        usgOfCommittee: string;
    } | null>(null);

    const committees = [
        {
            imageSrc: '/images/committees/united_nations_development_programme.jpg',
            name: 'UNDP: United Nations Development Programme',
            topic: 'Sustainable Development Goals',
            agenda1: 'TBA',
            agenda2: 'TBA',
            itemA: "",
            itemB: "",
            description: 'The United Nations Development Programme (UNDP) works to improve living standards in developing countries by providing resources, knowledge and support. It focuses on areas such as poverty reduction, climate change and sustainable development, collaborating with governments and communities to deal with global challenges. UN members are expected to discuss on current and possible actions.',
            level: 'Beginner',
            usgImageSrc: '/images/team/damla_incebiyik.png',
            usgName: 'Damla İncebıyık',
            usgOfCommittee: 'Under Secretary General of UNDP',
        },
        {
            imageSrc: '/images/committees/unhcr_united_nations_high_commissioner_for_refugees.jpg',
            name: 'UNHCR: United Nations Refugee Agency',
            topic: '',
            agenda1: '',
            agenda2: '',
            itemA: "Brain Drain and National Development",
            itemB: "Implementing effective ways to improve healthcare and security in refugee camps",
            description: "The United Nations Refugee Agency(UNHCR) is an international organization dedicated to safeguarding the rights and well-being of refugees, stateless individuals and others forced to leave their homes due to conflict or disaster. Working with governments and partner organisations, UNHCR provides essential support including shelter, healthcare and education while seeking constant solutions such as voluntary repatriation, resettlement and integration into host countries.",
            level: 'Beginner',
            usgImageSrc: '/images/team/yigit_akarca.png',
            usgName: 'Yiğit Akarca',
            usgOfCommittee: 'Under Secretary General of UNHCR',
        },
        {
            imageSrc: '/images/committees/unidir_united_nations_institute_for_disarmament_research.jpg',
            name: 'UNIDIR: United Nations Institute for Disarmament Research',
            topic: 'Managing Exits from Armed Conflict Project (MEAC)',
            agenda1: 'TBA',
            agenda2: 'TBA',
            itemA: "",
            itemB: "",
            description: "UNIDIR (United Nations Institute for Disarmament Research) established in order to inform the member states and the public of international security and disarmament. Currently with the aim of building a more secure world, UNIDIR is focused on disarmament,exiting an armed conflict, peace and security through conducting research on innovative solutions for disarmament and promoting protection from armed conflicts and tech-related global threaths. ",
            level: 'Beginner',
            usgImageSrc: '/images/team/ibrahim_dagduran.png',
            usgName: 'İbrahim Dağduran',
            usgOfCommittee: 'Under Secretary General of UNIDIR',
        },
        {
            imageSrc: '/images/committees/wto_world_trade_organization.jpg',
            name: 'WTO: World Trade Organization',
            topic: 'Regional Sustainable Development Projects between partner and member countries to increase trade capacities.',
            agenda1: 'TBA',
            agenda2: 'TBA',
            itemA: "",
            itemB: "",
            description: "WTO (World Trade Organization) committee focuses on engaging discussions and negotiations related to trade policies, trade disputes and other issues which affect global commerce. Mission being regional stability and continunity of trade for trust based relations to not be broken. Our goal is to reach solutions that promote fair and open trade. We are here for working on the future of international commerce",
            level: 'Intermediate',
            usgImageSrc: '/images/team/sarp_batu_uysal.png',
            usgName: 'Sarp Batu Uysal',
            usgOfCommittee: 'Under Secretary General of WTO',
        },
        {
            imageSrc: '/images/committees/wfp_world_food_programme.jpg',
            name: 'WFP: World Food Programme',
            topic: 'Ending Hunger and Famine in Conflict Zones or Disaster Zones',
            agenda1: 'TBA',
            agenda2: 'TBA',
            itemA: "",
            itemB: "",
            description: "The World Food Programme (WFP) is a UN committee and world's largest humanitarian organisation focused on combatting world hunger, providing emergency supplies to conflict and disaster areas and raising funds to do so. Works in collaboration with civil society organizations and governments",
            level: 'Intermediate',
            usgImageSrc: '/images/team/hayal_ece_guler.png',
            usgName: 'Hayal Ece Güler',
            usgOfCommittee: 'Under Secretary General of WFP',
        },
        {
            imageSrc: '/images/committees/un_women.jpg',
            name: 'UN WOMEN',
            topic: 'Women Peace and Security',
            agenda1: 'TBA',
            agenda2: 'TBA',
            itemA: "",
            itemB: "",
            description: "The United Nations Entity for Gender Equality and the Empowerment of Women implements initiatives to promote gender equality and empower women around the world. UN Women develops effective projects, from strengthening women's roles in economic and social life to increasing access to education, health services and protection from violence. As the UN Women Committee, we aim to raise awareness and produce solutions so that every woman can have the chance to reach the opportunities she deserves. We expect your support and assistance on this path.",
            level: 'Intermediate',
            usgImageSrc: '/images/team/duru_taylan.png',
            usgName: 'Duru Taylan',
            usgOfCommittee: 'Under Secretary General of UN WOMEN',
        },
        {
            imageSrc: '/images/committees/european_parliament.jpg',
            name: 'EUROPEAN PARLIAMENT',
            topic: 'Asylum and Migration in the European Union',
            agenda1: 'TBA',
            agenda2: 'TBA',
            itemA: "",
            itemB: "",
            description: "The European Parliament focuses on key functions of the European Unions working system. These functions are legislating, approving the EU budget, shaping policies on issues like climate and human rights, ensuring institutional accountability, and contributing to foreign policy through international agreements",
            level: 'Intermediate',
            usgImageSrc: '/images/team/gokce_meva_aksu.png',
            usgName: 'Gökçe Meva Aksu',
            usgOfCommittee: 'Under Secretary General of European Parliament',
        },
        {
            imageSrc: '/images/committees/c34_special_committee_on_peacekeeping_operations.jpg',
            name: 'Special Committee on Peacekeeping Operations',
            topic: 'Member countries cooperation on operating Peace Keeping Forces.(Taking turns in funding,Taking turns in becoming the peacekeeping force)',
            agenda1: 'TBA',
            agenda2: 'TBA',
            itemA: "",
            itemB: "",
            description: "The Special Committee on Peacekeeping Operations of the United Nations,or C34, is a committee of the United Nations General Assembly. It focuses challenges like funding, logistics, the safety of peacekeepers and ensuring mission supports from member countries.Committing in global peace and post-conflict recovery efforts, C34 also mandates over peacekeeping missions task distribution.",
            level: 'Advanced',
            usgImageSrc: '/images/team/alper_ozkan.png',
            usgName: 'Alper Özkan',
            usgOfCommittee: 'Under Secretary General of Special Committee on Peacekeeping Operations',
        },
        {
            imageSrc: '/images/committees/jcc_europe_end_of_the_middle_ages.jpg',
            name: 'JCC: Europe End of the Middle Ages',
            topic: 'Europe End of the Middle Ages',
            agenda1: '',
            agenda2: '',
            itemA: "",
            itemB: "",
            description: "Footsteps of the Ottoman Turks shook the ground and caused a havoc in the west. While for everyone it was a shock and a message from the Turks, it was just the beginning. From east to west message was clear “There is nowhere safe” and also there was another thing in this message that sparked a fire to become a wildfire in the west “The Bombards”. Such magnificent tool annihilating even the thickest of the walls was maybe not so bad for the Kings and Emperors who are looking for a way to solidify control and centralise their Kingdoms-Empires. So it began the “End of the Middle Ages”, a spark in Europe to change the centuries in front .",
            level: 'Advanced',
            usgImageSrc: '/images/team/yarkin_menderes.png',
            usgName: 'Yarkın Menderes',
            usgOfCommittee: 'Under Secretary General of JCC',
        },
        {
            imageSrc: '/images/committees/nato_the_north_atlantic_treaty_organization.jpg',
            name: 'NATO: The North Atlantic Treaty Organization',
            topic: '2001 NATO meeting on Cooperation of member countries for identifying,knowldege sharing and destroying radical terrorist organizations.',
            agenda1: '',
            agenda2: '',
            itemA: "",
            itemB: "",
            description: "The North Atlantic Treaty Organization (NATO) is a political and military alliance committed to the collective defense and security of its member states. Established to respond to threats and uphold peace, NATO’s approach includes diplomatic efforts and when necessary, coordinated military action. As global security issues have evolved, NATO’s mission has expanded to address new challenges like cyber threats and terrorism, making it an essential organisation in promoting stability and protecting allied nations.",
            level: 'Advanced',
            usgImageSrc: '/images/team/cagin_olgun.png',
            usgName: 'Çağın Olgun',
            usgOfCommittee: 'Under Secretary General of NATO',
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
                    itemA={selectedCommittee.itemA}
                    itemB={selectedCommittee.itemB}
                    level={selectedCommittee.level}
                    usgImageSrc={selectedCommittee.usgImageSrc}
                    usgName={selectedCommittee.usgName}
                    usgOfCommittee={selectedCommittee.usgOfCommittee}
                    onClose={() => setSelectedCommittee(null)}
                />
            )}
        </div>
    );
}
