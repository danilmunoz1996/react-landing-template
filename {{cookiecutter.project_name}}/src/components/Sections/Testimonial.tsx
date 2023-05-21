import React from 'react';

interface TestimonialProps {
    name: string;
    content: string;
    image?: string;
    alignment: 'left' | 'right';
}

const Testimonial: React.FC<TestimonialProps> = ({ name, content, image, alignment }) => {
    const alignmentStyles = alignment === 'left' 
        ? 'md:mr-auto md:ml-0 justify-between md:ml-8' 
        : 'md:ml-auto md:mr-0 justify-between flex-row-reverse md:mr-8';

    return (
        <div className={`mr-4 ml-4 rounded-full bg-gray-500 md:w-1/2 p-4 pb-8 my-4 md:p-8 ${alignmentStyles}`}>
            <div className={`flex items-center space-x-4 text-${alignment}`}>
                {alignment === 'left' && image && <img className="w-16 h-16 rounded-full" src={image} alt={name} />}
                <div>
                    <h2 className="text-lg text-white font-semibold">{name}</h2>
                    <p className="text-sm text-white">{content}</p>
                </div>
                {alignment === 'right' && image && <img className="w-16 h-16 rounded-full" src={image} alt={name} />}
            </div>
        </div>
    );
}

export default Testimonial;
