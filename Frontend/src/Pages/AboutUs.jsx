import React from "react";
import { FaCarAlt, FaBiking, FaLock, FaClock, FaRocket } from "react-icons/fa";

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-teal-200 transition duration-300">
    <div className="text-3xl text-cyan-500 mb-4">
      <Icon />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen px-6 py-12 font-sans">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Intro */}
        <section className="max-w-5xl mx-auto w-full text-center">
          <h1 className="text-5xl font-extrabold mb-4 text-gray-900">
            About <span className="text-cyan-500">RentARide</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A smarter way to rent vehicles. Get the freedom to move—without the
            hassle of ownership.
          </p>
        </section>

        {/* Who We Are */}
        <section className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="https://media.istockphoto.com/id/2148823639/photo/handing-over-the-car-keys.jpg?s=2048x2048&w=is&k=20&c=J5YNCJ0B_s7u-f4n0MgNDsshSIO5ILoVAfJNPrbWljc="
              alt="Vehicle rental"
              className="rounded-xl shadow-md max-w-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-justify">
              RentARide is your go-to platform for car and bike rentals. Whether
              it’s a quick trip across the city or an extended weekend getaway,
              we’ve built a seamless experience that puts convenience and
              flexibility first.
            </p>
            <p className="text-gray-700 text-justify">
              With a growing fleet and user-first design, RideFlex is simplifying
              urban mobility for everyone.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-5xl mx-auto w-full">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Why People Choose Us
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={FaCarAlt}
              title="Diverse Vehicles"
              description="Choose from a wide selection of cars, scooters, and bikes."
            />
            <FeatureCard
              icon={FaLock}
              title="Secure Rentals"
              description="Verified drivers and insured rides for your safety."
            />
            <FeatureCard
              icon={FaClock}
              title="Flexible Hours"
              description="Rent by the hour or day—no hidden fees, no stress."
            />
            <FeatureCard
              icon={FaBiking}
              title="Eco-friendly Options"
              description="Electric bikes and hybrid cars for a greener ride."
            />
            <FeatureCard
              icon={FaRocket}
              title="Fast Bookings"
              description="Instant access to vehicles with just a few clicks."
            />
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-teal-200 transition duration-300">
            <h3 className="text-2xl font-semibold text-cyan-500 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To revolutionize how people move by offering a smarter, more
              flexible alternative to owning a vehicle.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-teal-200 transition duration-300">
            <h3 className="text-2xl font-semibold text-cyan-500 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become the leading rental mobility platform across cities,
              built on trust, innovation, and great service.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section className="max-w-5xl mx-auto w-full text-center space-y-6">
          <div>
            <h3 className="text-4xl font-bold text-gray-900 mb-3">Get in Touch</h3>
            <p className="text-gray-600">
              📧 Email us at{" "}
              <a
                href="mailto:support@rideflex.com"
                className="text-cyan-500 underline"
              >
                support@rentaride.com
              </a>
            </p>
            <p className="text-gray-600">
              📞 Call us at{" "}
              <a href="tel:01-7773456" className="text-cyan-500 underline">
                01-7773456
              </a>
            </p>
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <iframe
              title="RideFlex Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6878941860123!2d85.3223907749215!3d27.665126427353346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19da195c93db%3A0x2266d54e0b0669e6!2sNesfield%20International%20College!5e0!3m2!1sen!2snp!4v1753982008897!5m2!1sen!2snp"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

      </div>
    </div>

  );
};

export default AboutUs;
