const CTASection = () => {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4">
            {/* Content Section */}
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-8">

                {/* Text Section */}
                <div className="lg:flex-1">
                    <h2 className="text-4xl font-normal mb-4" style={{ color: '#E89B23' }} >Our people</h2>
                    <p className="text-lg text-white mb-4">
                        Quasi est quaerat. Sit molestiae et. Provident ad dolorem occaecati eos iste. Soluta rerum quidem minus ut molestiae velit error quod. Excepturi quidem expedita molestias quas.
                    </p>
                    <p className="text-base text-white mb-6">
                        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
                    </p>
                    <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-purple-700 transition duration-200">
                        Join our team &rarr;
                    </button>
                </div>

                {/* Image Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:flex-1">
                    <img
                        src="/cta-photo.jpg"
                        alt="People Image 1"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <img
                        src="/cta-photo.jpg"
                        alt="People Image 2"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <img
                        src="/cta-photo.jpg"
                        alt="People Image 3"
                        className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
};

export default CTASection;
