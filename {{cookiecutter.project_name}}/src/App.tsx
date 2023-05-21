import React from 'react'
import './App.css'

import MainSection from './components/Sections/MainSection'
import SpecsSection from './components/Sections/SpecsSection'
import CustomerTestimonials from './components/Sections/CustomerTestimonials'


import aestheticImage from './assets/images/aesthetic-image.jpg'
import firstSpecItemImage from './assets/images/aesthetic-mountain-image.jpg'
import secondSpecItemImage from './assets/images/generic-image.jpeg'
import thirdSpecItemImage from './assets/images/aesthetic-pattern-image.jpg'

import genericTestimonialImage from './assets/images/generic-man-profile-image.jpg'

import data from './data.json'

const App: React.FC = () => {

  const specsData = data.specsData.map(spec => ({
    ...spec,
    imageUrl: {
      'First Spec Item': firstSpecItemImage,
      'Second Spec Item': secondSpecItemImage,
      'Third Spec Item': thirdSpecItemImage,
    }[spec.title] || '',
  }));

  const testimonialsData = data.testimonialsData.map(testimonial => ({
    ...testimonial,
    image: genericTestimonialImage
  }));

  return (
    <>
      <div className="box-border w-full inline">
        <div className="">
            <MainSection
              title={data.brandName}
              description={data.brandDescription}
              imageUrl={aestheticImage}
            />
            <SpecsSection
              specs={specsData}
            />
            <CustomerTestimonials
              title={data.customersTestimonialsTitle}
              testimonials={testimonialsData}
            />
        </div>
      </div>
    </>
  );
}

export default App
