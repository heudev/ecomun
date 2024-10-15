"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Hedef tarih: 6 Şubat
        const targetDate = new Date("2025-02-06T00:00:00");

        const calculateTimeLeft = () => {
            const currentDate = new Date();
            const difference = targetDate.getTime() - currentDate.getTime();

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                const minutes = Math.floor((difference / 1000 / 60) % 60);
                const seconds = Math.floor((difference / 1000) % 60);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                // Zaman dolduğunda her şeyi 0 yap
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // İlk hesaplama ve her saniyede bir hesaplama yapmak için setInterval
        const interval = setInterval(calculateTimeLeft, 1000);

        // Bileşen unmount olduğunda setInterval'i temizleyelim
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    {/* Pad days with leading zeros to ensure it's 3 digits */}
                    <span style={{ "--value": timeLeft.days.toString().padStart(3, '0') } as React.CSSProperties}></span>
                </span>
                days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.hours } as React.CSSProperties}></span>
                </span>
                hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.minutes } as React.CSSProperties}></span>
                </span>
                min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": timeLeft.seconds } as React.CSSProperties}></span>
                </span>
                sec
            </div>

        </div>
    );
};

export default CountdownTimer;
