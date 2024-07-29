// app/about/page.js
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg">
          This is the about page.
        </p>
      </div>
    </>
  );
};

export default About;
