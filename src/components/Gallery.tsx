"use client"
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import { Image } from 'antd';

const imageUrlsArray: string[] = [
    "https://picsum.photos/900/800",
    "https://picsum.photos/900/700",
    "https://picsum.photos/900/900",
    "https://picsum.photos/900/600",
    "https://picsum.photos/900/800",
    "https://picsum.photos/900/500",
    "https://picsum.photos/900/700",
    "https://picsum.photos/900/600",
];

export default function Gallery() {
    const [imageUrls, setImageUrls] = useState<string[]>([]);
    const [columns, setColumns] = useState<number>(4);

    useEffect(() => {
        setImageUrls(imageUrlsArray);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 960) {
                setColumns(2);
            } else if (window.innerWidth < 1280) {
                setColumns(3);
            } else {
                setColumns(4);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex justify-center items-center md:ps-20 md:pe-20'>
            <Box className='md:m-5 flex justify-center'>
                <Masonry columns={columns} spacing={2}>
                    <Image.PreviewGroup
                        preview={{
                            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                        }}
                    >
                        {imageUrls.map((image, index) => (
                            <Image
                                key={index}
                                src={image}
                                alt={`Gallery ${index + 1}`}
                                style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // objectFit ile resimleri sığdırıyoruz
                                className='rounded shadow-2xl'
                            />
                        ))}
                    </Image.PreviewGroup>
                </Masonry>
            </Box>
        </div>
    );
};