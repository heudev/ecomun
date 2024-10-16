export default function Fees() {
    return (
        <div className="flex flex-col items-center justify-center pt-10 pb-10">
            <div className="text-white text-center mb-8">
                <h1 className="text-4xl font-bold">Fees</h1>
                <p>Delegates in Turkey pay the fees indicated in TRY.</p>
                <p>Delegates coming from abroad pay prices indicated in USD.</p>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
                <div className="transition-transform transform hover:scale-105 bg-[rgba(66,38,112,0.7)] text-white p-6 rounded-lg shadow-lg w-80">
                    <div className="text-5xl font-bold mb-4">
                        ₺2600
                    </div>
                    <div className="text-lg font-semibold">
                        Delegate
                    </div>
                    <div className="mt-4 space-y-2">
                        <button className="btn bg-[#fd7706] text-black w-full">Individual Delegate</button>
                        <button className="btn bg-[#fd7706] text-black w-full">Delegate</button>
                        <button className="btn bg-[#fd7706] text-black w-full">IUE Student</button>
                    </div>
                </div>

                <div className="transition-transform transform hover:scale-105 bg-[rgba(15,33,109,0.7)] text-white p-6 rounded-lg shadow-lg w-80">
                    <div className="text-5xl font-bold mb-4">
                        ₺2600
                    </div>
                    <div className="text-lg font-semibold">
                        International Delegate
                    </div>
                    <div className="mt-4 space-y-2">
                        <button className="btn bg-[#fd7706] text-black w-full">Committee Board</button>
                        <button className="btn bg-[#fd7706] text-black w-full">Press Staff</button>
                        <button className="btn bg-[#fd7706] text-black w-full">Administrative Staff</button>
                    </div>
                </div>

                <div className="transition-transform transform hover:scale-105 bg-[rgba(50,125,202,0.7)] text-white p-6 rounded-lg shadow-lg w-80">
                    <div className="text-5xl font-bold mb-4">
                        ₺2600
                    </div>
                    <div className="text-lg font-semibold">
                        International Delegate
                    </div>
                    <div className="mt-4 space-y-2">
                        <button className="btn bg-[#fd7706] text-black w-full">Individual Delegate</button>
                        <button className="btn bg-[#fd7706] text-black w-full">Delegation</button>
                    </div>
                </div>
            </div>
        </div>
    );
};