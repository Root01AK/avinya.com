import React, { ReactNode } from 'react';


interface RoundedHexagonProps {
    children: ReactNode;
    isMain?: boolean;
}

const RoundedHexagon = ({ children, isMain = false }: RoundedHexagonProps) => (
    <div className={isMain ? "clientSection_mainHexWrapper" : "clientSection_hexWrapper"}>
        <svg viewBox="0 0 100 115" className="clientSection_svgShape" preserveAspectRatio="none">
            <path
                d="M50 5 L90 28 L90 75 L50 98 L10 75 L10 28 Z"
                strokeWidth="8"
                strokeLinejoin="round"
                stroke="currentColor"
                className="clientSection_hexPath"
            />
        </svg>
        <div className="clientSection_content">
            {children}
        </div>
    </div>
);

export default function ClientSection() {
    const leftClients = [
        { name: 'ComfortInn', logo: '/clients/comfortinn.png' },
        { name: 'Hilton', logo: '/clients/Hilton.png' },
        { name: 'HolidayIn', logo: '/clients/Holidayinn.png' },
        { name: 'Hyatt', logo: '/clients/Hyatt.png' },
        { name: 'HyattHouse', logo: '/clients/hyatthouse.jpg' },
        { name: 'Kizza Pizza', logo: '/clients/Kizza.png' },
        { name: 'Sangam', logo: '/clients/Sangam.png' },
        { name: 'UPS', logo: '/clients/ups.png' },
        { name: 'StarBucks', logo: '/clients/starbucks.png' },
    ];

    const rightClients = [
        { name: 'UPS Store', logo: '/clients/upsstore.png' },
        { name: 'TuffPuff', logo: '/clients/tuffpufflogo.png' },
        { name: 'Hoc', logo: '/clients/hoclogo.png' },
        { name: 'BakedCrust', logo: '/clients/backedcrustlogo.png' },
        { name: 'ClothMentor', logo: '/clients/clothmentorlogo.png' },
        { name: 'Dumont', logo: '/clients/dumontlogo.avif' },
        { name: 'IslandRiddim', logo: '/clients/IslandRiddimLogo.png' },
        { name: 'TheAlley', logo: '/clients/thealleylogo.png' },
    ];

    return (
        <section className="clientSection_container">
            <div className="clientSection_header">
                <p className="clientSection_topLabel">Our Clients</p>
                <h1 className="clientSection_title">Trusted Partners in Construction Excellence</h1>
                <p className="clientSection_description">
                   At Avinya Construction Management, our client works reflect our commitment to quality, precision, 
                   and timely execution. We have successfully managed and delivered a wide range of residential, commercial, and infrastructure projects, meeting the highest standards of safety, durability, and design.
                </p>
            </div>

            <div className="clientSection_gridWrapper">
                <div className="clientSection_sideGrid">
                    {leftClients.map((client, i) => (
                        <RoundedHexagon key={i}>
                            <img src={client.logo} alt={client.name} className="clientSection_logo" />
                        </RoundedHexagon>
                    ))}
                </div>

                <div className="clientSection_centerArea">
                    <RoundedHexagon isMain={true}>
                        <div className="clientSection_mainLogoContent">
                            {/* Add your logo image here */}
                            <img
                                src="/logo.png"
                                alt="Avinya Logo"
                                className="clientSection_centerImg"
                            />
                        </div>
                    </RoundedHexagon>
                </div>

                <div className="clientSection_sideGrid">
                    {rightClients.map((client, i) => (
                        <RoundedHexagon key={i}>
                            <img src={client.logo} alt={client.name} className="clientSection_logo" />
                        </RoundedHexagon>
                    ))}
                </div>
            </div>
        </section>
    );
}