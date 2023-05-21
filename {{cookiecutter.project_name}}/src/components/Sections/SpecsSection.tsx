import React from "react";

import SectionItem from "./SectionItem";

interface specItem {
    title: string;
    content: string;
    imageUrl?: string;
}

interface SpecsSectionProps {
    specs: specItem[];
}

const SpecsSection: React.FC<SpecsSectionProps> = ({ specs }) => {
    return (
        <>
            {
                specs.map((spec, index) => {
                    return (
                        <SectionItem
                            key={index}
                            imageOnRight={index % 2 === 0 ? true : false}
                            title={spec.title}
                            content={spec.content}
                            imageUrl={spec.imageUrl}
                        />
                    )
                })
            }
        </>
      )
}

export default SpecsSection;