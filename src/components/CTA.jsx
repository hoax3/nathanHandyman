const CTA = () => {
    return (
        <section className="py-40 bg-white" id="contact">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold tracking-tight mb-8">Ready to elevate your home?</h2>
                <p className="text-brand-gray-400 text-lg mb-12 font-medium">
                    Experience the difference of a professional, tech-forward handyman service.
                </p>
                <a
                    className="inline-flex items-center gap-2 text-brand-black font-semibold border-b-2 border-brand-black pb-1 hover:opacity-60 transition-opacity"
                    href="mailto:hello@begleyhandyman.com"
                >
                    hello@begleyhandyman.com
                    <span className="material-symbols-outlined !text-[18px]">arrow_outward</span>
                </a>
            </div>
        </section>
    );
};

export default CTA;
