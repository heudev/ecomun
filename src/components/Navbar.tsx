"use client";
import Image from 'next/image';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { Suspense } from "react";

function ScrollHandler() {
    const searchParams = useSearchParams();

    useEffect(() => {
        if (searchParams) {
            const targetId = searchParams.get('id');
            if (targetId) {
                const element = document.getElementById(targetId);
                if (element) {
                    const navbarHeight = 64; // height of fixed navbar (16 * 4 = 64px)
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    window.scrollTo({
                        top: elementPosition - navbarHeight,
                        behavior: 'smooth'
                    });
                }
            }
        }
    }, [searchParams]);

    return null;
}

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleScroll = async (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();

        if (targetId === 'team') {
            router.push('/team');
            return;
        }

        if (pathname !== '/') {
            router.push(`/?id=${targetId}`);
        } else {
            const element = document.getElementById(targetId);
            if (element) {
                const navbarHeight = 64; // height of fixed navbar
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                    top: elementPosition - navbarHeight,
                    behavior: 'smooth'
                });
            }
        }
    };

    return (
        <>
            <Suspense>
                <ScrollHandler />
            </Suspense>
            <div className="navbar bg-[#0f216d] fixed z-10 lg:px-36 h-16">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow text-white bg-[#0f216d] gap-1">
                            <li className='rounded-lg bg-transparen'><a onClick={(e) => handleScroll(e, 'committees')}>Committees</a></li>
                            <li className='rounded-lg bg-transparent'><a onClick={(e) => handleScroll(e, 'schedule')}>Schedule</a></li>
                            <li className='rounded-lg bg-transparent'><a onClick={(e) => handleScroll(e, 'fees')}>Fees</a></li>
                            <li className='rounded-lg bg-transparent'><a onClick={(e) => handleScroll(e, 'team')}>Team</a></li>
                            <li className='rounded-lg bg-transparent'><a onClick={(e) => handleScroll(e, 'faq')}>FAQ</a></li>
                            <li className='rounded-lg bg-transparent'><a onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
                        </ul>
                    </div>
                    <a href="/">
                        <Image src="/images/logo/ecomun.png" alt="ecomun" className='ms-2' width={180} height={100} />
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex w-full">
                    <ul className="menu menu-horizontal px-1 text-white">
                        <li><a onClick={(e) => handleScroll(e, 'committees')} className='!bg-transparent'>Committees</a></li>
                        <li><a onClick={(e) => handleScroll(e, 'schedule')} className='!bg-transparent'>Schedule</a></li>
                        <li><a onClick={(e) => handleScroll(e, 'fees')} className='!bg-transparent'>Fees</a></li>
                        <li><a onClick={(e) => handleScroll(e, 'team')} className='!bg-transparent'>Team</a></li>
                        <li><a onClick={(e) => handleScroll(e, 'faq')} className='!bg-transparent'>FAQ</a></li>
                        <li><a onClick={(e) => handleScroll(e, 'contact')} className='!bg-transparent'>Contact</a></li>
                    </ul>
                </div>
            </div>
        </>
    );
};