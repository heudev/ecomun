"use client";
import Image from 'next/image';

export default function Navbar() {
    const handleScroll = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    return (
        <div className="navbar bg-[#0f216d] fixed z-10 lg:px-36">
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
                        <li className='glass rounded-lg bg-transparen'><a onClick={() => handleScroll('committees')}>Committees</a></li>
                        <li className='glass rounded-lg bg-transparent'><a onClick={() => handleScroll('schedule')}>Schedule</a></li>
                        {/* <li className='glass rounded-lg bg-transparent'><a onClick={() => handleScroll('fees')}>Fees</a></li> */}
                        <li className='glass rounded-lg bg-transparent'><a onClick={() => handleScroll('location')}>Location</a></li>
                        {/*   <li className='bg-[#fd7706] glass rounded-lg !bg-transparent'><a onClick={() => handleScroll('team')}>Our Team</a></li> */}
                    </ul>
                </div>
                <Image src="/images/logo/ecomun.png" alt="ecomun" className='ms-2' width={180} height={100} />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><a onClick={() => handleScroll('committees')} className='!bg-transparent'>Committees</a></li>
                    <li><a onClick={() => handleScroll('schedule')} className='!bg-transparent'>Schedule</a></li>
                    {/* <li><a onClick={() => handleScroll('fees')} className='!bg-transparent'>Fees</a></li> */}
                    <li><a onClick={() => handleScroll('location')} className='!bg-transparent'>Location</a></li>
                    {/* <li><a onClick={() => handleScroll('team')} className='!bg-transparent'>Our Team</a></li> */}
                </ul>
            </div>
        </div>
    );
};