import Banner from '@/components/Home/Banner/Banner';
import Department from '@/components/Home/Department/Department';
import Course from '../Course/Course';
import Numbers from './Numbers/Numbers';

const Home = () => {
  return (
    <>
      <Banner />
      <Department />
      <Numbers />
      <Course />
    </>
  );
};

export default Home;
