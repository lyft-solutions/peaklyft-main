"use client";
import CaseStudies from "@/src/components/common/It-saas-services/CaseStudies";
import EventsSlider from "@/src/components/common/It-saas-services/EventsSection/EventsSlider";
import IndustrySection from "@/src/components/common/It-saas-services/IndustrySection";
import PlatformSection from "@/src/components/common/It-saas-services/PlatformSection";
import TestimonialHeadings from "@/src/components/common/It-saas-services/TestimonialHeadings";
import TestimonialSlider from "@/src/components/common/It-saas-services/TestimonialSlider";
import TrustedBrandsSlider from "@/src/components/common/It-saas-services/TrustedBrandsSlider";
import OnboardingSection from "@/src/components/common/SalesSection/SalesSection";
import { trustedBrands } from "@/utils/brandData";
import { eventsData } from "@/utils/eventData";
import { saasData, testimonialText } from "@/utils/ItData";
import { onboardingLeft } from "@/utils/sectionsData";
import { testimonialRightImage, testimonialsData } from "@/utils/testimonialData";

export default function SaasItServicesPage() {
  return (
    <>
    <div className="px-2.5">
      <IndustrySection data={saasData} />
      <TrustedBrandsSlider title={trustedBrands.title} logos={trustedBrands.logo} />
   
      <PlatformSection /> 
   
          <OnboardingSection
  title={onboardingLeft.title}
  subtitle={onboardingLeft.subtitle}
  taglines={onboardingLeft.taglines}
  desc={onboardingLeft.desc}
  points={onboardingLeft.points}  
  cards={onboardingLeft.cards}
  buttonText={onboardingLeft.buttonText}
  variant="left"
/>

      <OnboardingSection
  title={onboardingLeft.title}
  subtitle={onboardingLeft.subtitle}
  taglines={onboardingLeft.taglines}
  desc={onboardingLeft.desc}
  points={onboardingLeft.points}  
  cards={onboardingLeft.cards}
  buttonText={onboardingLeft.buttonText}
  variant="right"
/>
{/*  
      <OnboardingSection
  title={onboardingLeft.title}
  subtitle={onboardingLeft.subtitle}
  taglines={onboardingLeft.taglines}
  desc={onboardingLeft.desc}
  points={onboardingLeft.points}  
  cards={onboardingLeft.cards}
  buttonText={onboardingLeft.buttonText}
  variant="left"
/>

      <OnboardingSection
  title={onboardingLeft.title}
  subtitle={onboardingLeft.subtitle}
  taglines={onboardingLeft.taglines}
  desc={onboardingLeft.desc}
  points={onboardingLeft.points}  
  cards={onboardingLeft.cards}
  buttonText={onboardingLeft.buttonText}
  variant="right"
/> */}
 
      {/* <OnboardingSection
  title={onboardingLeft.title}
  subtitle={onboardingLeft.subtitle}
  taglines={onboardingLeft.taglines}
  desc={onboardingLeft.desc}
  points={onboardingLeft.points}   
  cards={onboardingLeft.cards}
  buttonText={onboardingLeft.buttonText}
  variant="left"
/>

      <OnboardingSection
  title={onboardingLeft.title}
  subtitle={onboardingLeft.subtitle}
  taglines={onboardingLeft.taglines}
  desc={onboardingLeft.desc}
  points={onboardingLeft.points}   
  cards={onboardingLeft.cards}
  buttonText={onboardingLeft.buttonText}
  variant="right"
/> */}
 

 
        <TestimonialHeadings
        heading1={testimonialText.heading1}
        heading2={testimonialText.heading2}
      />

      <TestimonialSlider
        testimonials={testimonialsData}
        rightImage={testimonialRightImage}
      />

       <EventsSlider events={eventsData} />  
             <CaseStudies/>

</div>
    </>
  );
}
