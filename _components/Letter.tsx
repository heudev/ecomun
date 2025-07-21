export default function Letter() {
    return (
        <section className="min-h-screen flex items-center py-10 lg:py-20 px-5">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 space-y-10 lg:space-y-0">
                <div className="relative lg:w-2/3 mx-auto text-white">
                    {/* Opak siyah arka plan */}
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>

                    <div className="relative p-6">
                        <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
                            Secretary-General Letter
                        </h1>
                        <p className="text-base lg:text-lg leading-relaxed mb-6 text-justify">
                            Dear participants of ECOMUN,
                            <br /><br />
                            On behalf of the entire ECOMUN secretariat team, it is my honor to welcome all of you to our annual ECOMUN conference!
                            <br /><br />
                            My name is Alper ÖZKAN, a Mechatronics Engineering student and I will be serving as your Secretaty-General for this year&apos;s iteration of ECOMUN, Izmir&apos;s biggest Model United Nations Conference. Throughout the whole conference, My Director General Zeynep Deliceoğlu and I will lead a team of passionate and hard-working Izmir University of Economics students in managing Izmir’s  finest Model UN conference to the best of our abilities.
                            <br /><br />
                            ECOMUN&apos;s mission is simple; we strive to provide young leaders a stimulating platform to debate, discuss, and resolve critical global issues by promoting equity, creativity, and diplomacy. At ECOMUN, Model United Nations is more than a simulation of the UN, but rather, it is a space for high school delegates to dig into the world of international issues and develop stronger public speaking, communication, critical thinking, and diplomacy skills. Whether you are the most passionate and knowledgeable political thinker or, perhaps, are someone foreign to the world of diplomacy, ECOMUN is for you.
                            <br /><br />
                            Model UN has been an incredibly impactful part of my life, and I would not be where I am today if I had never participated in it. I hope that Model UN will have the same effect on all delegates attending ECOMUN, be it by making a new friend or by becoming a more confident person. Myself and the rest of the Secretariat Team are committed to providing a fun and educational Model United Nations experience to all delegates at ECOMUN, and we cannot wait to meet everyone in IEU this February.
                            <br /><br />
                            Kind regards,
                        </p>
                        <p className="font-semibold">
                            Alper ÖZKAN
                            <br />
                            Secretary-General
                            <br />
                            Izmir University of Economics Model United Nations 2025
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
