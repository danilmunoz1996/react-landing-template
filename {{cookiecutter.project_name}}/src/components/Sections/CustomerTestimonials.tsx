import React from 'react';
import Testimonial from './Testimonial';

interface TestimonialData {
    name: string;
    content: string;
    image?: string;
}

interface CustomerTestimonialsProps {
    title: string;
    testimonials: TestimonialData[];
}

const CustomerTestimonials: React.FC<CustomerTestimonialsProps> = ({ title, testimonials }) => {
    return (
        <div>
            <div className="bg-emerald-100 rounded lg:pt-12 lg:pb-14 lg:h-full">
            <h1 className="lg:pb-20 sm:pb-20 text-4xl font-bold tracking-tight sm:text-6xl md:text-6xl lg:text-6xl">{title}</h1>
                {testimonials.map((testimonial, index) => 
                    <Testimonial
                        key={index}
                        name={testimonial.name}
                        content={testimonial.content}
                        image={testimonial.image}
                        alignment={index % 2 === 0 ? 'left' : 'right'} // Añade un alineamiento basado en si el índice es par o impar
                    />
                )}
            </div>
        </div>
    );
}

export default CustomerTestimonials;
