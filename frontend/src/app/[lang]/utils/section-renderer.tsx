import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Donations from '../components/Donations';
import Pricing from '../components/Pricing';
import Email from '../components/Email';
import LiveStream from '../components/LiveStream';
import CustomRichText from '../components/CustomRichText';
import Carousel from '/nextjs-image-gallery/components/Carousel';
export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case 'sections.hero':
      return <Hero key={index} data={section} />;
    case 'sections.features':
      return <Features key={index} data={section} />;
    case 'sections.testimonials-group':
      return <Testimonials key={index} data={section} />;
    case 'sections.donations-group':
      return <Donations key={index} data={section} />;
    case 'sections.pricing':
      return <Pricing key={index} data={section} />;
    case 'sections.live-stream':
      return <LiveStream key={index} data={section} />;
    case 'sections.custom-rich-text':
      return <CustomRichText key={index} data={section} />;
    case 'sections.lead-form':
      return <Email key={index} data={section} />;
    // case 'sections.carousel':
    //   return <Carousel key={index} data={section} />;
    default:
      return null;
  }
}
