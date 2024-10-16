import Image from 'next/image';

function Committee() {
    return (
        <div className="stack">
            <div className="card image-full w-96 shadow-xl">
                <figure>
                    <Image
                        src="https://ceoconference.ro/wp-content/uploads/photo-gallery/bucuresti_2019/Wolfgang_Schulz_BMW_8558.jpg?bwg=1575041887"
                        alt="Shoes"
                        width={1920}
                        height={1080}
                    />
                </figure>
                <div className="card-body flex flex-col justify-between h-full">
                    <h2 className="card-title text-white mx-auto my-auto">SPECPOL!</h2>
                    <div className="card-actions justify-center">
                        <button className="btn btn-sm bg-[#fd7706] text-[#0f216d] glass">Download Pdf</button>
                    </div>
                </div>
            </div>
            <div className="border-base-content card bg-[#0f216d] w-96 border">
                <div className="card-body">A</div>
            </div>
            <div className="border-base-content card bg-[#fd7706] w-96 border">
                <div className="card-body">B</div>
            </div>
        </div>
    );
};

export default function Committees() {
    return (
        <div className='flex flex-wrap justify-center gap-5 p-5' id='committees'>
            <Committee />
            <Committee />
            <Committee />
            <Committee />
            <Committee />
            <Committee />
            <Committee />
            <Committee />
        </div>
    );
};