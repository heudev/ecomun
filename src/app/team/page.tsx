import Image from "next/image";
import Navbar from "@/components/Navbar";

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
                head: [{ role: "President of ECOMUN", name: 'Alper Özkan', avatar: '/images/team/alper_ozkan.png' },],
                members: [
                    { role: "Secretary General", name: 'İlke Yıkılmaz', avatar: '/images/team/ilke_yikilmaz.png' },
                    { role: "Deputy Secretary General", name: 'Ahat Oğuzhan Ergin', avatar: '/images/team/ahat_oguzhan_ergin.png' },
                    { role: "Director General", name: 'Zeynep Deliceoğlu', avatar: '/images/team/zeynep_deliceoglu.png' },
                    { role: "Deputy Director General", name: 'Sinecan Vural', avatar: '/images/team/sinecan_vural.png' },
                    { role: "Executive Asisstant", name: 'Yiğit Osmanoğulları', avatar: '/images/team/yigit_osmanogullari.png' },
                    { role: "Advisor", name: 'Cenker Karagöz', avatar: '/images/team/cenker_karagoz.png' },
                ]
            }
        ]
    },


    {
        name: "Organization Team",
        managers: [
            { role: "Director General", name: 'Zeynep Deliceoğlu', avatar: '/images/team/zeynep_deliceoglu.png' },
            { role: "Deputy Director General", name: 'Sinecan Vural', avatar: '/images/team/sinecan_vural.png' },
        ],
        subTeams: [
            {
                name: "Public Relations",
                head: [
                    { role: "Head of Public Relations", name: 'Selin Demir', avatar: '/images/team/selin_demir.png' },
                ],
                members: [
                    { name: 'Elif Toraman', avatar: '/images/team/elif_toraman.png' },
                    { name: 'Nehir Emirzeoğlu', avatar: '/images/team/nehir_emirzeoglu.png' },
                    { name: 'Işıl Güneş', avatar: '/images/team/isil_gunes.png' },
                    { name: 'Ömer Yıldırım', avatar: '/images/team/omer_yildirim.png' },
                    { name: 'Ecem Özer', avatar: '/images/team/ecem_ozer.png' },
                    { name: 'Birce Karşıyakalı', avatar: '/images/team/birce_karsiyakali.png' },
                    { name: 'Atakan Erişmiş', avatar: '/images/team/atakan_erismis.png' },
                ]
            },
            {
                name: "Design & Media",
                head: [
                    { role: "Head of Design & Media", name: 'Nurdila Mazıcı', avatar: '/images/team/nurdila_mazici.png' },
                ],
                members: [
                    { name: 'Melisa Beste Ulu', avatar: '/images/team/melisa_beste_ulu.png' },
                    { name: 'Dilanaz İçme', avatar: '' },
                    { name: 'Berrak Selçuk', avatar: '/images/team/berrak_selcuk.png' },
                ]
            },
            {
                name: "Entertainment",
                head: [
                    { role: "Head of Entertainment", name: 'Elif Eylül Sadıkoğlu', avatar: '/images/team/elif_eylul_sadikoglu.png' },
                ],
                members: [
                    { name: 'Ahmet Eren Açıkgöz', avatar: '/images/team/ahmet_eren_acikgoz.png' },
                    { name: 'Birce Karşıyakalı', avatar: '/images/team/birce_karsiyakali.png' },
                    { name: 'Kaan Aydın', avatar: '/images/team/kaan_aydin.png' },
                ]
            },
            {
                name: "Finance",
                head: [
                    { role: "Head of Finance", name: 'Toprak Pusatlı', avatar: '/images/team/toprak_pusatli.png' },
                ],
                members: [
                    { name: 'Elif Tınas', avatar: '/images/team/elif_tinas.png' },
                    { name: 'Yağmur Sezgin', avatar: '/images/team/yagmur_sezgin.png' },
                    { name: 'Sude Kutlu', avatar: '/images/team/sude_kutlu.png' },
                    { name: 'Furkan Yusuf Savan', avatar: '/images/team/furkan_yusuf_savan.png' },
                ]
            },
            {
                name: "Logistics",
                head: [
                    { role: "Head of Logistics", name: 'Tatiana Cutii', avatar: '/images/team/tatiana_cutii.png' },
                ],
                members: [
                    { name: 'Efe Berk Işık', avatar: '/images/team/efe_berk_isik.png' },
                ]
            }
        ]
    },


    {
        name: "Academic Team",
        managers: [
            { role: "Secretary General", name: 'İlke Yıkılmaz', avatar: '/images/team/ilke_yikilmaz.png' },
            { role: "Deputy Secretary General", name: 'Ahat Oğuzhan Ergin', avatar: '/images/team/ahat_oguzhan_ergin.png' },
        ],
        subTeams: [
            {
                name: "",
                head: [
                ],
                members: [
                    { role: "USG of UNDP", name: 'Damla İncebıyık', avatar: '/images/team/damla_incebiyik.png' },
                    { role: "USG of UN WOMEN", name: 'Duru Taylan', avatar: '/images/team/duru_taylan.png' },
                    { role: "USG of WFP", name: 'Hayal Ece Güler', avatar: '/images/team/hayal_ece_guler.png' },
                    { role: "USG of NATO", name: 'Çağın Olgun', avatar: '/images/team/cagin_olgun.png' },
                    { role: "USG of C34", name: 'Alper Özkan', avatar: '/images/team/alper_ozkan.png' },
                ]
            },
            {
                name: "",
                head: [
                ],
                members: [
                    { role: "Deputy Chair of UNDP", name: 'Seda Çetindağ', avatar: '/images/team/seda_cetindag.png' },
                    { role: "Deputy Chair of UN WOMEN", name: 'Zeynep Ceren Kökalp', avatar: '/images/team/zeynep_ceren_kokalp.png' },
                    { role: "Deputy Chair of C34", name: 'Işıl Geçgel', avatar: '/images/team/isil_gecgel.png' },
                ]
            },
            {
                name: "",
                head: [
                ],
                members: [
                    { role: "Rapporteur of UNDP", name: 'Zeynep Bıçakçılar', avatar: '/images/team/zeynep_bicakcilar.png' },
                    { role: "Rapporteur of UN WOMEN", name: 'Nuran Coşkun', avatar: '/images/team/nuran_coskun.png' },
                    { role: "Rapporteur of WFP", name: 'Cansu Dağyaran', avatar: '/images/team/cansu_dagyaran.png' },
                    { role: "Rapporteur of NATO", name: 'Arda Ersöz', avatar: '/images/team/arda_ersoz.png' },
                    { role: "Rapporteur of UNIDIR", name: 'Selin Çavuşoğlu', avatar: '/images/team/selin_cavusoglu.png' },
                    { role: "Rapporteur of European Parliament", name: 'Elif Çalışkan', avatar: '/images/team/elif_caliskan.png' },
                    { role: "Rapporteur of C34", name: 'Eyşan Özesen', avatar: '/images/team/eysan_ozesen.png' },
                ]
            }
        ]
    },

];

function TeamMember({ role = "", name, avatar }: TeamMember) {
    return (
        <div className="flex flex-col items-center p-4 text-white size-80 lg:size-max">
            <Image src={avatar} alt={name} width={1920} height={1080} className="w-40 h-52 object-cover object-top" />
            <p className="font-bold mt-4">{role}</p>
            <p className="" >{name}</p>
        </div>
    );
}

export default function TeamPage() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full z-20">
                <Navbar />
            </div>

            <div className="fixed inset-0">
                <div className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/backgrounds/campus.jpg')" }}>
                </div>
                <div className="absolute inset-0 bg-black opacity-65"></div>
            </div>

            <div className="relative z-10 min-h-screen text-white">
                <div className="flex flex-col items-center p-4 pt-20">
                    <div className="flex flex-wrap justify-center gap-y-20">
                        {Teams.map((team, index) => (
                            <div key={team.name} className={`flex flex-col items-center p-4`}>
                                <h2 className="text-3xl md:text-4xl font-bold">{team.name}</h2>
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
                                                <h3 className="text-2xl font-bold ">{subTeam.name}</h3>
                                                {subTeam.head.length > 0 && <TeamMember {...subTeam.head[0]} />}
                                                <div className={`flex flex-wrap justify-center ${subTeam.members.length === 5 ? "max-w-5xl" : "max-w-4xl"} `}> {/* number of members in a line */}
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
            </div>
        </>
    );
};