import React from 'react'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';

import MainSection from './components/Sections/MainSection'
import SpecsSection from './components/Sections/SpecsSection'
import CustomerTestimonials from './components/Sections/CustomerTestimonials'
import NewsletterSubscription from './components/Sections/NewsletterSubscription'

import genericTestimonialImage from './assets/images/generic-man-profile-image.jpg'

import data from './data.json'
// import data from './copyData.json'

const App: React.FC = () => {

  const specsData = [
    {
      title: data.firstSpecTitle,
      content: data.firstSpecContent,
      imageUrl: data.firstSpecImg
    },
    {
      title: data.secondSpecTitle,
      content: data.secondSpecContent,
      imageUrl: data.secondSpecImg
    },
    {
      title: data.thirdSpecTitle,
      content: data.thirdSpecContent,
      imageUrl: data.thirdSpecImg
    }
  ];



  const testimonialsData = [
    {
      name: data.firstTestimonialName,
      content: data.firstTestimonialContent || '',
      imageUrl: genericTestimonialImage || undefined
    },
    {
      name: data.secondTestimonialName,
      content: data.secondTestimonialContent || '',
      imageUrl: genericTestimonialImage || undefined
    },
    {
      name: data.thirdTestimonialName,
      content: data.thirdTestimonialContent || '',
      imageUrl: genericTestimonialImage || undefined
    }
  ];

  return (
    <div className='container-fluid'>
        <MainSection
          title={data.brandName}
          description={data.brandDescription}
          imageUrl={data.brandImage}
        />
        <SpecsSection
          specs={specsData}
        />
        <CustomerTestimonials
          title={data.customersTestimonialsTitle}
          testimonials={testimonialsData}
        />
        <NewsletterSubscription />
    </div>
  );
}

export default App
