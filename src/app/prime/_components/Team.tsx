import Link from "next/link";
import Image from "next/image";

export default function Team() {
    return (
        <div className="flex justify-center items-center" id="team">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="col-span-1 lg:col-span-2">
                    <Link href="/team">
                        <div className="card shadow-xl image-full h-60 group overflow-hidden">
                            <figure className="overflow-hidden">
                                <Image
                                    src="https://urj.org/sites/default/files/collins_tyg.jpg"
                                    alt="Executive Team"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                            </figure>

                            <div className="card-body flex items-center justify-center">
                                <h2 className="card-title text-4xl text-white">EXECUTIVE TEAM</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div>
                    <Link href="/team">
                        <div className="card shadow-xl image-full h-60 group overflow-hidden">
                            <figure className="overflow-hidden">
                                <Image
                                    src="https://urj.org/sites/default/files/collins_tyg.jpg"
                                    alt="Executive Team"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                            </figure>
                            <div className="card-body flex items-center justify-center">
                                <h2 className="card-title text-3xl text-white">ORGANIZATION TEAM</h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div>
                    <Link href="/team">
                        <div className="card shadow-xl image-full h-60 group overflow-hidden">
                            <figure className="overflow-hidden">
                                <Image
                                    src="https://urj.org/sites/default/files/collins_tyg.jpg"
                                    alt="Executive Team"
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                                />
                            </figure>
                            <div className="card-body flex items-center justify-center">
                                <h2 className="card-title text-3xl text-white">ACADEMIC TEAM</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
