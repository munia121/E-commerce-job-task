/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="text-center space-y-3 mt-20">
            <p className="text-4xl font-bold">Hello EveryOne !</p>
            <p className="lg:w-[900px] mx-auto ">Welcome to ShopePlace Our mission is to ignite a passion for reading by offering a carefully curated selection of books for all ages and interests. With a commitment to personalized service and community engagement, we strive to create a welcoming environment where every reader feels at home. Discover the joy of storytelling with us.</p>
            <p className="font-bold">Location: Dhaka, Mirpur</p>
            <Link className="btn bg-gradient-to-l from-blue-400 to-purple-600">Let's Start</Link>
        </div>
    );
};

export default AboutUs;