const Footer = () => {
    return (
        <footer className="py-20 border-t border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <div className="max-w-xs">
                        <p className="font-bold tracking-tight text-lg mb-6">Begley Handyman Service</p>
                        <p className="text-brand-gray-400 text-sm leading-relaxed font-medium">
                            Redefining home maintenance through precision, transparency, and high-end craftsmanship.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-16">
                        <div>
                            <p className="text-[12px] font-bold uppercase tracking-widest text-brand-gray-400 mb-6">Service</p>
                            <ul className="space-y-4 text-sm font-medium">
                                <li><a className="hover:text-brand-gray-400 transition-colors" href="#">Interiors</a></li>
                                <li><a className="hover:text-brand-gray-400 transition-colors" href="#">Repairs</a></li>
                                <li><a className="hover:text-brand-gray-400 transition-colors" href="#">Estimates</a></li>
                            </ul>
                        </div>
                        {/* <div>
                            <p className="text-[12px] font-bold uppercase tracking-widest text-brand-gray-400 mb-6">Connect</p>
                            <ul className="space-y-4 text-sm font-medium">
                                <li><a className="hover:text-brand-gray-400 transition-colors" href="#">Instagram</a></li>
                                <li><a className="hover:text-brand-gray-400 transition-colors" href="#">LinkedIn</a></li>
                                <li><a className="hover:text-brand-gray-400 transition-colors" href="#">Contact</a></li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-50 text-[12px] text-brand-gray-400 font-medium">
                    <p>© 2024 Begley Handyman Service. Built for longevity.</p>
                    {/* <div className="flex space-x-8 mt-4 md:mt-0">
                        <a className="hover:text-brand-black" href="#">Privacy</a>
                        <a className="hover:text-brand-black" href="#">Terms</a>
                        <a className="hover:text-brand-black" href="#">Licensing</a>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
