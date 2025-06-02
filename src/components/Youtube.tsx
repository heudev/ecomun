export default function Youtube() {
    return (
        <div className='flex justify-center items-center p-5'>
            <div className='relative w-full md:max-w-[950px]' style={{ paddingBottom: '56.25%' }}>
                <iframe className='absolute top-0 left-0 w-full h-full rounded-xl' src="https://www.youtube.com/embed/_nGyVH17Q1M?si=lpL99YbhgZNIDaIR" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>

        </div>
    );
};