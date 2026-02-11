import { useState, useEffect } from 'react';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['services', 'process', 'contact'];
            let current = '';

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                    }
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 w-full z-50 border-b border-gray-100 bg-white/80 backdrop-blur-md">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center">
                    <a className="text-lg font-bold tracking-tight hover:opacity-70 transition-opacity" href="#">
                        Begley Handyman Service
                    </a>
                </div>
                <div className="hidden md:flex items-center space-x-10">
                    {[
                        { name: 'Services', id: 'services' },
                        { name: 'Process', id: 'process' },
                        { name: 'Contact', id: 'contact' },
                    ].map((item) => (
                        <a
                            key={item.id}
                            className={`text-[13px] font-medium transition-colors cursor-pointer ${activeSection === item.id ? 'text-brand-black' : 'text-brand-gray-400 hover:text-brand-black'
                                }`}
                            href={`#${item.id}`}
                            onClick={(e) => handleClick(e, item.id)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <button
                        onClick={(e) => handleClick(e, 'contact')}
                        className="bg-brand-black text-white text-[13px] px-4 py-1.5 rounded-full font-medium hover:bg-brand-gray-800 transition-all cursor-pointer"
                    >
                        Book Now
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
