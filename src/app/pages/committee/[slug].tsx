import { useRouter } from 'next/router';
import Image from 'next/image';
import committees from '../../../data/committees.json';

type Committee = {
    imageSrc: string;
    name: string;
    description: string;
};

const committeeData: { [key: string]: Committee } = committees.reduce((acc: { [key: string]: Committee }, committee, index) => {
    acc[committee.slug] = {
        imageSrc: `/images/committees/${index + 1}.jpg`,
        name: committee.title,
        description: committee.description
    };
    return acc;
}, {});

export default function CommitteeDetail() {
    const router = useRouter();
    const { slug } = router.query;
    const committee = committeeData[slug as string];

    if (!committee) {
        return <div>Committee not found</div>;
    }

    return (
        <div className="py-10 px-72 bg-transparent">
            <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center text-white">
                {committee.name}
            </h1>
            <div className="relative w-full h-96 shadow-xl overflow-hidden rounded-lg mb-6">
                <Image
                    src={committee.imageSrc}
                    alt={committee.name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <p className="text-white text-lg">
                {committee.description}
            </p>
        </div>
    );
}
