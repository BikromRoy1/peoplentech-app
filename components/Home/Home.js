import Banner from '@/components/Home/Banner/Banner';
import Department from '@/components/Home/Department/Department';
import Course from '../Course/Course';
import SuccessStoryText from '../SuccessStoryText/SuccessStoryText';
import UpcomingCourse from '../UpcomingCourse/UpcomingCourse';
import Certification from './Certification/Certification';
import Featured from './Featured/Featured';
import Numbers from './Numbers/Numbers';

const Home = () => {
  return (
    <>
      <Banner />
      <UpcomingCourse />
      <Numbers />
      <Course />
      <Certification />
      <Department />
      <Featured />
      <SuccessStoryText />
    </>
  );
};

export default Home;
