const Services = () => {
    const services = [
        {
            icon: 'format_paint',
            title: 'Technical Painting',
            description: 'Expert interior finishing and surface preparation with an emphasis on longevity and aesthetic precision.'
        },
        {
            icon: 'water_drop',
            title: 'Fluid Systems',
            description: 'Diagnosis and repair of domestic plumbing fixtures, ensuring efficiency and total reliability.'
        },
        {
            icon: 'architecture',
            title: 'Project Architecture',
            description: 'Strategic planning and material consulting for home improvements and maintenance lifecycles.'
        }
    ];

    return (
        <section className="py-32 border-t border-gray-50" id="services">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-24">
                    <h2 className="text-[13px] font-bold tracking-[0.2em] uppercase text-brand-gray-400 mb-4">Core Services</h2>
                    <p className="text-3xl font-semibold tracking-tight">Essential solutions for modern living.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100 overflow-hidden border border-gray-100">
                    {services.map((service, index) => (
                        <div key={index} className="group bg-white p-12 transition-all duration-500 hover:bg-brand-gray-50">
                            <div className="mb-10 text-brand-black opacity-40 group-hover:opacity-100 transition-opacity">
                                <span className="material-symbols-outlined text-4xl">{service.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-4 tracking-tight">{service.title}</h3>
                            <p className="text-brand-gray-400 leading-relaxed font-medium">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
