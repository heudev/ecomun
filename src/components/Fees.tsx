export default function Fees() {
    return (
        <div id="fees" className="flex flex-col items-center justify-center pt-10 pb-10">
            <div className="text-white text-center mb-8">
                <h1 className="text-4xl font-bold">Fees</h1>
                <p>Delegates in Turkey pay the fees indicated in TRY.</p>
                <p>Delegates coming from abroad pay prices indicated in USD.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
                <div className="transition-transform transform hover:scale-105 bg-[rgba(66,38,112,0.7)] text-white p-6 rounded-lg shadow-lg w-80">
                    <div className="text-5xl font-bold mb-4">
                        1500₺
                    </div>
                    <div className="text-lg font-semibold">
                        Delegate
                    </div>
                    <div className="mt-4 space-y-2">
                        <a
                            className="btn bg-[#fd7706] text-black w-full flex justify-between hover:bg-[#fd7706] hover:scale-105 border-0"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdAHMn4V8UjzwrWx0mJZHytanbwfjPb4VGPNRn4Nkudx1RTIA/viewform?usp=pp_url"
                            target="_blank"
                        >
                            <span>Individual Delegate</span>
                            <span>1500₺</span>
                        </a>
                        <a
                            className="btn bg-[#fd7706] text-black w-full flex justify-between hover:bg-[#fd7706] hover:scale-105 border-0"
                            href="https://forms.gle/Ani1qKec6qNXkksm6"
                            target="_blank"
                        >
                            <span>Delegate</span>
                            <span>1450₺</span>
                        </a>
                    </div>
                </div>

                <div className="transition-transform transform hover:scale-105 bg-[rgba(15,33,109,0.7)] text-white p-6 rounded-lg shadow-lg w-80">
                    <div className="text-5xl font-bold mb-4">
                        850₺
                    </div>
                    <div className="text-lg font-semibold">
                        Academic Team
                    </div>
                    <div className="mt-4 space-y-2">
                        <a
                            className="btn bg-[#fd7706] text-black w-full flex justify-between hover:bg-[#fd7706] hover:scale-105 border-0"
                            href="https://forms.gle/SQveovaAL4pdCF9g9"
                            target="_blank"
                        >
                            <span>Committee Board</span>
                            <span>850₺</span>
                        </a>
                        <a
                            className="btn bg-[#fd7706] text-black w-full justify-between hover:bg-[#fd7706] hover:scale-105 border-0"
                            href="https://forms.gle/dRMbfT3VdEvT6okD8"
                            target="_blank"
                        >
                            <span>Crisis Team Member</span>
                            <span>850₺</span>
                        </a>
                    </div>
                </div>

                <div className="transition-transform transform hover:scale-105 bg-[rgba(50,125,202,0.7)] text-white p-6 rounded-lg shadow-lg w-80">
                    <div className="text-5xl font-bold mb-4">
                        700₺
                    </div>
                    <div className="text-lg font-semibold">
                        Organization Team
                    </div>
                    <div className="mt-4 space-y-2">
                        <a
                            className="btn bg-[#fd7706] text-black w-full flex justify-between hover:bg-[#fd7706] hover:scale-105 border-0"
                            href="https://forms.gle/ULDmTB9CD25MGxP36"
                            target="_blank"
                        >
                            <span>Press Staff</span>
                            <span>700₺</span>
                        </a>
                        <a
                            className="btn bg-[#fd7706] text-black w-full flex justify-between hover:bg-[#fd7706] hover:scale-105 border-0"
                            href="https://forms.gle/PyV6c4MzMUFX3YgKA"
                            target="_blank"
                        >
                            <span>Administrative Staff</span>
                            <span>700₺</span>
                        </a>
                        <a
                            className="btn bg-[#fd7706] text-black w-full flex justify-between hover:bg-[#fd7706] hover:scale-105 border-0"
                            href="https://forms.gle/hD7ARfdonRTZGkEb9"
                            target="_blank"
                        >
                            <span>IUE Delegate</span>
                            <span>700₺</span>
                        </a>
                    </div>
                </div>

                <div className="transition-transform transform hover:scale-105 bg-[rgb(91,161,235,0.7)] text-white p-6 rounded-lg shadow-lg w-80">
                    <div className="text-5xl font-bold mb-4">
                        $60
                    </div>
                    <div className="text-lg font-semibold">
                        International Delegate
                    </div>
                    <div className="mt-4 space-y-2">
                        <a
                            className="btn bg-[#fd7706] text-black w-full flex justify-between hover:bg-[#fd7706] hover:scale-105 border-0"
                            href="https://forms.gle/15JFjHMY2hdBfZmm6"
                            target="_blank"
                        >
                            <span>Individual Delegate</span>
                            <span>$60</span>
                        </a>
                        <a
                            className="btn bg-[#fd7706] text-black w-full flex justify-between hover:bg-[#fd7706] hover:scale-105 border-0"
                            href=""
                            target="_blank"
                        >
                            <span>Delegation</span>
                            <span>$50</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};