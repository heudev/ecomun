export default function Fees() {
    return (
        <div id="fees" className="flex flex-col items-center justify-center pt-10 pb-10 text-white">
            <div className="text-center mb-8">
                <h1 className="text-3xl lg:text-5xl font-bold mb-4">Fees</h1>
                <p>Delegates in Turkey pay the fees indicated in TRY.</p>
                <p>Delegates coming from abroad pay prices indicated in EURO.</p>
            </div>

            <div className="w-full max-w-4xl px-4 space-y-4">
                {collapseItem(
                    "Delegate",
                    `An Individual Delegate registers independently to represent a country or position in a committee. They participate in debates, draft resolutions and collaborate with others.

                    A Delegation is a group of delegates from the same institution or country registering together to represent multiple positions. They often receive a discounted fee.

                    An IUE Delegate refers specifically to students from İzmir University of Economics who attend the conference at a reduced rate.`,
                    [
                        { label: "Individual Delegate", price: "1950₺", link: "https://docs.google.com/forms/d/e/1FAIpQLSdAHMn4V8UjzwrWx0mJZHytanbwfjPb4VGPNRn4Nkudx1RTIA/viewform?usp=pp_url" },
                        { label: "Delegation", price: "1900₺", link: "https://forms.gle/Ani1qKec6qNXkksm6" },
                        { label: "IUE Delegate", price: "900₺", link: "https://forms.gle/hD7ARfdonRTZGkEb9" },
                    ]
                )}
                {collapseItem(
                    "Academic Team",
                    `The Trainees will be part of the academic team and will work closely with experienced and highly efficient members of the academic board in their selected committees. This will allow them to learn how to contribute effectively within an academic team environment.

                    Whenever possible, they will also have the opportunity to visit other committees to observe and understand how different types of committees operate.

                    Our main goal is to provide delegates who have never had board experience with the chance to gain this experience and begin their academic journey.

                    The Committee Board consists of the Chair, Co-Chair and Rapporteur who moderate debates, ensure procedural rules are followed and support delegates throughout the sessions.

                    The Crisis Committee Board consists of the Head of Crisis, Crisis Team Members and the Committee Board Members (President Chair, Deputy Chair and Co-Chairs).`,
                    [
                        { label: "Crisis Team Member", price: "1150₺", link: "https://forms.gle/dRMbfT3VdEvT6okD8" },
                        { label: "Committee Board", price: "1150₺", link: "https://forms.gle/SQveovaAL4pdCF9g9" },
                        { label: "Committee Board Trainee", price: "1200₺", link: "https://forms.gle/WPkhtUq8vdQzd8TC9" },
                    ]
                )}
                {collapseItem(
                    "Organization Team",
                    `Press Staff produce daily newsletters, take photos, conduct interviews and manage social media to document the conference. They act as the media representation of the event.

                    Administrative Staff assist with logistics, registration and delegate support to ensure the smooth running of the conference. They handle organizational and operational tasks.`,
                    [
                        { label: "Press Staff", price: "950₺", link: "https://forms.gle/ULDmTB9CD25MGxP36" },
                        { label: "Administrative Staff", price: "950₺", link: "https://forms.gle/PyV6c4MzMUFX3YgKA" },
                    ]
                )}
                {collapseItem(
                    "International Delegate",
                    `An International Delegate is a participant traveling from abroad to attend the conference bringing international perspectives to debates.`,
                    [
                        { label: "Individual Delegate", price: "€50", link: "https://forms.gle/15JFjHMY2hdBfZmm6" },
                        { label: "Delegation", price: "€45", link: "https://docs.google.com/forms/d/e/1FAIpQLSfB_s2Gti9Xyc6938whZd6FpBXDbwb9bEfqBlEs8VfAISIczw/viewform?usp=sharing" },
                    ]
                )}
            </div>
        </div>
    );
}

function collapseItem(title: string, description: string, items: { label: string; price: string; link: string }[]) {
    return (
        <div className="collapse collapse-arrow bg-[rgba(66,38,112,0.7)] text-white">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-bold">{title}</div>
            <div className="collapse-content space-y-4">
                <p className="text-sm whitespace-pre-line leading-relaxed">{description}</p>
                {items.map((item, index) => (
                    <a
                        key={index}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn bg-[#fd7706] text-black w-full justify-between hover:scale-105 hover:bg-[#fd7706] border-0"
                    >
                        <span className="text-lg font-normal">{item.label}</span>
                        <span className="text-lg font-semibold">{item.price}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
