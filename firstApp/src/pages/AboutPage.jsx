import React from "react";
import Header from "../components/Header";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <Header />
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          Welcome to our company! We are a team of passionate professionals
          dedicated to delivering the best solutions to our clients. Our mission
          is to create innovative products that improve the lives of people
          around the world.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          With a focus on quality and customer satisfaction, we continuously
          strive to exceed expectations. Our team is composed of experts in
          various fields, working together to bring your ideas to life.
        </p>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          We believe in the power of collaboration and are always looking for
          new opportunities to partner with like-minded organizations. Thank you
          for choosing us to be a part of your journey!
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
