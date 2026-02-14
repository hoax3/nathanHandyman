const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative pt-48 pb-32 overflow-hidden hero-gradient">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <div className="inline-flex items-center px-3 py-1 mb-8 rounded-full bg-brand-gray-100 text-[12px] font-medium tracking-wide uppercase text-brand-gray-800">
                    Precision Craftsmanship
                </div>
                <h1 className="text-6xl md:text-[80px] font-bold tracking-tighter leading-[1.05] mb-8 text-brand-black">
                    Begley Handyman Service
                </h1>
                <p className="text-xl md:text-2xl text-brand-gray-400 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                    High-end home maintenance and specialized repairs executed with technical precision.
                    <span className="block mt-2 text-lg md:text-xl">Serving Oxnard, CA.</span>
                </p>
                <div className="flex justify-center">
                    <button
                        onClick={scrollToContact}
                        className="bg-brand-black text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-brand-gray-800 transition-all transform hover:scale-[1.02] active:scale-100 cursor-pointer"
                    >
                        Get a Precise Estimate
                    </button>
                </div>
            </div>
        </section >
    );
};
export default Hero;
