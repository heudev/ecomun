import Image from 'next/image';

function Committee() {
    return (
        <a className="stack transition-transform transform hover:scale-105 group">
            <div className="card relative w-96 h-52 shadow-xl overflow-hidden">
                <Image
                    src=""
                    alt="Committee"
                    width={1920}
                    height={1080}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-100 opacity-0"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 group-hover:opacity-0" />
                <div className="card-body flex flex-col justify-center items-center h-full relative z-10 text-center text-white">
                    <div className="flex-grow flex items-center">
                        <h2 className="card-title text-white">TBA</h2>
                    </div>
                </div>
            </div>
        </a>
    );
}


export default function Committees() {
    return (
        <div id='committees'>
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center">
                Committees
            </h1>
            <div className='flex flex-wrap justify-center gap-10 p-5'>
                <Committee />
                <Committee />
                <Committee />
                <Committee />
                <Committee />
                <Committee />
                <Committee />
                <Committee />
            </div>
        </div>

    );
};