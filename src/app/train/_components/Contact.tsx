import { FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
        <div id="contact" className="p-3 md:p-20 flex flex-col items-center md:flex-row gap-10 w-full">
            <div className="mt-5 md:mt-0 md:ml-5 text-center md:text-left w-full space-y-10 md:flex items-center gap-10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2195.632379048868!2d27.044311239861848!3d38.388323303631616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbdc4529058ba1%3A0x8e69cee0b7d6e920!2s%C4%B0zmir%20Ekonomi%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1689193615018!5m2!1str!2str" className='w-full rounded max-w-[700px]' height="400" style={{ border: 0 }} loading="lazy"></iframe>
                <div className='space-y-8'>
                    <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-center text-white">
                        Contact Info
                    </h1>
                    <p className="">If you have any questions regarding the conference, please do not hesitate to contact us:</p>
                    <div className='space-y-3'>
                        <div className="flex justify-center md:justify-start items-center text-lg">
                            <FaEnvelope className="mr-2  text-xl" />
                            <a href="mailto:pr@ecomun.net" className="font-bold">pr@ecomun.net</a>
                        </div>
                        <div className="flex justify-center md:justify-start items-center text-lg">
                            <FaInstagram className="mr-2 text-xl" />
                            <a href="https://instagram.com/ecomun" className="font-bold">@ecomun</a>
                        </div>
                    </div>
                    <p><span className="font-bold">Address:</span> İzmir Ekonomi Üniversitesi, İzmir, Türkiye</p>
                </div>
            </div>
        </div>
    );
};