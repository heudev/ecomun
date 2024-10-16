import Image from "next/image";

interface TeamMember {
    id: number;
    name: string;
    avatar: string;
}

const teamMembers: TeamMember[] = [
    { id: 1, name: 'John Doe', avatar: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Jane Smith', avatar: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Alice Johnson', avatar: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Bob Brown', avatar: 'https://via.placeholder.com/150' },
];

export default function TeamPage() {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-2xl font-bold mb-6">Team</h1>
            <div className="flex flex-wrap justify-center">
                {teamMembers.map(member => (
                    <div key={member.id} className="m-4 text-center">
                        <Image
                            src={member.avatar}
                            alt={member.name}
                            className="rounded-full w-24 h-24"
                            width={1920}
                            height={1080}
                        />
                        <p className="mt-2 text-lg">{member.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};