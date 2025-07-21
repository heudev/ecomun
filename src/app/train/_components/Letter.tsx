export default function Letter() {
    return (
        <section className="min-h-screen flex items-center py-10 lg:py-20 px-5">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 space-y-10 lg:space-y-0">
                <div className="relative lg:w-2/3 mx-auto text-white">
                    {/* Opak siyah arka plan */}
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

                    <div className="relative p-6">
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
                            Secretary General Letter
                        </h1>
                        <p className="text-base lg:text-lg leading-relaxed mb-6 text-justify">
                            Honourable Delegates and Most Distinguished Participants,
                            <br /><br />
                            My name is Ahat Oğuzhan Ergin, a senior law student at İzmir University of Economics and I am honored to serve as your Secretary General for this conference. Alongside my Director General Zeynep Deliceoğlu, I will be leading a dedicated and passionate team to provide you with an unforgettable Model United Nations experience.
                            <br /><br />
                            My journey in MUN began back in 2017. Since then, I have been a part of this world for eight years and years filled with debate, challenge, friendship and change. From delegate to chair, from academic to organizational roles, each step has brought new lessons, new faces and stories I still carry with me. Now, I stand here not only with years of experience but with the sincere will to create a meaningful conference for each and every one of you.
                            <br /><br />
                            When I first stepped into the world of MUN, I saw it as a valuable addition to my résumé. But over time, I came to realize that the true impact of MUN lies not in what it adds to a CV but in what it adds to you — the courage to speak up, the strength to challenge ideas and the ability to listen and grow. That is exactly what ECOMUN strives to be: more than just a simulation, it is a platform for young minds to engage with global issues, sharpen their voice and become thoughtful leaders through diplomacy, dialogue and respect. Whether this is your first conference or your tenth, I hope you find in these four days a space to reflect, connect and discover something meaningful in yourself.
                            <br /><br />
                            These four days belong to you. Speak when it’s difficult, think when it feels easy and never forget the value of respect. Be bold in your ideas, open in your conversations and fearless in challenging what you believe can be better — because nothing has been written yet and that is exactly where the beauty lies. As the Secretariat, our role is to stand beside you throughout this journey to guide, support and ensure that ECOMUN becomes a place of meaningful debate, genuine growth and unforgettable memories. We cannot wait to welcome you to İzmir University of Economics this September and to witness the ideas, energy and passion you will bring to the table.
                            <br /><br />
                            With the deepest sincerity and hope,<br />
                            We welcome you all.
                        </p>
                        <p className="font-semibold">
                            Ahat Oğuzhan Ergin<br />
                            Secretary General<br />
                            İzmir University of Economics Model United Nations 2025
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
