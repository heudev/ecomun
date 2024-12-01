import Image from "next/image";

type TeamMember = {
    role?: string;
    name: string;
    avatar: string;
};

type Team = {
    name: string;
    head: TeamMember[];
    members: TeamMember[];
};

type Teams = {
    name: string;
    managers: TeamMember[];
    subTeams: Team[];
}[];


const Teams: Teams = [
    {
        name: "Executive Team",
        managers: [],
        subTeams: [
            {
                name: "",
                head: [{ role: "Secretary General", name: 'Zeynep Deliceoğlu', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },],
                members: [
                    { role: "asd", name: 'John Doe', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { role: "", name: 'Jane Smith', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { role: "", name: 'Alice Johnson', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { role: "", name: 'Bob Brown', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { role: "", name: 'Bob Brown', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { role: "", name: 'Bob Brown', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ]
            }
        ]
    },


    {
        name: "Organization Team",
        managers: [
            { role: "Director General", name: 'Zeynep Deliceoğlu', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
            { role: "Deputy Director General", name: 'Sinecan Vural', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
        ],
        subTeams: [
            {
                name: "Public Relations",
                head: [
                    { role: "Head of Public Relations", name: 'Selin Demir', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ],
                members: [
                    { name: 'Elif Toraman', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Nehir Emirzeoğlu', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Işıl Güneş', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Ömer Yıldırım', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Ecem Özer', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Azra Berrin Sönmez', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Atakan Erişmiş', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ]
            },
            {
                name: "Design & Media",
                head: [
                    { role: "Head of Design & Media", name: 'Nurdila Mazıcı', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ],
                members: [
                    { name: 'Bayram Alp Tarhan', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Damla Tığlı', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Asra Sezen', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Berrak Selçuk', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ]
            },
            {
                name: "Entertainment",
                head: [
                    { role: "Head of Entertainment", name: 'Elif Eylül Sadıkoğlu', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ],
                members: [
                    { name: 'Ahmet Eren Açıkgöz', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Efe Berk Işık', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ]
            },
            {
                name: "Finance",
                head: [
                    { role: "Head of Finance", name: 'Toprak Pusatlı', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ],
                members: [
                    { name: 'Elif Tınas', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Arda Kanat', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Sude Kutlu', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Öykü Çim', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ]
            },
            {
                name: "Logistic",
                head: [
                    { role: "Head of Logistic", name: 'Tatiana Cutii', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ],
                members: [
                    { name: 'Sarp Gönüldal', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Efe Berk Işık', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ]
            }
        ]
    },
    /* {
        name: "Academic Team",
        managers: [
            { role: "Secretary General", name: 'Zeynep Deliceoğlu', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
            { role: "Deputy Secretary General", name: 'Sinecan Vural', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
        ],
        teams: [
            {
                name: "Academic Team",
                head: [
                    { role: "Head of Public Relations", name: 'John Doe', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ],
                members: [
                    { name: 'John Doe', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Jane Smith', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Alice Johnson', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                    { name: 'Bob Brown', avatar: 'https://avatars.githubusercontent.com/u/74737994?v=4' },
                ]
            }
        ]
    }, */
];

function TeamMember({ role = "", name, avatar }: TeamMember) {
    return (
        <div className="flex flex-col items-center p-4">
            <Image src={avatar} alt={name} width={100} height={100} className="rounded-full w-40 h-40" />
            <p className="font-bold mt-4">{role}</p>
            <p className="" >{name}</p>
        </div>
    );
}

export default function TeamPage() {
    return (
        <div className="flex flex-col items-center p-4">
            <div className="flex flex-wrap justify-center gap-y-20">
                {Teams.map((team, index) => (
                    <div key={team.name} className={`flex flex-col items-center p-4`}> {/*  w-full ${index % 2 == 0 ? "bg-[rgba(66,38,112,1)]" : "bg-[#0f216d]"} */}
                        <h2 className="text-4xl font-bold">{team.name}</h2>
                        {team.managers.length > 0 &&
                            <div className="flex flex-wrap justify-center mt-12">
                                {team.managers.map((manager) => (
                                    <TeamMember key={manager.name} {...manager} />
                                ))}
                            </div>
                        }
                        <div className="">
                            {team.subTeams.map((subTeam) => (
                                <div key={subTeam.name}>
                                    {team.managers.length > 0 && <hr className="mx-auto border-t-2 border-gray-400 w-full md:max-w-xl mt-12 mb-12" />}
                                    <div className="flex flex-col items-center p-4">
                                        <h3 className="text-2xl font-bold mb-4">{subTeam.name}</h3>
                                        {subTeam.head.length > 0 && <TeamMember {...subTeam.head[0]} />}
                                        <div className="flex flex-wrap justify-center max-w-4xl"> {/* number of members in a line */}
                                            {subTeam.members.map((member) => (
                                                <TeamMember key={member.name} {...member} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {index < Teams.length - 1 && <hr className="mx-auto border-t-2 border-gray-400 w-full md:max-w-7xl mt-16" />}
                    </div>
                ))}
            </div>
        </div>
    );
};