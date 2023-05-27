import React from "react";

import "./SectionItem.css";

interface SectionItemProps {
    imageOnRight: boolean;
    title: string;
    content: string;
    imageUrl?: string;
}

const SectionItem: React.FC<SectionItemProps> = ({ imageOnRight, title, content, imageUrl }) => {

    const imgClassLeft = "rounded-l-3xl lg:w-auto 2xl:max-w-none 2xl:rounded-3xl";
    const imgClassRight = "rounded-r-3xl lg:w-auto 2xl:max-w-none 2xl:rounded-3xl";

    return (
      <div className={`text-center section ${imageOnRight ? 'image-right' : 'image-left'}`}>
        <div className="h-full pr-4 align-middle mt-6 sm:max-w-xl h-full">
          <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-5xl lg:text-5xl">{title}</h1>
          <h2 className="mt-6 text-lg text-gray-500 sm:text-xl text-left">{content}</h2>
        </div>
        <div className="flex w-full sm:w-3/4 md:w-2/4 lg:w-3/4">
          <img className={`${imageOnRight ? imgClassRight : imgClassLeft} lg:w-1/2`} src={imageUrl} alt={title} />
        </div>
      </div>
      )
}

export default SectionItem;