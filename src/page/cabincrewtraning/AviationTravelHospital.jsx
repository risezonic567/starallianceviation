import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function AviationTravelHospital() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="font-sans text-gray-800">
            {/* SEO */}
            <Helmet>
                <title>Aviation, Hospitality & Travel Management Course.</title>
                <meta
                    name="description"
                    content="Build a career in aviation, travel & hospitality with industry-focused training and practical exposure."
                />
                <link
                    rel="canonical"
                    href="https://www.starallianceaviation.com/hospitality-aviation-mangement"
                />
            </Helmet>

            {/* Hero Section */}
            <section
                style={{
                    backgroundImage: `url(https://github.com/Ashish-Kaintura/starallianceaviation-/raw/main/src/img/CabinCrew/Aviation%2C%20Hospitality%20%26%20Travel%20Management%20Course/Aviation%2C%20Hospitality%20and%20Travel%20Management1.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="bg-[#2c3756] text-white flex items-center justify-center p-8 h-[190px] sm:h-[520px] 2xl:h-[700px] relative md:mt-0 mt-[72px]"
            >
                <div className="absolute inset-0 bg-black/25"></div>
                <div className="relative z-10 max-w-6xl w-full mt-4 sm:mt-8">
                    <div className="sm:visible invisible text-white p-4 sm:p-5 max-w-xl">
                        <h1 className="text-3xl sm:text-3xl font-bold text-white font-heading animate-fade-in-down">
                            Certificate Course in Aviation, Hospitality and Travel Management

                        </h1>
                        <h2 className="mt-2 text-xs sm:text-sm text-white font-heading">
                            <Link to="/" className="hover:underline text-blue-300">
                                Star Alliance Aviation Academy /
                            </Link>{" "}

                        </h2>
                        <Link
                            to="/make-appointment"
                            className="inline-block mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-Secondary text-white font-semibold rounded-full shadow hover:bg-gray-100 transition"
                        >
                            Make an Appointment
                        </Link>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="flex justify-center px-6 py-16 border-b border-gray-200 sm:mt-32 mt-12">
                <div className="flex flex-col lg:flex-row max-w-6xl w-full gap-10 items-center">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://i.postimg.cc/Xq5dCNCH/Aviation_Hospitality_and_Travel_Management_500_500.jpg"
                            alt="Aviation Hospitality Travel Management"
                            className="w-full max-w-md mx-auto rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                        />
                    </div>

                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl font-bold text-primary mb-4">
                            About the Course
                        </h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            The Aviation Management & Operations Course offered at Star Alliance Aviation Academy strives to provide students with solid basics to begin working in an aviation career path. The course covers the main parts of aviation operations, ground handling, air traffic awareness and management, flight safety, and passenger management.

                            <br />
                            <br />
                            Students learn the functions of the aviation ecosystem under the guidance of experienced instructors and recognized facilitators from the industry, from airport coordination to flight dispatching and ensuring compliance with safety regulations.

                            <br />
                            <br />
                            At Star Alliance, our previous industry background allows us to differentiate our educational approach from traditional teaching. Students are exposed to aviation simulations, airport handling modules, and airline procedures, which assists in their preparation for productive operational delivery in compliance with Directorate General of Civil Aviation (DGCA) standards.

                            <br />
                            <br />
                            The course also includes the necessary foundations in communications, self-discipline, and a professional attitude to assist students in integrating into a domestic or international airline.

                            <br />
                            <br />
                            By the end of the skiing management & operations course, students will transition confidently into their first employment experience as a separate airport operations executive, airline ground staff, or aviation coordinator with strong technical and people skills.

                        </p>
                    </div>
                </div>
            </section>

            {/* Modules Section */}
            <section className="max-w-6xl mx-auto px-6 py-14">
                <h2 className="text-3xl font-bold text-primary mb-6">Modules Covered</h2>
                <div className="grid md:grid-cols-2 gap-4 text-gray-700">
                    {[
                        {
                            title: "Aviation Operations",
                            desc: "An understanding of flight, the role of airports, and ground operational procedures.",
                        },
                        {
                            title: "Hospitality & Guest Services",
                            desc: "understanding of travelling etiquette, guest service skills, and professionalism in appearance.",
                        },
                        {
                            title: "Travel & Tourism Management",
                            desc: "Knowledge of ticketing and reservation systems, as well as how to build a travel itinerary.",
                        },
                        {
                            title: "Customer Service Excellence",
                            desc: "understanding how to deal with passengers and/or clients.",
                        },
                        {
                            title: "Communication & Personality Development",
                            desc: "Competence in fluency in English, confidence, and ability to work as a team.",
                        },
                    ].map((module, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 rounded-2xl shadow-sm p-5 hover:shadow-md transition-all"
                        >
                            <h3 className="font-semibold text-lg mb-2 text-primary">
                                {module.title}
                            </h3>
                            <p className="text-sm leading-relaxed">{module.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Course Objectives */}
            <section className="max-w-6xl mx-auto px-6 py-14 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-primary mb-6">Course Objectives</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                        Gain a strong understanding of airline operations, tourism management,
                        and hospitality standards.
                    </li>
                    <li>
                        Develop exceptional interpersonal, communication, and customer service
                        skills.
                    </li>
                    <li>
                        Prepare students to become adaptable, confident professionals capable
                        of thriving in dynamic airline environments.
                    </li>
                </ul>
            </section>

            {/* Course Overview */}
            <section className="max-w-6xl mx-auto px-6 py-14 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-primary mb-6">Course Overview</h2>
                <ul className="space-y-3 text-gray-700">
                    <li>
                        <strong>Duration:</strong> 11 Months
                    </li>
                    <li>
                        <strong>Schedule:</strong> 5 Days/Week (2 Hours/Day)
                    </li>
                    <li>
                        <strong>Eligibility:</strong> 12th Pass
                    </li>
                    <li>
                        <strong>Age Limit:</strong> 17–24 Years
                    </li>
                </ul>

            </section>

            {/* Career Opportunities */}
            <section className="max-w-6xl mx-auto px-6 py-14 border-t border-gray-200">
                <h2 className="text-3xl font-bold text-primary mb-6">
                    Career Opportunities
                </h2>
                <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                    {[
                        "Ground Staff Executive",
                        "Travel Consultant",
                        "Cabin Crew Assistant",
                        "Customer Relationship Officer",
                        "Airline Service Agent",
                    ].map((career, i) => (
                        <div
                            key={i}
                            className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition-all"
                        >
                            {career}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
