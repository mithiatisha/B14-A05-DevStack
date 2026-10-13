import React from 'react';
import bannerStack from '../assets/banner-stack.png';

const Herosec = () => {
    return (
        <section className="bg-white text-[#334155] px-17 pt-4 pb-12 md:pt-6 md:pb-16">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                   <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                       Build Your Ideal
                     <span className="block whitespace-nowrap bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                          Development Stack
                         </span>
                    </h1>
                    <p className="mt-6 text-[#475569] text-base md:text-lg leading-8 max-w-xl mx-auto md:mx-0">
                        Explore frontend, backend, database, and tooling options,<br/>
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="mt-8 flex flex-row items-center justify-center gap-3 md:justify-start">
                      <button className="flex h-[44px] w-[170px] shrink-0 items-center justify-center rounded-lg bg-gradient-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] text-sm font-semibold text-white shadow-lg shadow-pink-500/25 transition-all duration-300 hover:scale-105">
                         Explore Technologies
                      </button>

                      <button className="flex h-[44px] w-[170px] shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] text-sm font-semibold text-[#334155] transition duration-300 hover:border-[#D81B7E] hover:text-[#D81B7E]">
                              Learn More
                      </button>
                    </div>
                </div>

               <div className="flex w-full flex-1 justify-center md:ml-10">
                  <img
                    src={bannerStack}
                    alt="DevStack technology illustration"
                    className="block h-auto w-full max-w-[400px] object-contain sm:max-w-sm md:max-w-lg"/>
                </div>
            </div>
        </section>
    );
};

export default Herosec;