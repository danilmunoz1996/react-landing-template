import React from "react";

interface MainSectionProps {
    title: string;
    description: string;
    imageUrl: string;
}

const MainSection: React.FC<MainSectionProps> = ({ title, description, imageUrl }) => {

    return (
      <div className="flex  xl:justify-center w-full pt-2 overflow-hidden sm:pt-12 lg:relative lg:py-24 xl:py-36 2xl:py-48">
        <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
            <div className="relative z-[1]">
                <a href="/">Brand Icon</a>
                <div className="mt-14">
                    <div className="mt-6 sm:max-w-xl">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-9xl">{title}</h1>
                        <h2 className="mt-6 text-lg text-gray-500 sm:text-xl">{description}</h2>
                    </div>
                    <div className="mt-10 space-y-4">
    
                    </div>
                </div>
            </div>
        </div>
        <div className="sm:pl-6">
            <div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-5 lg:right-12 lg:w-1/2">
                <div className="absolute lg:h-[550px] pl-4 ml-auto sm:max-w-3xl sm:px-0 lg:h-full lg:max-w-none lg:flex lg:items-center xl:pl-12">
                    <img className="w-full rounded-l-3xl lg:w-full lg:h-auto 2xl:max-w-none 2xl:rounded-3xl" src={imageUrl} alt="" />
                </div>
            </div>
        </div>
      </div>
      )
}

export default MainSection;