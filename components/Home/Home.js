import Banner from '@/components/Home/Banner/Banner';
import Department from '@/components/Home/Department/Department';
import Course from '../Course/Course';
import Certification from './Certification/Certification';
import Featured from './Featured/Featured';
import Numbers from './Numbers/Numbers';

const Home = () => {
  return (
    <>
      <Banner />
      <Course />
      <Numbers />
      <Department />
      <Certification />
      <Featured />
    </>
  );
};

export default Home;
