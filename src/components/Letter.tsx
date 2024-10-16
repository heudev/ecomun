import Image from 'next/image'

export default function Letter() {
    return (
        <section className="min-h-screen flex items-center bg-[#422670] py-10 lg:py-20 px-5 opacity-70">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center lg:items-start lg:space-x-10 space-y-10 lg:space-y-0">
                <div className="flex justify-center lg:justify-start">
                    <Image
                        src="https://avatars.githubusercontent.com/u/74737994?v=4"
                        alt="ecomun"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg object-cover w-52 md:w-72"
                    />
                </div>

                <div className="text-white lg:w-2/3">
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
                        Secretary-General Letter
                    </h1>
                    <p className="text-base lg:text-lg leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt placerat felis, id elementum nunc mattis eget. Nulla facilisi. Aenean nec est quis dui posuere ullamcorper in eu sapien. Phasellus faucibus viverra sagittis. Sed malesuada mi at augue dignissim, et tincidunt sapien convallis. Quisque cursus finibus mi, vel tincidunt ante commodo vitae.
                        <br /><br />
                        Mauris et velit dui. Duis volutpat fermentum mi. Nullam nec consectetur magna, eget semper risus. Curabitur ac gravida lacus. Mauris auctor pulvinar dolor ac ullamcorper. Curabitur eget laoreet velit, vitae dictum tellus. Morbi ut finibus libero. Quisque rutrum, nulla sit amet posuere vehicula, sem purus vulputate sapien, non laoreet ante justo eu magna.
                    </p>
                    <p className="font-semibold">
                        Secretary-General
                        <br />
                        Alper Özkan
                    </p>
                </div>
            </div>
        </section>
    );
};