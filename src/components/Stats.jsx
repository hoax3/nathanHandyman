const Stats = () => {
    const stats = [
        { value: '10+', label: 'Years of Experience' },
        { value: '100%', label: 'Satisfaction Rate' },
        { value: '2hr', label: 'Response Time' },
    ];

    return (
        <section className="py-24 bg-brand-gray-50" id="process">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 text-center">
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <p className="text-4xl font-bold tracking-tighter mb-2">{stat.value}</p>
                            <p className="text-xs uppercase tracking-widest font-bold text-brand-gray-400">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
