import PageBanner from '@/components/PageBanner/PageBanner';
import SisterConcerns from '@/components/SisterConcerns/SisterConcerns';
import FounderMs from './FounderMs/FounderMs';
import OurGoal from './OurGoal/OurGoal';

const About = () => {
  return (
    <div>
      <PageBanner title='Our Company' subtitle='About' />
      <OurGoal />
      <FounderMs />
      <SisterConcerns />
    </div>
  );
};

export default About;
